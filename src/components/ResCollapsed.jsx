import './FilterCollapsed.css';
import React, { useState, useRef } from 'react';
import { useCollapse } from 'react-collapsed';
import { useNavigate } from 'react-router-dom';
import useFilter from '../hooks/useFilter';


export default function ResCollapsed() {
  const {allHouses , filteredResidences , handleSetFilters , filters ,handleSetSaveHouse , saveHouse } = useFilter();
  const [isActiveFilter, setIsActiveFilter] = useState(false);
  const [filterWith, setFilterWith] = useState([]);
  const [filterdHouses, setFilterHouses] = useState([]);
  const[filterWithStr , setFilterWithStr] = useState();
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  const navigate = useNavigate();

  // Create refs for each input element
  const wifiRef = useRef(null);
  const smokingRef = useRef(null);
  const priceRef = useRef(null);
  const petFriendlyRef = useRef(null);
  const balconyRef = useRef(null);
  const gardenRef = useRef(null);
  const bedroomsRef = useRef(null);
  const bathroomsRef = useRef(null);
  const ratingRef = useRef(null);
  const distanceRef = useRef(null);
  const parkingRef = useRef(null);

  function handleOnClick() {
    setExpanded(!isExpanded);
  }

  function handleFilter() {
    setIsActiveFilter(true);
    const filters = [
        { filterType: 'Wifi', value: wifiRef.current.checked },
        { filterType: 'Smoking', value: smokingRef.current.checked },
        { filterType: 'PetFriendly', value: petFriendlyRef.current.checked },
        { filterType: 'Parking', value: parkingRef.current.checked },
        { filterType: 'Balcony', value: balconyRef.current.checked },
        { filterType: 'Garden', value: gardenRef.current.checked },
        { filterType: 'Bedrooms', value: bedroomsRef.current.value },
        { filterType: 'Bathrooms', value: bathroomsRef.current.value },
        { filterType: 'Rating', value: ratingRef.current.value },
        { filterType: 'Distance', value: distanceRef.current.value },
        { filterType: 'Price', value: priceRef.current.value },
      ];
      let arr = filters.filter(filter => filter.value);
      setFilterWith(arr);
      handleSetFilters(arr);

      if(arr.length > 0){
        let str = "";
        // console.log("filterWith" , arr);
        for(const filter of arr){
          // console.log("filter.filterType : " , filter.filterType);
          str += filter.filterType+'-'+filter.value+'&';
        }
        // console.log("Filters to apply :" , str);
        setFilterWithStr(str);
        navigate(`/residences/filterBy/${str}`);
      }
  }

  const handleRestFilter = () => {
    setIsActiveFilter(false);
    setFilterWith([]);
    handleSetFilters([]);
    setFilterHouses([]);

    wifiRef.current.checked = false;
    smokingRef.current.checked = false;
    petFriendlyRef.current.checked = false;
    parkingRef.current.checked = false;
    balconyRef.current.checked = false;
    gardenRef.current.checked = false;
    bedroomsRef.current.value = "";
    bathroomsRef.current.value = "";
    priceRef.current.value = "";
    ratingRef.current.value = "";
    distanceRef.current.value = "";
  }


  return (
    <div className="filter-collapsed-container">
    <div className={`collapsible ${isExpanded ? 'expanded' : ''}`}>
      <div className="header" {...getToggleProps({ onClick: handleOnClick })}>
        <img className="avatar-filter" src="https://img.icons8.com/pulsar-color/48/horizontal-settings-mixer.png" alt="horizontal-settings-mixer"/>
      </div>
      <div {...getCollapseProps()} className="content">
        <div className="checkbox-v">
          <input type="checkbox" ref={wifiRef} />
        <label>
          Wifi
        </label>
          <input type="checkbox" ref={smokingRef} />
        <label>
          Smoking
        </label>
        </div>
        <div className="checkbox-v">
          <input type="checkbox" ref={petFriendlyRef} />
        <label>
           Pet 
        </label>
          <input type="checkbox" ref={parkingRef} />
        <label>
          Parking
        </label>
        </div>
        <div className="checkbox-v">
            <input type="checkbox" ref={balconyRef} />
          <label>
            Balcony
          </label>
            <input type="checkbox" ref={gardenRef} />
          <label>
            Garden
          </label>
        </div>
        <div>
          <label>
            Bedrooms
          </label>
            <input type="number" ref={bedroomsRef} />
          <label>
            Bathrooms
          </label>
            <input type="number" ref={bathroomsRef} />
        </div>
        <div>
          <label>
            Price
          </label>
            <input type="number" ref={priceRef} />
        </div>
        <div className="checkbox-pair">
          <label>
            Rating
          </label>
            <input type="number" ref={ratingRef} />
          <label>
            Distance
          </label>
            <input type="number" ref={distanceRef} />
        </div>
        <div className="buttons-filter">
          <button type="button" className="apply-button" onClick={handleFilter}>
            Apply Filters
          </button>
          <button type="button" className="reset-button" onClick={handleRestFilter}>
            Clear Filters
          </button>
        </div>
      </div>
    </div>
  </div>
  );
}
