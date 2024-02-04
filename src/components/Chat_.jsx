import React, { useEffect, useState } from 'react';
import './houseChat.css'; // Import the CSS file
import { useLogin } from '../hooks/useLogin';
import { useParams } from 'react-router-dom';
import { app, getDatabase, ref, onValue, off, push } from '../firebase';

export default function Chat_() {
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [chatHouseName , setChatHouseName] = useState("")
  const [sender , setSender] = useState("");
  const { user } = useLogin();
  const { revisionId } = useParams();
  const revisionDatabaseURL = `https://airbenb-448c7-default-rtdb.firebaseio.com/Revision/`;
  const messagesDatabaseURL = `https://airbenb-448c7-default-rtdb.firebaseio.com/Revision/${revisionId}/Messages`;
 
  useEffect(() => {
    // Delete duplicates when the component mounts
    const deleteDup = async () => {
      try {
        const response = await fetch(`${revisionDatabaseURL}.json`);

        if (!response.ok) throw new Error('Failed to read revision from the database');

        const data = await response.json();
        const revisionData = Object.values(data);

        // Find the revision associated with the current revisionId
        const finedRevision = revisionData.filter((revision) => {
          return revision.revisionId === revisionId;
        });

        // console.log("finedRevision : ", finedRevision);
        setChatHouseName(finedRevision.name);

        // Find revisions with the same houseId and no Messages property
        const finedRevisionToDelete = revisionData.filter((revision) => {
          return revision.houseId === finedRevision[0]?.houseId && !revision.Messages;
        });

        // console.log("finedRevisionToDelete : ", finedRevisionToDelete);

        // Delete the found revision
        
        if (finedRevisionToDelete.length === 2) {
          const deleteItem = finedRevisionToDelete[0];
          // console.log("deleteItem : ", deleteItem);
          await fetch(`${revisionDatabaseURL}/${deleteItem.revisionId}.json`, {
            method: 'DELETE',
          });
          // console.log("Item deleted successfully!");
        } else {
          // console.log("Item not found for deletion.");
        }
      } catch (error) {
        console.error(error);
      }
    };
    deleteDup();
  }, [revisionId]);

  useEffect(() => {
    // Set up Firebase Realtime Database listener when the component mounts
    const databaseRef = ref(getDatabase(app), `Revision/${revisionId}/Messages`);

    const handleData = (snapshot) => {
      if (snapshot.val()) {
        setMessageList(Object.values(snapshot.val()));
      } else {
        setMessageList([]);
      }
    };

    // Attach the event listener
    onValue(databaseRef, handleData);

    // Detach the event listener when the component unmounts
    return () => {
      off(databaseRef, handleData);
    };
  }, [revisionId]);

  const getCurrentDateTime = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-indexed
    const day = currentDate.getDate().toString().padStart(2, '0');
    const hours = currentDate.getHours().toString().padStart(2, '0');
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');

    // Format: YYYY-MM-DD HH:mm:ss
    const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}`;

    return formattedDateTime;
  };

  // Send a message to the Firebase Realtime Database
  const sendMessage = async () => {
    const messageData = { message: message, time: getCurrentDateTime(), senderName: user.displayName , senderImg : user.photoURL  };

    try {
      const response = await fetch(`${messagesDatabaseURL}.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(messageData),
      });

      const data = await response.json();
      setSender({senderName : user.displayName , senderImg : user.photoURL});
      // Update the messageId property in the created message node
      await fetch(`${messagesDatabaseURL}/${data.name}.json`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messageId: data.name }),
      });
    } catch (error) {
      console.error(error);
    }
    
    // Clear the input field
    setMessage("");
  };

  return (
    <div className="chat-container">
      <h1 className="chat-title">houseName : {chatHouseName}</h1>
      {messageList.map((message, index) => (
        <div
          key={index}
          className={`${
            message.senderName === user.displayName ? "chat-message-box-owner" : "chat-message-box-guest"
          }`}
        >
          <p className="chat-message-text">{message.message}</p>
          <div className="chat-message-info-container">
            <p className="chat-message-info">{`${message.senderName} - ${message.time}`}</p>
            <img className="chat-avatar" src={message.senderImg}></img>
          </div>
        </div>
      ))}
      <div className="control-chat">
        <input
          className="chat-textbox"
          type="text"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <button className="send-message-btn" onClick={sendMessage}>Send!</button>
      </div>
    </div>
  );
}
