import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase, ref, push, onValue, off } from 'firebase/database';
import { getStorage, ref as storageRef, uploadString, getDownloadURL } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDj8TPQBJuw-91hIsrMcsUMaXXZYh5Nw3k",
  authDomain: "airbenb-448c7.firebaseapp.com",
  projectId: "airbenb-448c7",
  storageBucket: "airbenb-448c7.appspot.com",
  messagingSenderId: "159546582716",
  appId: "1:159546582716:web:1bef46c47fc66797d692b9",
  measurementId: "G-3QVLEY6RKP"
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const storage = getStorage(app);

export { getDatabase, ref, push, onValue, off, storageRef, uploadString, getDownloadURL};
