import { auth, googleProvider} from "../firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup, 
  updateProfile,
  signOut,
  onAuthStateChanged, // Import the onAuthStateChanged function
} from "firebase/auth";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export function useLogin() {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const navigate = useNavigate();

  
  useEffect(() => {
    // Set up an observer to listen for changes in authentication state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, email, photoURL } = user;
        const userObject = { displayName, email, photoURL };
        setUser(userObject);
        setIsLogin(true); // Set isLogin to true when a user is logged in
      } else {
        setUser({});
        setIsLogin(false); // Set isLogin to false when no user is logged in
      }
      setIsLoading(false); // Set isLoading to false regardless of the authentication state
    });

    // Clean up the observer when the component unmounts
    return () => unsubscribe();
  }, []);
  
  const logupWithEmailAndPassword = async (email1, password, alias, photoSource, photoUrl, photoLocal) => {
    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email1, password);
  
      // Ensure user object is available
      const user = userCredential?.user;
  
      if (user) {
        if (photoSource === 'url') {
          // Update user profile with display name and photo URL
          await updateProfile(user, {
            displayName: alias,
            photoURL: photoUrl,
          });
        } else if (photoSource === 'local') {
          const fileExtension = photoLocal.type.split('/')[1]; // Get file extension dynamically
          const fileName = `profile.${fileExtension}`;
          
          // Upload the local file to Firebase Storage
          const photoURL = await uploadLocalFile(user, photoLocal, fileName);
  
          // Update user profile with the download URL
          await updateProfile(user, {
            displayName: alias,
            photoURL: photoURL,
          });
        }
  
        const { displayName, email, photoURL } = user;
        const userObject = { displayName, email, photoURL };
        setUser(userObject);
        console.log("User created successfully:", userObject);
        navigate("/welcome");
      } else {
        console.error("User object not available.");
      }
    } catch (err) {
      console.error("Error creating user:", err);
    }
  };
  
  // Helper function to upload local file to Firebase Storage
  const uploadLocalFile = async (user, file, fileName) => {
    try {
      const storageRef = getStorage();
      const userRef = ref(storageRef, `users/${user.uid}/${fileName}`);
      await uploadBytes(userRef, file, /* metadata */ { contentType: file.type });
      return await getDownloadURL(userRef);
    } catch (error) {
      console.error("Error uploading local file:", error);
      return null;
    }
  };
  
  
const loginWithEmailAndPassword = async (email1,password) => {
    try {
      await signInWithEmailAndPassword(auth, email1,password);
      const { displayName, email, photoURL } = auth?.currentUser || {};
      
      const userObject = { displayName, email, photoURL };
      console.log(userObject);
      setUser(userObject);
      navigate("/welcome");

    } catch (err) {
      console.error(err);
    }
  };

  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      const { displayName, email, photoURL } = auth?.currentUser || {};
      
      const userObject = { displayName, email, photoURL };
      console.log(userObject);
      setUser(userObject);
      console.log(user);
      navigate("/welcome");

    } catch (err) {
      console.error(err);
    }
  };
  


  const logout = async () => {
    try {
      await signOut(auth);
      console.log("bye" , auth ?.currentUser?.email);
      setUser({});
      navigate('/logup');
    } catch (err) {
      console.error(err);
    }
  };


  return { user, isLoading, isLogin, loginWithEmailAndPassword, loginWithGoogle, logout , logupWithEmailAndPassword };
}
