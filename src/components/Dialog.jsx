import React, { useState, useEffect } from "react";
import './Dialog.css';
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useNavigate } from "react-router-dom";
import useFilter from "../hooks/useFilter";
import { app, getDatabase, ref, onValue, off, push } from '../firebase';


export default function Dialog({ residence , handleSetOrderedHouse , setIsDialog }) {
  const [date, setDate] = useState(new Date());
  const [busyDates, setBusyDates] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(true);
  console.log("residence",residence);
  const revisionDatabaseURL = 'https://airbenb-448c7-default-rtdb.firebaseio.com/Revision/';
  const housesDatabaseURL = `https://airbenb-448c7-default-rtdb.firebaseio.com/Houses/${residence.id}`;
  const navigate = useNavigate();

  useEffect(() => {
    // Set up Firebase Realtime Database listener when the component mounts
    const databaseRef = ref(getDatabase(app), `Revision/`);
    const handleData = (snapshot) => {
      console.log(snapshot.val());
      if (snapshot.val()) {
        const data = Object.values(snapshot.val());
        console.table("data" , data);
        const reservations = data.filter((reservation)=>{
          return reservation.stilActive === true;
        })
        console.log("reservations",reservations);
        let busyDatesArray = [];
        for(const busyDate of reservations){
          busyDatesArray.push({checkIn : busyDate.reservedCheckIn , checkOut : busyDate.reservedCheckOut});
        }
        console.log("busyDatesArray" , busyDatesArray);
        setBusyDates(busyDatesArray);
      } else {
        setBusyDates([]);
      }
    };
    
    // Attach the event listener
    onValue(databaseRef, handleData);

    // Detach the event listener when the component unmounts
    return () => {
      off(databaseRef, handleData);
    };
  }, []);

  
  useEffect(() => {
    const fetchBusyDates = async () => {
      try {
        const response = await fetch(`${housesDatabaseURL}/BusyDates.json`);
        const busyDatesObject = await response.json();
   
        // Convert the object values to an array of Date objects
        const busyDatesArray = Object.values(busyDatesObject || []);
        // console.log(busyDatesArray);
        const dateArray = [];
        
        let reserve = 0; // Add this line to declare 'reserve'
  
        while (reserve < busyDatesArray.length) {

          let currentDate = new Date(busyDatesArray[reserve].checkInDay);
          let currentCheckOutDate = new Date(busyDatesArray[reserve].checkOutDay);
          // let currentDate = busyDatesArray[reserve].checkInDay;
          // let currentCheckOutDate = busyDatesArray[reserve].checkOutDay;
          // console.log(currentDate);
          // console.log(currentCheckOutDate);

          while (currentDate <= currentCheckOutDate) {
            // console.log(currentDate);
            // dateArray.push(currentDate);
            dateArray.push(new Date(currentDate));
            currentDate.setDate(currentDate.getDate() + 1);
          }
  
          reserve++;
        }
  
        // console.log(dateArray);
        setBusyDates(dateArray);
  
      } catch (error) {
        console.error('Error fetching busy dates:', error);
      }
    };
  
    fetchBusyDates();
  }, [housesDatabaseURL]);
  
  const handleSave = async () => {
    try {
      const checkInDay = Array.isArray(date) ? date[0].toDateString() : date.toDateString();
      const checkOutDay = Array.isArray(date) ? date[1].toDateString() : null;

      // Add a new entry to the array
      const newEntry = {
        checkInDay,
        checkOutDay,
      };
      // console.log(newEntry);
      try {
        await fetch(`${housesDatabaseURL}/BusyDates.json`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newEntry),
        });
        handleSetOrderedHouse({...residence , dates : newEntry});
        console.log('Document updated successfully:', residence.id);
        navigate('/revision');
      } catch (error) {
        console.error('Error updating document:', error);
      }
    } catch (error) {
      console.error('Error saving data:', error);
    }

    setIsDialogOpen(false);
  };

  const handleClose = () => {
    setIsDialogOpen(false);
    setIsDialog(false);
  };

const tileDisabled = ({ date, view }) => {
  if (view === 'month') {
    if (Array.isArray(date)) {
      // Disable all dates between check-in and check-out
      const startDate = new Date(date[0]);
      const endDate = new Date(date[1]);
      return busyDates.some(d => {
        const currentDate = new Date(d);
        return currentDate >= startDate && currentDate <= endDate;
      });
    } else if (date instanceof Date) {
      // Disable individual dates in busyDates
      return busyDates.some(d => {
        const currentDate = new Date(d);
        return currentDate.toDateString() === date.toDateString();
      });
    }
  }
  return false;
};

  
  return (
    <div>
      {isDialogOpen && (
        <div className="overlay">
          <div className="dialog">
            <div className="dialog-header">
              <h2>Book for your own dates :</h2>
            </div>
            <div className="div">
              <div className="app">
                <h1 className="text-center">React Calendar</h1>
                <div className="calendar-container">
                  <Calendar onChange={setDate} value={date} selectRange={true} tileDisabled={tileDisabled} />
                </div>
                {Array.isArray(date) ? (
                  <p className="text-center">
                    <span className="bold">Start:</span> {date[0].toDateString()}
                    &nbsp;|&nbsp;
                    <span className="bold">End:</span> {date[1].toDateString()}
                  </p>
                ) : (
                  <p className="text-center">
                    <span className="bold">Selected Date:</span> {date.toDateString()}
                  </p>
                )}
              </div>
            </div>
            <div className="dialog-footer">
              <button onClick={handleSave}>Save</button>
              <button onClick={handleClose}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}