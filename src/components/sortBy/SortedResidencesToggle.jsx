import React, { useState } from 'react';
import swapLogo from "../../swap.png";
import './SortedResidencesToggle.css';
import SortedResidences from './SortedResidences';

export default function SortedResidencesToggle({residences ,allResidences, handleSetResidences , sortMode ,handleSetIsSortMode}) {
  const [openToggle, setOpenToggle] = useState(false);
  const [isActiveSort, setIsActiveSort] = useState(false);
  const [sortedBy , setSortedBy] = useState("");
  const handleSort = (sortBy) => {
    setSortedBy(sortBy);
    setIsActiveSort(true);
  };

  return (
    <>
      <div className="sorted-residences-toggle-container">
          <div onClick={()=>setOpenToggle(!openToggle)} className="sorted-residences-toggle-toggle">
          <img className="sorted-residences-toggle-icon" src={swapLogo} alt="swap Logo" />
          {openToggle ? 
          <div className="sorted-residences-toggle-item-list">
              <div className="sorted-residences-toggle-item">
                  <label>sort by price :</label>
                  <button onClick={() => handleSort("From expensive to cheap")}>⤵️</button>
                  <button onClick={() => handleSort("From cheap to expensive")}>⤴️</button>
              </div>
              <div className="sorted-residences-toggle-item">
                  <label>sort by name :</label>
                  <button onClick={() => handleSort("From A to Z")}>⤵️</button>
                  <button onClick={() => handleSort("From Z to A")}>⤴️</button>
              </div>
              <div className="sorted-residences-toggle-item">
                  <label>sort by rating :</label>
                  <button onClick={() => handleSort("From Bellagio to guestHouse")}>⤵️</button>
                  <button onClick={() => handleSort("From guestHouse to Bellagio")}>⤴️</button>
              </div>
              <div className="sorted-residences-toggle-item">
                  <label>sort by defualt :</label>
                  <button onClick={() => handleSort("")}>↩️</button>
              </div>
          </div> :
          null
          }
          </div>
          {isActiveSort ? <SortedResidences residences={residences} allResidences={allResidences} handleSetResidences={handleSetResidences} sortMode={sortMode} handleSetIsSortMode = {handleSetIsSortMode} sortedBy={sortedBy}/> : null}
      </div>
      <>
          {/* Move the sorting information block here */}
          {isActiveSort && sortedBy !== "" && (
            <>
              sorted by : {sortedBy}
            </>
          )}
        </>
    </>
  );
}
