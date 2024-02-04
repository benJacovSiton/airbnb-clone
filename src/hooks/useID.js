// '../hooks/useID'

import React, { useState } from 'react';

export default function useID() {
    const [id, setId] = useState("-420");
    const [filteredHouses, setFilteredHouses] = useState([]);
    let h = [];
    const handleHouses = (houses) => {
        console.log("handleHouses....");
        //setFilteredHouses(houses);
        //h = houses;
        for (const house of houses){
            console.log(house);
            h.push(house);
        }
        setFilteredHouses(h);
        console.log("filteredHouses : ",filteredHouses);
        console.log("h : ",h);
        console.log("houses : ",houses);

    }
    

    const handleSetId = (ID) => {
        console.log("handleId....");
        setId(ID);
        console.log(id);
    }

    return { id, handleSetId, filteredHouses, handleHouses , h };
}
