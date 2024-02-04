import '../Residences.css';
import React, { useState } from 'react';
import search2Logo from '../../assets/search2.png'
import { useNavigate } from 'react-router-dom';

export default function SearchedInfo({ allResidences , handleSetIsSortMode , handleSetResidences}) {
  const [searchValue, setSearchValue] = useState("");
  const[residences ,setResidences] = useState([]);
  const [isOpen , setIsOpen] = useState(false);

  const navigate = useNavigate();

  const onSearch = () => {
    console.log(allResidences);
    const housesData = Object.keys(allResidences).map(key => ({ key, ...allResidences[key] }));
    const resArray = housesData.filter((house) => {
      // Convert both the search value and the property value to lowercase for case-insensitive comparison
      const lowerCaseSearchValue = searchValue.toLowerCase();
      const lowerCaseOwnerName = house.ownerName.toLowerCase();
      const lowerCaseHouseName = house.name.toLowerCase();
  
      // Check if either owner name or house name contains the search value
      return lowerCaseOwnerName.includes(lowerCaseSearchValue) || lowerCaseHouseName.includes(lowerCaseSearchValue);
    });
    console.log("resArray", resArray);
    setResidences(resArray);
    handleSetResidences(resArray);
    handleSetIsSortMode(true);
    navigate(`/residences/searchBy/${searchValue}`);
  };
  
  

  const onClear = () => {
    setResidences(allResidences);
    setSearchValue('');
  };

  return (
    <div>
      <img onClick={() => setIsOpen(!isOpen)} className="sorted-residences-toggle-icon" src={search2Logo} alt="Toggle Search" />
      {isOpen && (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <input style={{ width: '270px' }} type="text" placeholder="Search your next address or owner" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
          <button style={{ marginLeft: '5px', width: '60px', height: '30px' }} type="button" onClick={onSearch}>
            🕵
          </button>
          <button style={{ marginLeft: '5px', width: '60px', height: '30px' }} type="button" onClick={onClear}>
            🚷
          </button>
        </div>
      )}
    </div>
  );  
}
