import './UserRevisions.css';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../hooks/useLogin';
import UserStatistics from './UserStatistics';
import UpdateHistory from './cancelReservation/UpdateHistory';
import CancelReservationMessage from './cancelReservation/CancelReservationMessage';
import { app, getDatabase, ref, onValue, off, push } from '../firebase';


export default function UserRevisions() {
  const {user} = useLogin();  
  // const [isLoading , setIsLoading] = useState(true);
  const [allUsersRevisions , setAllUsersRevisions] = useState([]);
  const[allUserRevisions , setAllUserRevisions] = useState([]);
  const [isCancelReservationMessage, setIsCancelReservationMessage] = useState(false);
  const [match , setmatch] = useState({});
  const userRevisionDatabaseURL = "https://airbenb-448c7-default-rtdb.firebaseio.com/UsersRevisions";
  const navigate = useNavigate();

  const handleIsCancelReservationMessage = (index) => {
    setIsCancelReservationMessage(!isCancelReservationMessage);
    setmatch(allUserRevisions[index]);
  };

  useEffect(() => {
    // Set up Firebase Realtime Database listener when the component mounts
    const databaseRef = ref(getDatabase(app), `UsersRevisions`);

    const handleData = (snapshot) => {
      if (snapshot.val()) {
        console.log("update from listen.....")
        setAllUserRevisions(Object.values(snapshot.val()));
      } else {
        setAllUserRevisions([]);
      }
    };

    // Attach the event listener
    onValue(databaseRef, handleData);

    // Detach the event listener when the component unmounts
    return () => {
      off(databaseRef, handleData);
    };
  }, []);   

useEffect(()=>{
    const getUserRevisions = async () => {
        try{
            const response = await fetch(`${userRevisionDatabaseURL}.json`);
    
            const data = await response.json();
            
            setAllUsersRevisions(Object.values(data));            

        }catch(error){
            console.error('Failed to read userRevision from the database' , error);
        }
  
    }
    getUserRevisions();
    // setIsLoading(false);
},[])

useEffect(()=>{
    // console.log("allUserRevision" , allUsersRevisions);
    // console.log("user.email : " , user.email)
    const userRevisionList = allUsersRevisions.filter((everyUserRevision) => {
        console.log("everyUserRevision" , everyUserRevision);
        console.log("everyUserRevision.email" , everyUserRevision.email);
        return user.email === everyUserRevision.email;
    });    

    setAllUserRevisions(userRevisionList);
},[allUsersRevisions]);


  return (
  <div className="user-revisions-body">
    <h2>{user.displayName} Revisions </h2>
    <div className="user-revisions-body-container">
      <div className="user-revisions-container">
        {allUserRevisions.map((userRevision, index) => (
          <div style={{margin : '14px'}} key={index} className="user-revisions-item">
            <div style={{ backgroundColor: userRevision.stilActive ? "inherit" : "grey" }} className="user-revision-img-container">
              <img className="user-revision-img" src={userRevision.resreservedHouseImg}></img>
            </div>
            <div style={{ backgroundColor: userRevision.stilActive ? "inherit" : "grey" }} className="div">
            <p>house name: {userRevision.reservedHouseName} <br/></p>
            <p>dates: {new Date(userRevision.reservedCheckIn).toDateString()} - {new Date(userRevision.reservedCheckOut).toDateString()}<br/></p>
            <p>bedrooms: {userRevision.resreservedHouseBedrooms} <br/></p>
            <span className="user-revision-owner-container">
              <p> house owner: {userRevision.reservedHouseOwner}</p>
              <img className="user-revision-owner-img" src={userRevision.resreservedOwnerHouseImg} alt="ownerProfilePic"></img>
            </span>
            <p>price for a night: {userRevision.reservedHousePricePerNight}</p>
            <p>total price: {userRevision.reservedHousePrice}</p>
            <button onClick={() => handleIsCancelReservationMessage(index)} disabled={!userRevision.stilActive}>Cancel Reservation ❌</button>
            <button onClick={() => navigate(`/chat/${userRevision.revisionId}`)}>Chat With The Owner 🛎️</button>
            {isCancelReservationMessage ? <CancelReservationMessage match = {match} index = {index} userRevision={userRevision} handleIsCancelReservationMessage = {handleIsCancelReservationMessage} /> : null}
            </div>
          </div>
        ))}
        {/* <UpdateHistory match={match}/> */}
      </div>
      <UserStatistics allUserRevisions={allUserRevisions}/>
    </div>
  </div>
  )
}
