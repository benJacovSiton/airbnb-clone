import './Residences.css'; // Import the CSS file
import { useEffect, useState } from 'react';
import ResCollapsed from './ResCollapsed';
import ResidenceCard from './ResidenceCard'; 
import SearchedInfo from './searchBy/SearchedInfo';
import DatesInfo from './locateDates/DatesInfo';
import { app, getDatabase, ref, onValue, off, push } from '../firebase';
import SortedResidencesToggle from './sortBy/SortedResidencesToggle';

export default function Residences({ handleSetOrderedHouse }) {
  // const [residenceId , setResidenceId] = useState("");
  const [residences, setResidences] = useState([]);
  const [allResidences, setAllResidences] = useState([]);
  const [filterMode, setFilterMode] = useState(false);
  const [sortMode, setSortMode] = useState(false);
  const [allFalse,setAllFalse] = useState(true);
  const housesDatabaseURL = "https://airbenb-448c7-default-rtdb.firebaseio.com/Houses";

  useEffect(() => {

    const getHouses = async () => {
      try {

        const response = await fetch(`${housesDatabaseURL}.json`);

        const data = await response.json();

        const housesData = Object.values(data);

        setAllResidences(housesData);

      } catch (error) {
        console.error('Error getting houses: ', error);
      }
    };

    getHouses();
    setTimeout(() => {
      setAllFalse(false);
    }, 3000); // 2000 milliseconds = 2 seconds
  }, [housesDatabaseURL]); // Add housesDatabaseURL as a dependency


  useEffect(() => {
    // Set up Firebase Realtime Database listener when the component mounts
    const databaseRef = ref(getDatabase(app), `Houses`);

    const handleData = (snapshot) => {
      if (snapshot.val()) {
        setAllResidences(Object.values(snapshot.val()));
      } else {
        setAllResidences([]);
      }
    };

    // Attach the event listener
    onValue(databaseRef, handleData);

    // Detach the event listener when the component unmounts
    return () => {
      off(databaseRef, handleData);
    };
  }, [allFalse]);


  const handleSetIsSortMode = (sortmode) => {
    setSortMode(sortmode);
  }

  const handleSetResidences = (sortedHouses) => {
    setResidences(sortedHouses);
  }

  
  return (
    <>
      <div style={{ margin: '20px' }} className="residences-tool-bar">
        <SearchedInfo allResidences={allResidences} handleSetIsSortMode={handleSetIsSortMode} handleSetResidences={handleSetResidences} />
        <DatesInfo handleSetIsSortMode={handleSetIsSortMode} handleSetResidences={handleSetResidences} />
        <SortedResidencesToggle residences={residences} allResidences={allResidences} handleSetResidences={handleSetResidences} sortMode={sortMode} handleSetIsSortMode={handleSetIsSortMode} />
      </div>
      <div className="residences-container-body">
        {allResidences.length === 0 ? (
          // If there are no houses
          <div className="messageContainer">
            <div className="iconContainer">
              <i className="fas fa-exclamation-triangle"></i>
            </div>
            <p className="noApartmentsMessage">No houses available.</p>
          </div>
        ) : (
          // If there are houses
          <>
            {sortMode ? (
              // If sorting mode is active
              residences.length > 0 ? (
                residences.map((residence, index) => (
                  <ResidenceCard key={index} residence={residence} handleSetOrderedHouse={handleSetOrderedHouse} />
                ))
              ) : (
                // If residences.length is 0 in sortMode
                <div className="messageContainer">
                  <div className="iconContainer">
                    <i className="fas fa-exclamation-triangle"></i>
                  </div>
                  <p className="noApartmentsMessage">No suitable apartments for your request.</p>
                </div>
              )
            ) : (
              // If sorting mode is not active
              allResidences.map((residence, index) => (
                <ResidenceCard key={index} residence={residence} handleSetOrderedHouse={handleSetOrderedHouse} />
              ))
            )}
          </>
        )}
      </div>
      <ResCollapsed />
    </>
  );

}
