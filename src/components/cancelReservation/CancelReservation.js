import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export default function CancelReservation({ match}) {
  const [houseId , setHouseId] = useState("");
  const [busyDateId , setBusyDateId] = useState("");
  const [allBusyDates , setAllBusyDates] = useState([]);
  const [allBusyDatesKeys , setAllBusyDatesKeys] = useState([]);
  const [isFinish , setIsFinish] = useState(false);
  const [isFinishLoading , setIsFinishLoading] = useState(false);
  const housesDatabaseURL = 'https://airbenb-448c7-default-rtdb.firebaseio.com/Houses/';
  const revisionDatabaseURL = 'https://airbenb-448c7-default-rtdb.firebaseio.com/Revision/';
  const userRevisionDatabaseURL = "https://airbenb-448c7-default-rtdb.firebaseio.com/UsersRevisions";
  const navigate = useNavigate();
  let keys = [];  
  let busyDatesArray = [];
  let isFound = false;
  let busyDateId1 = "";
  
  useEffect(() => {
    const setReservationCancelled = async () => {
      try {
        await fetch(`${revisionDatabaseURL}/${match.revisionId}.json`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({stilActive: false }),
        });
        console.log("PATCH match.revisionId : ", match.revisionId);
      } catch (error) {
        console.error('Error patch reservation active', error);
      }
    };
    setReservationCancelled();
  }, []);
  
  
  useEffect(()=>{
    const setUserReservationCancelled = async () => {
      try {
        await fetch(`${userRevisionDatabaseURL}/${match.userRevisionId}.json`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ stilActive: false }),
        });
        console.log("PATCH match.userRevisionId : " , match.userRevisionId);
      } catch (error) {
        console.error('Error deleting user reservation from the database', error);
      }
    };
    setUserReservationCancelled();
  },[])

  useEffect(()=>{
    const getHouse = async () => {
      try{
        const response = await fetch(`${housesDatabaseURL}.json`)
        const data = await response.json();
        const houses = Object.values(data);
        // console.log("busy dates : " , data);
        for(const house of houses){
          if(house.name === match.reservedHouseName){
            setHouseId(house.id);
            break;
          }
        }
        }catch(error){
          console.error('cant get houses' , console.error);
        }
    }
    getHouse();
    setTimeout(() => {
      console.log('get house id from cancel reservation:', houseId);
      setIsFinishLoading(true);
    }, 1000); 
  },[])

  useEffect(()=>{
    const getBusyDates = async () => {
      try{
        console.log("houseId" , houseId);
        console.log("match" ,match);
        const response = await fetch(`${housesDatabaseURL}/${houseId}/BusyDates.json`)
        if (!response.ok) {
          throw new Error(`Failed to fetch busy dates. Status: ${response.status}`);
        }
        const data = await response.json();
        busyDatesArray = Object?.values(data);
        setAllBusyDates(Object?.values(data));
        setAllBusyDatesKeys(Object?.keys(data));
        keys = Object?.keys(data);
        isFound = getDeleteBusyDatesId(keys,busyDatesArray);
        // console.log("busy dates : " , busyDatesArray);
        // console.log("keys " , keys);
      }catch(error){
        console.error("cant get busy dates" , error);
      }
      finally{
        // isFound = getDeleteBusyDatesId(keys,busyDatesArray);
        console.log("isFound : " , isFound);
      }
    }
    getBusyDates();
    setIsFinish(true);
  },[isFinishLoading])
  
  useEffect(()=>{
    setTimeout(() => {
      console.log('Document updated successfully from Cancel Reservation:', match.userRevisionId);
      console.log('from Cancel Reservation:', match.userRevisionId);
      navigate(`/${match.userRevisionId}/revisionCancellation`);
    }, 3000); 
  },[isFinish])

  const deleteBusyDates = async () => {
    try{
      await fetch(`${housesDatabaseURL}/${houseId}/BusyDates/${busyDateId1}.json`, {
        method: 'DELETE',
      });
      console.log("delete dates");
    }catch(error){
      console.error("cant delete busy dates ")
    }
  }

  const getDeleteBusyDatesId = (keys, busyDatesArray) => {
    // לולאה שרצה על כל הערכים - תאריכים
    let index = 0;
    let isFound = false;
    const reservedCheckInDate = new Date(match.reservedCheckIn);
    const reservedCheckOutDate = new Date(match.reservedCheckOut);
  
    console.log("busy dates : ", busyDatesArray);
    console.log("keys ", keys);
    console.log("reservedCheckInDate", reservedCheckInDate);
  
    for (const busyDate of busyDatesArray) {
      const busyCheckInDate = new Date(busyDate.checkInDay);
      console.log("busyCheckInDate", busyCheckInDate);
      const busyCheckOutDate = new Date(busyDate.checkOutDay);
      
      if (
        reservedCheckInDate.getTime() === busyCheckInDate.getTime() &&
        reservedCheckOutDate.getTime() === busyCheckOutDate.getTime()
      ) {
        isFound = true;
        break;
      }
  
      // בהימצא תאריכים שווים למחיקה - נשמור את האינדקס של התאריכים ברשימה
      index++;
    }
  
    // הדאטה בייס מורכב מאבוייקט שהוא זוג של מפתח וערכים לכן אורכן שווה
    // ואם נמצא את אינדקס האיבר שצריך להימחק גם נמצא את האינדקס של המפתח אותו נשמור
    if (isFound) {
      setBusyDateId(keys[index]);
      busyDateId1 = keys[index];
      console.log("busyDateId : ", busyDateId);
      console.log("busyDateId1 : ", busyDateId1);
      deleteBusyDates();
      return true;
    }
    return false;
    // ונשתמש בו בפונקציה האסינכורנית שאחראית על מחיקת התאריכים מהבית
    // נשיג את המפתח של אותם התאריכים ונכין אותן למחיקה
  };
  
}

