import React, { useEffect, useState } from 'react'
import { useNavigate , useParams} from 'react-router-dom';
import { useLogin } from '../../hooks/useLogin';

export default function CancellationSummary({}) {
  let tempNumberOfNights = 0;
  let numberOfNights = 0;
  const { user } = useLogin();
  const { userRevisionId } = useParams();
  const [cancelReservation , setCancelReservation] = useState({});
  const userRevisionDatabaseURL = "https://airbenb-448c7-default-rtdb.firebaseio.com/UsersRevisions";
  useEffect(()=>{
    const getCancelReservation = async () => {
      try{
          const response = await fetch(`${userRevisionDatabaseURL}/${userRevisionId}.json`);
          const data = await response.json();
          setCancelReservation(data);
          console.log("get cancel reservation data...")
          console.log("data : " , data);
        }catch(error){
          console.error('Failed to read userRevision from the database' , error);
        }
  }
  
  getCancelReservation();
  },[])

  useEffect(()=>{
    const date1 = new Date(cancelReservation.reservedCheckIn);
    const date2 = new Date(cancelReservation.reservedCheckOut);
    if(date1.getTime() === date2.getTime()){
        console.log("one night stand : ");
        const numberOfDays = 1;
        tempNumberOfNights = 1;
    }
    else if (date1.getTime() < date2.getTime() && date1.getTime() !== date2.getTime()) {
        const timeDifference = date2.getTime() - date1.getTime();
        const numberOfDays = timeDifference / (1000 * 60 * 60 * 24);
        // console.log(date1.getTime() , "       " , date2.getTime() , "     " , timeDifference + "    "  + numberOfDays);
        tempNumberOfNights = Math.round(numberOfDays);
    
      }
      else{
        tempNumberOfNights = cancelReservation.reservedCheckIn;
      }
      numberOfNights = tempNumberOfNights;
  },[])

    const navigate = useNavigate();

    return (
        <div className="revision-container">
          <h1 className="revision-heading">Cancel Revision Summary</h1>
          <div className="revision-info-container">
            <div>
              <img className="revision-img" src={cancelReservation.resreservedHouseImg}/>
            </div>
            <div className="revision-info-item">
              <p className="revision-label">House Name:</p>
              <p className="revision-value">{cancelReservation.reservedHouseName}</p>
            </div>
            <div className="revision-info-item">
              <p className="revision-label">Check-in Date:</p>
              <p className="revision-value">{cancelReservation.reservedCheckIn} 16:20</p>
            </div>
            <div className="revision-info-item">
              <p className="revision-label">Check-out Date:</p>
              <p className="revision-value">{cancelReservation.reservedCheckOut} 04:20</p>
            </div>
            <div className="revision-info-item">
              <p className="revision-label">Owner:</p>
              <p className="revision-value">{cancelReservation.reservedHouseOwner}</p>
            </div>
            <div className="revision-info-item">
              <p className="revision-label">Price per Night:</p>
              <p className="revision-value">${cancelReservation.reservedHousePricePerNight}</p>
            </div>
            <div className="revision-info-item">
              <p className="revision-label">Number of Nights:</p>
              <p className="revision-value">{numberOfNights}</p>
            </div>
            <div className="revision-info-item">
              <p className="revision-label">Total Price:</p>
              <p className="revision-value">${cancelReservation.reservedHousePrice}</p>
            </div>
          </div>
          <hr className="revision-horizontal-line" />
          <button className="revision-chat-button" onClick={() => navigate(`/${user.reservedHouseGust}/resvisions`)}>
            My Reservations
          </button>
          <button className="revision-return-button" onClick={()=>navigate('/residences')}>back Home`s</button>
        </div>
      );
}
