import React, { useEffect } from 'react'
import { useState } from 'react';
export default function UpdateHistory({match}) {
  const [historyRevisions, setHistoryRevisions] = useState([]);
  const [allHistoryRevisions, setAllHistoryRevisions] = useState([]);
  const [reservationHistoryId , setReservationHistoryId] = useState("");
  const revisionDatabaseURL = 'https://airbenb-448c7-default-rtdb.firebaseio.com/Revision/';
  const historyRevisionDatabaseURL = 'https://airbenb-448c7-default-rtdb.firebaseio.com/HistoryOfRevisions/';
  const userRevisionDatabaseURL = "https://airbenb-448c7-default-rtdb.firebaseio.com/UsersRevisions";

  useEffect(()=>{
    const getReservationHistoryList = async () => {
        const response = await fetch(`${historyRevisionDatabaseURL}.json`);
        const data = await response.json();
        const historyData = Object.keys(data).map(key => ({ key, ...data[key] }));
        setAllHistoryRevisions(historyData);
    }
    getReservationHistoryList();
  },[]);

    
    useEffect(()=>{
      let j = 1;
      let historyDataArray = [];
      for(let i = 0 ; j < historyRevisions.length; i++ ){
        if(historyRevisions[i].revisionId === historyRevisions[j].revisionId
          && historyRevisions[i].userRevisionId === historyRevisions[j].userRevisionId){
            historyDataArray.push(historyRevisions[i]);
          }
        j++;
      }
      setHistoryRevisions(historyDataArray);
      console.log("historyDataArray : " , historyDataArray);
    },[allHistoryRevisions]);

    
  
    useEffect(()=>{
      const updateReservationHistoryList = async () => {
        try {
          await fetch(`${historyRevisionDatabaseURL}.json`, {
            method: 'DELETE',
          });
          console.log('DELETE reservation history');
        } catch (error) {
          console.error('Error delete reservation in history', error);
        }
      };
      const setInReservationHistory = async () => {
        try {
          const response = await fetch(`${historyRevisionDatabaseURL}.json`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({...match , stilActive : false ,  historyId: "-420" }),
          });
          const data = await response.json();
          console.log("POST" , data.name);
          await fetch(`${historyRevisionDatabaseURL}/${data.name}.json`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({historyId: data.name }),
          });
          console.log("what PATCH : ", match);
        } catch (error) {
          console.error('Error post & patch reservation in history', error);
        }
      };
      setInReservationHistory();
      updateReservationHistoryList();
    },[historyRevisions]);



  return (
    <></>
  )
}
