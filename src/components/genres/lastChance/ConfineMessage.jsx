import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ConfineMessage.css'
export default function ConfineMessage({ offer , handleSetOrderedHouse , handleIsConfineMessage }) {
  const housesDatabaseURL = "https://airbenb-448c7-default-rtdb.firebaseio.com/Houses";
  const navigate = useNavigate(); 

  const handleSave = async () => {
    try {
      const residence = { ...offer };
    //   const excludedProperties = ['totalPrice'];
    //   excludedProperties.forEach(prop => delete residence[prop]);
    //   console.log("offer" , offer);
    //   console.log("residence: ", residence);

      try {
        let resposne = await fetch(`${housesDatabaseURL}/${residence.id}/BusyDates.json`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(residence.BusyDates),
        });
        let data = resposne.json();
        await fetch(`${housesDatabaseURL}/${residence.id}/BusyDates/${data.name}.json`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({id : data.name}),
        });
        setTimeout(() => {
            handleSetOrderedHouse(residence);
            console.log('Document updated successfully from Last Min:', residence.id);
            navigate('/revision');
          }, 3000); // 2000 milliseconds = 2 seconds
      } catch (error) {
        console.error('Error updating document:', error);
      }
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  return (
    <div className="overlay">
      <div className="popup-container">
        <div className="popup-message-container">
          <div className="popup-message-heder">
            <img className="popup-message-img" src={offer.img} alt="offerImg"/>
            <h4 className="popup-message-title">{offer.name}</h4>
          </div>
          <div className="popup-message-body">
            <p className="popup-message-p">{`location ${offer.location}`}</p>
            <p className="popup-message-p">{`bedrooms ${offer.bedrooms}`}</p>
            <p className="popup-message-p">{`Discount %${offer.discountPercentages} $${offer.pricePerNight} / night`}</p>
            <p className="popup-message-p">{`check in : ${offer.BusyDates.checkInDay} check out :  ${offer.BusyDates.checkOutDay}`}</p>
            <p className="popup-message-p">{`owner : ${offer.ownerName}`}<img className="popup-message-owner-img" src={offer.ownerProfilePic} alt="ownerProfilePic"/></p>
          </div>
          <div className="popup-message-buttons">
            <button className="popup-message-button" onClick={handleSave}>
              Sure
            </button>
            <button className="popup-message-button" onClick={handleIsConfineMessage}>
              Not Sure
            </button>
          </div>
        </div>
      </div>
  </div>
  );
}
