// Sidebar.js
// explore by our finest luxury residence lists ©
import React from "react";
import "./Sidebar.css";
import airbnbLogo from "./../airbnb.png";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate  ();
  return (
    <div className="side-container">
      <div className="side-fixed-content">
        <div className="side-content">
          <div className="side-item">
            <p className="side-title">explore our luxury residences</p>
          </div>
          <div className="side-item" onClick={()=> navigate('/explore/hotDeals')}>
            <p className="side-text">Hot deals</p>
            <img width="40" height="40" src="https://img.icons8.com/color/48/chili-pepper.png" alt="chili-pepper"/>
          </div>
          <div className="side-item"  onClick={()=> navigate('/explore/lastChance')}>
            <p className="side-text">Last Chance</p>
            <img width="40" height="40" src="https://img.icons8.com/office/40/historical.png" alt="historical"/>
          </div>
          <div className="side-item"  onClick={()=> navigate('/explore/mostBeloved')}>
              <p className="side-text">Most Beloved</p>
              <img width="40" height="40" src="https://img.icons8.com/bubbles/50/man-with-beard-medal.png" alt="man-with-beard-medal"/>
          </div>
          <div className="side-item">
            <p className="side-text"  onClick={()=> navigate('/explore/topCharts')}>Top Charts</p>
            <img width="40" height="40" src="https://img.icons8.com/fluency-systems-regular/48/ranking--v1.png" alt="ranking--v1"/>
          </div>
        </div>
      </div>  
    </div>
  );
}

