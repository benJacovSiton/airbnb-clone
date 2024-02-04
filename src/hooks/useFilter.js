import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useFilter() {
    const [isFilterd , setIsFilterd] = useState(false);
    const [allHouses, setAllHouses] = useState([]);
    const [filters , setFilters] = useState([]);
    const [filteredResidences, setFilteredResidences] = useState([]);
    const [saveHouse , setSaveHouse] = useState({});
    let houseSlected = {};
    const navigate = useNavigate();
    const housesDatabaseURL = "https://airbenb-448c7-default-rtdb.firebaseio.com/Houses";


    useEffect(()=>{
        const getHouses = async () => {
            const response = await fetch(`${housesDatabaseURL}.json`);
            const data = await response.json();
            const dataArray = Object.values(data);
            setAllHouses(dataArray);
          };

          getHouses();

    //       if(isFilterd){
    //         let dataArray = [];
    //         let filterArray = allHouses.slice();
    //         console.log("filterArray start : " , filterArray);
    //         for(const filter of filters){
    //             for(const house of filterArray){
    //                 if(filter === 'filterBySmoking' && house.canSmoke){
    //                     path += 'somke&';
    //                     dataArray.push(house);
    //                 }
    //                 else if (filter === 'filterByWifi' && house.wifi){
    //                     path += 'wifi&';
    //                     dataArray.push(house);
    //                 }
    //             }
    //             if(dataArray.length > 0){
    //             filterArray = dataArray.slice();
    //             }
    //             dataArray = [];
    //         }
    //         if(filterArray.length === allHouses.length){
    //             setFilteredResidences([]);
    //             console.log("filterArray end empty : " , filterArray);
    //         }
    //         else{
    //             setFilteredResidences(filterArray);
    //             console.log("filterArray end filterd : " , filterArray);
    //         }
    //         setIsFilterd(false);
    // }
    },[filters])

    const handleSetFilters = (customFilters) => {
        let dataArray = [];
        for(const filter of customFilters){
            dataArray.push(filter);
        }
        console.log(dataArray);
        setFilters(dataArray);
        setIsFilterd(true);
        // console.log("filters" , filters);
    }

    const handleSetSaveHouse = (house) => {
        console.log(house);
        houseSlected = house;
        setSaveHouse(house);
    }

    return {allHouses , filteredResidences , handleSetFilters , filters ,handleSetSaveHouse , saveHouse , houseSlected };
}
