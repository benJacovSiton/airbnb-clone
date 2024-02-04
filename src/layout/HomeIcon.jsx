import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function HomeIcon() {
    const navigate = useNavigate();
    const homeIcons = [
        {iconUrl : "https://img.icons8.com/clouds/100/home.png"} , 
        {iconUrl : "https://img.icons8.com/flat-round/64/home--v1.png"},
        {iconUrl : "https://img.icons8.com/pieces/64/experimental-home-pieces.png" },
        {iconUrl : "https://img.icons8.com/isometric/50/home.png" },
        {iconUrl : "https://img.icons8.com/bubbles/50/home-page.png"},
        {iconUrl : "https://img.icons8.com/clouds/100/home-page.png"},

    ]
    const homeIcon = homeIcons[2].iconUrl;
  return (
    <div>
        <img width="50" height="50" src={homeIcon} alt="home" onClick={()=>navigate('/residences')}/>
    </div>
  )
}
