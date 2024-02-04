import '../Residences.css'; // Import the CSS file
import React, { useEffect, useState } from 'react';
import ResidenceCard from '../ResidenceCard';

export default function HotDeals({ handleSetOrderedHouse }) {
  const [AllDeals , setAllDeals] = useState([]);
  const [hotDealList, setHotDealList] = useState([]);
  const minDiscount = 7;

  const housesDatabaseURL = "https://airbenb-448c7-default-rtdb.firebaseio.com/Houses";
  const [isLoading , setIsLoading] = useState(true);
  useEffect(() => {
    const getHotDealList = async () => {
      try {
        const response = await fetch(`${housesDatabaseURL}.json`);
        const data = await response.json();
        const housesData = Object.keys(data).map(key => ({ key, ...data[key] }));
        setAllDeals(housesData);
        const hotDeals = Object.values(data).filter((hotDeal) => {
          console.log("hotDeal  ? " , hotDeal.discountPercentages);
          return hotDeal.discountPercentages >= minDiscount;
        });
        console.log("hotDeals" , hotDeals);
        setHotDealList(hotDeals);
      } catch (error) {
        console.error("Error fetching hot deals:", error);
      }
    };

    getHotDealList();
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2000 milliseconds = 2 seconds
  }, []);

  return (
    <>
      <div>
        <h3>Hot Deals 🔥 </h3>
        <p>
          Welcome to Hot Deals section, where extraordinary stays meet unbeatable prices!
          Discover your perfect home away from home with our curated selection of Airbnb apartments,
          meticulously chosen to ensure an unforgettable experience without breaking the savings.
        </p>
      </div>
      <div className="residences-container-body">
        {hotDealList.length > 0 ? (
          hotDealList.map((residence, index) => (
            <ResidenceCard key={index} residence={residence} handleSetOrderedHouse={handleSetOrderedHouse} />
          ))
        ) : (
          <p>No hot deals available at the moment.</p>
        )}
      </div>
    </>
  );
}