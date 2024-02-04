import { useState } from 'react';
import './CancelReservationMessage.css';
import CancelReservation from './CancelReservation';
export default function CancelReservationMessage({ match ,handleIsCancelReservationMessage }) {
  const [isCancel,setIsCancel] = useState(false);
  return (
    (match) ? (
      <div className="cancel-reservation-overlay">
        <div className="cancel-reservation-container">
          <div className="cancel-reservation-items">
            <h3>Are You Sure You Wanna To Cancel Our Awesome House ? 😿</h3>
            <div className="cancel-reservation-buttons">
              <button className="cancel-reservation-button" onClick={handleIsCancelReservationMessage}>😎</button>
              <button className="cancel-reservation-button" onClick={() => setIsCancel(true)}>💔</button>
            </div>
            <div className="cancel-reservation-items2">
              <div className="cancel-revision-img-container">
                <img className="cancel-revision-img" src={match.resreservedHouseImg}></img>
              </div>
              <div className="cancel-revision-info-container">    
                <p className="cancel-revision-owner-text">house name: {match.reservedHouseName} <br /></p>
                <p className="cancel-revision-owner-text">dates: {new Date(match.reservedCheckIn).toLocaleDateString()} - {new Date(match.reservedCheckOut).toLocaleDateString()}<br /></p>
                <span className="cancel-revision-owner-container">
                    <p className="cancel-revision-owner-text"> house owner: {match.reservedHouseOwner}</p>
                    <img className="cancel-revision-owner-img" src={match.resreservedOwnerHouseImg} alt="ownerProfilePic"></img>
                </span>
                <p className="cancel-revision-owner-text">price for a night: {match.reservedHousePricePerNight}</p>
                <p className="cancel-revision-owner-text">total price: {match.reservedHousePrice}</p>
              </div>
            </div>
          </div>
        </div>
        {isCancel ? <CancelReservation match={match}/> : null}
      </div>
    ) : null
  );
}