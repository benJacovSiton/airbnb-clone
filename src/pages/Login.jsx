import { useState } from "react";
import "./Login.css";
import airbnbLogo from "./../airbnb.png";
import googleIcon from "./../googleIcon.png"
import { useNavigate } from "react-router-dom";
import {useLogin} from "../hooks/useLogin"

export default function Login() {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const{ user, isLoading, isLogin, loginWithEmailAndPassword, loginWithGoogle } = useLogin();

  const navigate = useNavigate();
  // להשתמש ביוז אפקט כדי שהקומפוננטת נסגרת לשנות את הסטייס isLoggedIn
  console.log(user);
  
  return (
    <div className="container">
      <div className="box">
        <div className="logo">
          <img src={airbnbLogo} alt="Airbnb Logo" />
        </div>
        <h2>Welcome to benBnb</h2>
        <form className="form">
          <div className="form-group">
            <label>Email address:</label>
            <input
              type="text"
              placeholder="Enter your email"
              onChange={(e) => setEmailInput(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPasswordInput(e.target.value)}
            />
          </div>
          <div>
            <button type="button" className="loginBtn" onClick={() => loginWithEmailAndPassword(emailInput,passwordInput)}>
              Log In
            </button>
          </div>
          <div className="logInWithSocial">
            <button onClick={loginWithGoogle} type="button">
              <img src={googleIcon} alt="Google Logo"></img>
            </button>
          </div>
          <div>
          <a onClick={() => navigate('/logup')}>Go to Logup</a>
          </div>
        </form>
      </div>
    </div>
  );
}


