import React, { useState, useEffect } from 'react';

export default function SortedResidences({residences, allResidences, handleSetResidences, sortMode ,handleSetIsSortMode , sortedBy }) {
  const [sortedResidencesList, setSortedResidencesList] = useState([]);
  
  useEffect(() => {
    if(sortMode)
      sortFilter();
    else
      sortAll();
  }, [allResidences, , residences, sortedBy]);

  const sortAll = () => {
    let sortedList =  Object.values(allResidences);
    let isSort = true;
    switch (sortedBy) {
      case "From cheap to expensive":
        sortedList.sort((s1, s2) => s1.pricePerNight - s2.pricePerNight);
        break;

      case "From expensive to cheap":
        sortedList.sort((s1, s2) => s2.pricePerNight - s1.pricePerNight);
        break;

      case "From guestHouse to Bellagio":
        sortedList.sort((s1, s2) => s1.rating - s2.rating);
        break;
    
      case "From Bellagio to guestHouse":
        sortedList.sort((s1, s2) => s2.rating - s1.rating);
        break;

      case "From A to Z":
        sortedList.sort((s1, s2) => s1.name.localeCompare(s2.name));
        break;
    
      case "From Z to A":
        sortedList.sort((s1, s2) => s2.name.localeCompare(s1.name));
        break;

      default:
        isSort = false;
        // console.log("by date of adding default sort ");
        break;
    }

    setSortedResidencesList(sortedList); // Set the sorted list to state
    handleSetResidences(sortedList); // Optionally update the parent component's state
    isSort ? handleSetIsSortMode(true) : handleSetIsSortMode(false);
  };

  const sortFilter = () => {
    let sortedList =  Object.values(residences);
    let isSort = true;
    switch (sortedBy) {
      case "From cheap to expensive":
        sortedList.sort((s1, s2) => s1.pricePerNight - s2.pricePerNight);
        break;

      case "From expensive to cheap":
        sortedList.sort((s1, s2) => s2.pricePerNight - s1.pricePerNight);
        break;

      case "From guestHouse to Bellagio":
        sortedList.sort((s1, s2) => s1.rating - s2.rating);
        break;
    
      case "From Bellagio to guestHouse":
        sortedList.sort((s1, s2) => s2.rating - s1.rating);
        break;

      case "From A to Z":
        sortedList.sort((s1, s2) => s1.name.localeCompare(s2.name));
        break;
    
      case "From Z to A":
        sortedList.sort((s1, s2) => s2.name.localeCompare(s1.name));
        break;

      default:
        isSort = false;
        console.log("by date of adding default sort ");
        break;
    }

    setSortedResidencesList(sortedList); // Set the sorted list to state
    handleSetResidences(sortedList); // Optionally update the parent component's state
    isSort ? handleSetIsSortMode(true) : handleSetIsSortMode(false);
  };

  // return(
  //   <div>
  //     <h4>sortedBy : {sortedBy}</h4>
  //   </div>
  // )

}
