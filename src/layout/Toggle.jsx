// Toggle.jsx
import './Toggle.css';
import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';
import { useNavigate } from 'react-router-dom';


export default function Toggle({handleSetUser}) {
   const [toggle, setToggle] = useState(true)
   const { user ,logout } = useLogin();
   const profilePic = user.photoURL;
   const navigate = useNavigate();
   
   const navigateToMYRevisions = () => {
    setToggle(false);
    navigate(`/${user.displayName}/resvisions`);
   }

   const loginOut = () => {
      console.log("toggle login out")
      handleSetUser({});
      logout();    
   }

   return (
     <div className={`toggle-container ${toggle ? 'active' : ''}`}>
       <img className="toggle-img" src={profilePic} alt="ProfilePic" onClick={() => setToggle(!toggle)} />
       {toggle && (
         <ul className="toggle-list-group">
           <li className="toggle-list-group-item" onClick={navigateToMYRevisions}>My Revisions</li>
           <li className="toggle-list-group-item" onClick={loginOut}>Log Out</li>
           {/* <li className="toggle-list-group-item">A third item</li>
           <li className="toggle-list-group-item">A fourth item</li>
           <li className="toggle-list-group-item">And a fifth one</li> */}
         </ul>
       )}
     </div>
   )
 }
