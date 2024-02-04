import React, { useEffect, useState } from "react";
import "./LastChanceCard.css";
import { useNavigate } from "react-router-dom";
import ConfineMessage from "./ConfineMessage";
export default function LastChanceCard_({ offer , handleSetOrderedHouse }) {
  const [isConfineMessage, setIsConfineMessage] = useState(false);
  const handleIsConfineMessage = () => {
    setIsConfineMessage(!isConfineMessage);
  };
  console.log(offer);
  const navigate = useNavigate();
  return (
    <div className="last-chance-container">
      <div className="last-chance-card">
        <div className="last-chance-info">
          <div className="last-chance-card-section">
            <div className="last-chance-img-container">
              <img className="last-chance-image" src={offer.img} alt="offerImg" />
            </div>
            <h2 className="last-chance-title">{offer.name}</h2>
            <p className="last-chance-location">{offer.location}</p>
            <p className="last-chance-capacity">{`bedrooms ${offer.bedrooms}`}</p>
            <ul className="last-chance-amenities">
              <li>{`Bathrooms ${offer.bathrooms}`}</li>
              <li>{`Smoking: ${offer.canSmoke ? "Yes" : "No"}`}</li>
              <li>{`Pets: ${offer.petFriendly ? "Yes" : "No"}`}</li>
              <li>Wifi: {offer.wifi ? 'Yes' : 'No'}</li>
              <li>Parking: {offer.parking ? 'Yes' : 'No'}</li>
              <li>Balcony: {offer.hasBalcony ? 'Yes' : 'No'}</li>
              <li>Garden: {offer.hasGarden ? 'Yes' : 'No'}</li>
              <li>Distance from City Center: {offer.distance} km</li>
              <li>{`Owner: ${offer.ownerName}`} 
                <img className="last-chance-owner-image" src={offer.ownerProfilePic} alt="ownerProfilePic"/>
              </li>
            </ul>
            <p className="last-chance-price">{`Discount %${offer.discountPercentages} $${offer.pricePerNight} / night`}</p> 
            <p className="last-chance-price">{`check in : ${offer.BusyDates.checkInDay} check out :  ${offer.BusyDates.checkOutDay}`}</p>                     
            <div className="last-chance-rating actions">
              {`Rating: ${offer.rating}/5`}
              <button onClick={() => setIsConfineMessage(!isConfineMessage)}>Book Now ! 🧳</button>
              {isConfineMessage ? <ConfineMessage offer={offer} handleSetOrderedHouse={handleSetOrderedHouse} handleIsConfineMessage ={handleIsConfineMessage}/> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
