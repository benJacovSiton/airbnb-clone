import '../Residences.css'; // Import the CSS file
import React, { useEffect, useState } from 'react';
import ResidenceCard from '../ResidenceCard';


export default function TopCharts({ handleSetOrderedHouse }) {
    const [chartList, setChartList] = useState([]);
    const [isLoading , setIsLoading] = useState(true);
    const chartLength = 10;
    const housesDatabaseURL = "https://airbenb-448c7-default-rtdb.firebaseio.com/Houses";

    useEffect(() => {
        const getChartList = async () => {
            try {
                const response = await fetch(`${housesDatabaseURL}.json`);
                const data = await response.json();
                const housesData = Object.keys(data).map(key => ({ key, ...data[key] }));
                const housesWithOrders = housesData.filter((houseWithOrders)=>{
                    return houseWithOrders.BusyDates;
                })
                console.log("housesWithOrders" , housesWithOrders);
                housesWithOrders.sort((s1, s2) => s2.BusyDates - s1.BusyDates);
                // console.table(housesWithOrders);
                setChartList(housesWithOrders);
            } catch (error) {
                console.error("Error fetching hot deals:", error);
            }
        };

        getChartList();
        setTimeout(() => {
            setIsLoading(false);
        }, 2000); // 2000 milliseconds = 2 seconds
    }, []);

    return (
        <>
        <div>
            <h3>Top Charts 🏆 </h3>
            <p>
                Welcome to Hot Deals section, where extraordinary stays meet unbeatable prices!
                Discover your perfect home away from home with our curated selection of Airbnb apartments,
                meticulously chosen to ensure an unforgettable experience without breaking the savings.
            </p>
        </div>
        <div className="residences-container-body">
            {chartList.length > 0 ? (
                chartList.slice(0, chartLength).map((residence, index) => (
                    <ResidenceCard key={index} residence={residence} handleSetOrderedHouse={handleSetOrderedHouse} />
                ))
            ) : (
                <p>No charts available at the moment.</p>
            )}
        </div>
        </>
    );
}

