import './Revision.css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {useLogin} from '../hooks/useLogin';
import { app, getDatabase, ref, push, onValue, off } from '../firebase';

export default function Revision({orderedHouse}) {

  const { user } = useLogin();
  const [revisionId , setRevisionId] = useState("");
  const [revisions , setRevisions] = useState([]);
  const [allRevision , setAllRevision] = useState({});
  const [isLoadingRevision , setisLoadingRevision] = useState(false);
  const [isLoadingFromSnapShot , setIsLoadingFromSnapShot] = useState(false);
  const [isButtonDisable,setIsButtonDisable] = useState(true);
  const RevisionDatabaseURL = "https://airbenb-448c7-default-rtdb.firebaseio.com/Revision";
  const usersRevisionDatabaseURL = "https://airbenb-448c7-default-rtdb.firebaseio.com/UsersRevisions";
  let numberOfNights = -420;
  // console.log(orderedHouse);
  const date1 = new Date(orderedHouse.dates.checkInDay);
  const date2 = new Date(orderedHouse.dates.checkOutDay);
  let tempNumberOfNights = 0;
  // console.log(date1);
  // console.log(date1);


  // the user wants to stay for one night
  if(date1.getTime() === date2.getTime()){
      console.log("one night stand : ");
      const numberOfDays = 1;
      tempNumberOfNights = 1;
  }

  // the user wants to stay for more then one night
  else if (date1.getTime() < date2.getTime() && date1.getTime() !== date2.getTime()) {
    const timeDifference = date2.getTime() - date1.getTime();
    const numberOfDays = timeDifference / (1000 * 60 * 60 * 24);
    // console.log(date1.getTime() , "       " , date2.getTime() , "     " , timeDifference + "    "  + numberOfDays);
    tempNumberOfNights = Math.round(numberOfDays);

  }
  else{
    tempNumberOfNights = orderedHouse.reservedHouseNights;
  }
  numberOfNights = tempNumberOfNights;
  // console.log("numberOfNights" , numberOfNights);
  const totalPrice = numberOfNights * orderedHouse.pricePerNight;



  const navigate = useNavigate();

  const revision = {reservedHouseName : orderedHouse.name , reservedHouseAdd : orderedHouse.location ,
    reservedHouseOwner : orderedHouse.ownerName , reservedHouseGust : user.displayName ,
    reservedHousePricePerNight : orderedHouse.pricePerNight , reservedHousePrice : totalPrice ,
    reservedCheckIn : orderedHouse.dates.checkInDay , reservedCheckOut : orderedHouse.dates.checkOutDay ,
    reservedHouseNights : numberOfNights , stilActive : true ,
    resreservedHouseImg :  orderedHouse.img , resreservedHouseBedrooms : orderedHouse.bedrooms ,
    resreservedOwnerHouseImg : orderedHouse.ownerProfilePic , reservedHouseDiscountPercentage : orderedHouse.discountPercentage ,
    reservedHousePervPricePerNight : orderedHouse.pervPricePerNight , reservedHousePrevPrice : totalPrice ,
  }

  let count = 0;
  useEffect(() => {
    const sendRevision = async () => {
      try {
        const response = await fetch(`${RevisionDatabaseURL}.json`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(revision),
        });

        if (!response.ok) 
          throw new Error('Failed to add revision to the database');
        
        const data = await response.json();
        // console.log("data.name" ,data.name)
        setRevisionId(data.name);
        await fetch(`${RevisionDatabaseURL}/${data.name}.json`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ revisionId: data.name, houseId: orderedHouse.id }),
        });
        // console.log(count);
        if(count === 1)
          setAllRevision({...revision , revisionId: data.name, houseId: orderedHouse.id});
        count++;
        // console.log(count);
      } catch (error) {
        console.error(error);
      }
    };
    sendRevision(); // Keep only this call
    setTimeout(() => {
      setisLoadingRevision(true);
      setIsButtonDisable(false);
    }, 2000); // 2000 milliseconds = 2 seconds
  }, []);

  useEffect(()=>{
    const updateUserRevision = async () => {
      try{
        if(user?.email && allRevision?.revisionId){
          // if(revisionId){
            const email = user.email;
            // console.log("email : " , email);
            // console.log("allRevision : " , allRevision);
            const response = await fetch(`${usersRevisionDatabaseURL}.json`,{
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(revision),
            });
    
            if (!response.ok) 
              throw new Error('Failed to add userRevision to the database');
          
            const data = await response.json();
            // console.log("data.name 1 :  " , data.name);
            // setRevisions(data);
            setRevisions(Object.values(data));
            const response2 = await fetch(`${usersRevisionDatabaseURL}/${data.name}.json`, {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ userRevisionId: data.name, email: user.email , revisionId : allRevision.revisionId }),
            });
    
            if (!response2.ok) 
            throw new Error('Failed to update userRevision to the database');
    
            setRevisions([...revisions , { userRevisionId: data.name, email: user.email ,revisionId : allRevision.revisionId }]);
        }
      }catch(error){
        console.error(error);
      }
    }
    updateUserRevision();
    setIsLoadingFromSnapShot(!isLoadingFromSnapShot);
  },[isLoadingRevision])


  useEffect(() => {
    // Set up Firebase Realtime Database listener when the component mounts
    const databaseRef = ref(getDatabase(app), `UsersRevisions`);

    const handleData = (snapshot) => {
      if (snapshot.val()) {
        setRevisions(Object.values(snapshot.val()));
        // console.log("revisions datasnapshot : " , revisions);
      } else {
        setRevisions([]);
      }
    };

    // Attach the event listener
    onValue(databaseRef, handleData);

    // Detach the event listener when the component unmounts
    return () => {
      off(databaseRef, handleData);
    };
  },[isLoadingFromSnapShot]);

    return (
      <div className="revision-container">
        <h1 className="revision-heading">Revision Summary</h1>
        <div className="revision-info-container">
          <div>
            <img className="revision-img" src={orderedHouse.img}/>
          </div>
          <div className="revision-info-item">
            <p className="revision-label">House Name:</p>
            <p className="revision-value">{orderedHouse.name}</p>
          </div>
          <div className="revision-info-item">
            <p className="revision-label">Check-in Date:</p>
            <p className="revision-value">{orderedHouse.dates.checkInDay || revision.reservedCheckIn} 16:20</p>
          </div>
          <div className="revision-info-item">
            <p className="revision-label">Check-out Date:</p>
            <p className="revision-value">{orderedHouse.dates.checkOutDay  || revision.reservedCheckOut} 04:20</p>
          </div>
          <div className="revision-info-item">
            <p className="revision-label">Owner:</p>
            <p className="revision-value">{orderedHouse.ownerName}</p>
          </div>
          <div className="revision-info-item">
            <p className="revision-label">Price per Night:</p>
            <p className="revision-value">${orderedHouse.pricePerNight}</p>
          </div>
          <div className="revision-info-item">
            <p className="revision-label">Number of Nights:</p>
            <p className="revision-value">{numberOfNights}</p>
          </div>
          <div className="revision-info-item">
            <p className="revision-label">Total Price:</p>
            <p className="revision-value">${totalPrice}</p>
          </div>
        </div>
        <hr className="revision-horizontal-line" />
        <button className="revision-chat-button" onClick={() => navigate(`/chat/${revisionId}`)} disabled={isButtonDisable}>
          Chat with Owner
        </button>
        <button className="revision-return-button" onClick={()=>navigate('/residences')}>back Home`s</button>
      </div>
    );
  }
