import './Collapsed.css';
import { useState } from 'react';
import { useCollapse } from 'react-collapsed';
import { useLogin } from '../../hooks/useLogin';
import { useNavigate } from 'react-router-dom';
export default function Collapsed() {
  const { user ,logout } = useLogin();
  const profilePic = user.photoURL;

  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  const navigate = useNavigate();

  function handleOnClick() {
    setExpanded(!isExpanded);
  }

   const navigateToMYRevisions = () => {
    setExpanded(false);
    navigate(`/${user.displayName}/resvisions`);
   }

   const loginOut = () => {
      console.log("toggle login out")
      logout();    
   }

  return (
      <div className="collapsible-container">
        <div className="collapsible">
            <div className="header" {...getToggleProps({ onClick: handleOnClick })}>
            <img className="collapsible-avatarNavbar" src={profilePic} alt="Profile" />
            </div>
            <div {...getCollapseProps()}>
              <div className="content">
                <p onClick={navigateToMYRevisions}>My Revisions</p>
                <p onClick={()=> navigate(`/${user.displayName}/reviews`)}>My Reviews</p> 
                <p onClick={loginOut}>Log Out</p> 
              </div>
            </div>
        </div>
      </div>
  );

  
}
