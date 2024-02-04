import "./Logup.css";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import airbnbLogo from "./../airbnb.png";
import {useLogin} from "../hooks/useLogin"

export default function Logup() {
  const [emailInput, setEmailInput] = useState('');
  const [aliasInput, setAliasInput] = useState('');
  const [photoSource, setPhotoSource] = useState('local'); // 'local' or 'url'
  const [photoUrl, setPhotoUrl] = useState('');
  const [photoLocal , shetPhotoLocal] = useState(null)
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordAgainInput, setPasswordAgainInput] = useState('');

  const{ user, isLoading, isLogin , logupWithEmailAndPassword } = useLogin();


  const handlePhotoSourceChange = (e) => {
      setPhotoSource(e.target.value);
  };

  return (
    <div className="container">
      <div className="box">
        <div className="icon">
          <img src={airbnbLogo} alt="Airbnb Logo" />
        </div>
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
            <label>Alias Name:</label>
            <input
              type="text"
              placeholder="Enter your alias"
              onChange={(e) => setAliasInput(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Profile Pic:</label>
            <div>
              <input
                type="radio"
                id="local"
                name="photoSource"
                value="local"
                checked={photoSource === 'local'}
                onChange={handlePhotoSourceChange}
              />
              <span htmlFor="local">Local Storage</span>
              <input
                type="radio"
                id="url"
                name="photoSource"
                value="url"
                checked={photoSource === 'url'}
                onChange={handlePhotoSourceChange}
              />
              <span htmlFor="url">URL Path</span>
            </div>
            <div>
       
            </div>
            {photoSource === 'local' ? (
              <input
                type="file"
                accept="image/*"
                onChange={(e) => shetPhotoLocal(e.target.files[0])}
              />
            ) : (
              <input
                type="text"
                placeholder="Enter photo URL path"
                onChange={(e) => setPhotoUrl(e.target.value)}
              />
            )}
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPasswordInput(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Repeat Yourself:</label>
            <input
              type="password"
              placeholder="Enter your password again"
              onChange={(e) => setPasswordAgainInput(e.target.value)}
            />
          </div>
          <div className="btn-container">
              <button type="button" className="btn" onClick={() => logupWithEmailAndPassword(emailInput,passwordInput,aliasInput,photoSource,photoUrl,photoLocal)}>Get started</button>
              <Link to="/" className="link">Back to login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
