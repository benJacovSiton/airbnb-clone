// ResidenceCard.js
import "./ResidenceCard.css";
import "../layout/Layout.css";
import Dialog from "./Dialog";
import { useState } from "react";
import { useLogin } from '../hooks/useLogin';
import { useNavigate} from 'react-router-dom';

export default function ResidenceCard({ residence , handleSetOrderedHouse , index }) {
  const { user } = useLogin();
  const [isDialog, setIsDialog] = useState(false);
  const navigate = useNavigate();

  return (
      <div className="residence-card">
        <div className="residence-info">
          <div className="card-section">
            <div className="residence-img-container" onClick={()=>navigate(`/residences/${residence.key}/${residence.name}/images`)}>
              <img className="residence-image" src={residence.img} alt="Residence" />
            </div>
            <h2 className="title">{residence.name}</h2>
            <p className="location">{residence.location}</p>
            <p className="capacity">{`${residence.bedrooms} bedrooms`}</p>
            <ul className="amenities">
              <li>{`Bathrooms : ${residence.bathrooms}`}</li>
              <li>{`Smoking: ${residence.canSmoke ? "Yes" : "No"}`}</li>
              <li>{`Pets: ${residence.petFriendly ? "Yes" : "No"}`}</li>
              <li>Wifi: {residence.wifi ? 'Yes' : 'No'}</li>
              <li>Parking: {residence.parking ? 'Yes' : 'No'}</li>
              <li>Balcony: {residence.hasBalcony ? 'Yes' : 'No'}</li>
              <li>Garden: {residence.hasGarden ? 'Yes' : 'No'}</li>
              <li>Distance from City Center: {residence.distance}m</li>
              <li>{`Owner: ${residence.ownerName}`} 
                <img className="residence-owner-image" src={residence.ownerProfilePic} alt="ownerProfilePic"/>
              </li>
            </ul>
            {residence.discountPercentages > 0 ? (
              <p className="price">{`Discount %${residence.discountPercentages} $${residence.pricePerNight} / night`}</p>
            ) : (
              <p className="price">{`$${residence.pricePerNight} / night`}</p>
            )}            
            <div className="rating actions">
              {`Rating: ${residence.rating}/5`}
              <button onClick={() => setIsDialog(true)}>Book Now !</button>
              {isDialog ? <Dialog residence={residence} handleSetOrderedHouse={handleSetOrderedHouse} setIsDialog={setIsDialog}  /> : null}
              <button style={{fontStyle:'italic', fontSize:'small', color:'black'}} onClick={() => navigate(`/${user.email}/${residence.id}/review`)}>or check out me reviews</button>
              {/* {isMoreInfo ? <ResidencesReview residence={residence} /> : null} */}
            </div>
          </div>
        </div>
      </div>
  );
}

