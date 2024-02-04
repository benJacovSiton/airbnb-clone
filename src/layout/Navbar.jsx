import "./Navbar.css";
import Toggle from "./Toggle";
import HomeIcon from "./HomeIcon";
import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import Collapsed from "../components/navbarComponents/Collapsed_";
import DataDisplay from "../components/navbarComponents/DataDisplay";

export default function Navbar() {
  const { user } = useLogin();
  
  const profilePic = user.photoURL;

  const userName = user.displayName;

  // console.log(profilePic, userName);

  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="nav-container">
      <div className="nav-box">
        <DataDisplay />
      </div>
      <div className="nav-user-container">
        <div className="nav-box-user">
          <HomeIcon />
        </div>
        <div className="nav-box-user">
          <p style={{ color: "white" }}>{`wellcome , ${userName}`}</p>
        </div>
        <div className="nav-box-user">
          {!imageError ? <Collapsed /> : <p>Error loading image</p>}
          {/* {!imageError ? <Toggle /> : <p>Error loading image</p>} */}
        </div>
      </div>
    </div>
  );
}
