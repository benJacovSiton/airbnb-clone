import '../Residences.css'; // Import the CSS file
import{ useEffect, useState } from 'react'
import ResidenceCard from '../ResidenceCard';
import { useParams } from 'react-router-dom'

export default function SearchBy({handleSetOrderedHouse}) {
    const { searchValue } = useParams();
    const[allResidences ,setAllResidences] = useState([]);
    const[residences ,setResidences] = useState([]);

    const housesDatabaseURL = "https://airbenb-448c7-default-rtdb.firebaseio.com/Houses";


    useEffect(()=>{
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
    },[])

    useEffect(()=>{
        const onSearch = () => {
            console.log(allResidences);
            const resArray = allResidences.filter((Residence) => {
              // Convert both the search value and the property value to lowercase for case-insensitive comparison
              const lowerCaseSearchValue = searchValue.toLowerCase();
              const lowerCaseOwnerName = Residence.ownerName.toLowerCase();
              const lowerCaseHouseName = Residence.name.toLowerCase();
          
              // Check if either owner name or house name contains the search value
              return lowerCaseOwnerName.includes(lowerCaseSearchValue) || lowerCaseHouseName.includes(lowerCaseSearchValue);
            });
            console.log("resArray", resArray);
            setResidences(resArray);
          };
          onSearch();
    },[allResidences])

    return (
        <div>
          {residences.length > 0 && (
            <div className="residences-container-body">
              {residences.map((residence, index) => (
                <div key={index}>
                  <ResidenceCard residence={residence} handleSetOrderedHouse={handleSetOrderedHouse} />
                </div>
              ))}
            </div>
          )}
        </div>
      );
}
