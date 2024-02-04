import '../Residences.css'; // Import the CSS file
import{ useEffect, useState } from 'react';
import ResidenceCard from '../ResidenceCard';
import { useParams } from 'react-router-dom'
export default function LocateDates({handleSetOrderedHouse}) {
    const { checkInDate , checkOutDate } = useParams();
    const[houses ,setHouses] = useState([]);
    const[residences ,setResidences] = useState([]);
    const housesDatabaseURL = "https://airbenb-448c7-default-rtdb.firebaseio.com/Houses";

    useEffect(()=>{
        const getHouses = async () => {
            try {
      
              const response = await fetch(`${housesDatabaseURL}.json`);
      
              const data = await response.json();
      
              const housesData = Object.values(data);
      
              setHouses(housesData);
      
            } catch (error) {
              console.error('Error getting houses: ', error);
            }
          };      
          getHouses();
    },[])


    useEffect(()=>{
        const handleDates = () =>{
            let res = [];
    
            for(const house of houses){
                if(house.BusyDates){
                    console.log(house);
                    console.log(house.BusyDates);
                    const housesDays = Object.values(house.BusyDates);
                    for(const day of housesDays){
                        console.log("day" , day);
                        if(day.checkInDay < checkInDate && day.checkOutDay > checkOutDate){
                            res.push(house);
                        }
                        else if(day.checkOutDay === checkInDate){
                            res.push(house);
                        }
                    }
                }
                else if(!house.BusyDates){
                    res.push(house);
                }
    
            }
            console.log("res",res);
            setResidences(res);
        };
        handleDates();
    },[houses])

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
