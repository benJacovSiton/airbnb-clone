import '../Residences.css'; // Import the CSS file
import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import ResidenceCard from '../ResidenceCard';
import ResCollapsed from '../ResCollapsed';
export default function FilterBy({handleSetOrderedHouse}) {

    const { filterThrow } = useParams();
    const[houses ,setHouses] = useState([]);
    const[filters ,setFilters] = useState([]);
    const[filterdResidences , setfilterdResidences] = useState([]);
    const[filterWith , setFilterWith] = useState([]);
    const [isFinishLoading , setIsFinishLoading] = useState();
    const [filtersForDisplay , setFiltersForDisplay] = useState("");
    const housesDatabaseURL = "https://airbenb-448c7-default-rtdb.firebaseio.com/Houses";

    //יוז אפקט שיוציא מהדאטה בייס את כל הבתים
    useEffect(()=>{
      const getHouses = async () => {
        try{
          const response = await fetch(`${housesDatabaseURL}.json`);
          const data = await response.json();
          setHouses(Object.values(data));
        }catch(error){
          console.error("cant load houses for filter" , console.error);
        }finally{
          setIsFinishLoading(true);
        }
      }
      getHouses();
      getFiltersForDisplay();
    },[])

    // יוז אפקט שני מופעל כאשר נטענו הבתים
    // היוז אפקט הזה יפלטר על פי הפרמטרים המתקבלים ביוז פארמס
    // יצבור את הבתים העונים על הדרישות למערך
    useEffect(()=>{
      const filterHouses = () => {
        let filterItems = [];
        let filterItem = "";
        let filterType = "";
        let filterValue = "";
        let numberValue = -10;
        let isValue = false;
        let isNumberValue = false;
        // console.log("filterThrow" , filterThrow);
        for(let i = 0; i < filterThrow.length ; i++){
          filterItem += filterThrow[i];
          if(filterThrow[i] === '&' && isValue){
            // console.log("filterType" , filterType);
            // console.log("filterValue" , filterValue);
            // PASRSE TO NUMBER
            if(filterValue[0] >= '1' && filterValue[0] <='9'){
              numberValue = parseInt(filterValue);
              isNumberValue = true;
              // console.log("numberValue" , numberValue);
            }
            if(isNumberValue){
              filterItems.push({filterType : filterType , filterValue : numberValue});
              isNumberValue = false;
            }
            else{
              filterItems.push({filterType : filterType , filterValue : filterValue});
            }
            filterType = "";
            filterValue = "";
            filterItem = "";
            isValue = false;    
          }else if(filterThrow[i] === '-'){
            let temp = '';
            for(let x = 0; x < filterItem.length -1; x++){
              temp += filterItem[x];
            }
            filterItem = temp;
            filterType = filterItem;
            filterItem = "";
            isValue = true;
          }else if(isValue){
            filterValue = filterItem;
          }
        }
        // console.log("filterItems" , filterItems);
        setFilters(filterItems);
      }
      filterHouses();

    },[])

    useEffect(()=>{
      const setFilters = () => {
        let dataArray = [];
        let finalFilterArray = [];
        // console.log("houses" , houses);
        let filterArray = houses.slice();
        // console.log("filterArray start : " , filterArray);
        for(const filter of filters){
          // console.log("filter" , filter);
            for(const house of houses){
              // console.log("house",house);
              if (filter.filterType === 'Smoking' && house.canSmoke) {
                console.log('Filtering by Smoking:', house);
                dataArray.push(house);
                setFilterWith([...filterWith , "Smoking"]);
              } else if (filter.filterType === 'Wifi' && house.wifi) {
                console.log('Filtering by Wifi:', house);
                dataArray.push(house);
                setFilterWith([...filterWith , "Wifi"]);
              } else if (filter.filterType === 'PetFriendly' && house.petFriendly) {
                console.log('Filtering by Pet Friendly:', house);
                dataArray.push(house);
                setFilterWith([...filterWith , "PetFriendly"]);
              } else if (filter.filterType === 'Parking' && house.parking) {
                console.log('Filtering by Parking:', house);
                dataArray.push(house);
                setFilterWith([...filterWith , "Parking"]);
              } else if (filter.filterType === 'Balcony' && house.hasBalcony) {
                console.log('Filtering by Balcony:', house);
                dataArray.push(house);
                setFilterWith([...filterWith , "Balcony"]);
              } else if (filter.filterType === 'Garden' && house.hasGarden) {
                console.log('Filtering by Garden:', house);
                dataArray.push(house);
                setFilterWith([...filterWith , "Garden"]);
              }else if (filter.filterType === 'Bedrooms' && house.bedrooms == filter.filterValue ) {
                // console.log('Filtering by Bedrooms:', house);
                dataArray.push(house);
                setFilterWith([...filterWith , 'Bedrooms']);
              } else if (filter.filterType === 'Bathrooms' && house.bathrooms == filter.filterValue) {
                console.log('Filtering by Bathrooms:', house);
                dataArray.push(house);
                setFilterWith([...filterWith , "Bathrooms"]);
              } else if (filter.filterType === 'Rating' && house.rating == filter.filterValue) {
                console.log('Filtering by Rating:', house);
                dataArray.push(house);
                setFilterWith([...filterWith , "Rating"]);
              } else if (filter.filterType === 'Distance' && house.distance <= filter.filterValue) {
                console.log('Filtering by Distance:', house);
                dataArray.push(house);
                setFilterWith([...filterWith , "Distance"]);
              } else if (filter.filterType === "Price" && house.pricePerNight <= filter.filterValue) {
                console.log('Filtering by Price:', house);
                dataArray.push(house);
                setFilterWith([...filterWith , "Price"]);
              }
            }
            if(dataArray.length > 0){
              filterArray = dataArray.slice();
            }
            dataArray = [];
        }
        if(filterArray.length === houses.length){
          setfilterdResidences([]);
          // console.log("filterArray end empty : " , filterArray);
        }
        else{
          for(const house of filterArray){
            let isOk = true;
            for(const filter of filters){
              if(filter.filterType === 'Smoking' && !house.canSmoke 
                  || filter.filterType === 'Wifi' && !house.wifi 
                  || filter.filterType === 'PetFriendly' && !house.petFriendly 
                  || filter.filterType === 'Parking' && !house.parking
                  || filter.filterType === 'Balcony' && !house.hasBalcony
                  || filter.filterType === 'Garden' && !house.hasGarden
                  ){
                    isOk = false;
              }
            }
            if(isOk){
              finalFilterArray.push(house);
            }
          }
          setfilterdResidences();
          // console.log("filterArray end filterd : " , finalFilterArray);
        }
        
        // console.log("Filters to apply:", filters);
  
        setfilterdResidences(finalFilterArray);
      }
      setFilters();
    },[filters , houses , isFinishLoading])

    const getFiltersForDisplay = () => {
      console.log(filterThrow);
      let isStr = false ;
      let filterForDisplay = filterThrow[0];
      for(let i = 1; i < filterThrow.length -1 ; i++){
        if(filterThrow[i] === '&'){
          isStr = true;
          filterForDisplay += " | ";
          i++;
        }
        if(filterThrow[i] === '-' && filterThrow[ i + 1 ] === 't'){
          i += 6;
          filterForDisplay += " | ";
        }
        else if(filterThrow[i] === '-'){
          filterForDisplay += ' : ';
          i++;
        }
        filterForDisplay += filterThrow[i];
        
      }
      filterForDisplay += ' | ';
      setFiltersForDisplay(filterForDisplay);
    }


    // ומשם יפרוק את המערך אל תוך הקראד 
    return (
    <>
      {filtersForDisplay != "" ? <h4># filter by | {filtersForDisplay}</h4> : <pre>no filters...</pre> }
      <div className="residences-container-body">
        {filterdResidences.length > 0 ? (
          filterdResidences.map((residence, index) => (
            <ResidenceCard key={index} residence={residence} handleSetOrderedHouse={handleSetOrderedHouse} />
          ))
          ) : (
            // If residences.length is 0 in filterMode
            <div className="messageContainer">
            <div className="iconContainer">
              <i className="fas fa-exclamation-triangle"></i>
            </div>
            <p className="noApartmentsMessage">No suitable apartments for your request.</p>
          </div>
        )}
        <ResCollapsed/>
      </div>
    </>
    );
  }
  
