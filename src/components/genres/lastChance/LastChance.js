import React, { useEffect, useState } from 'react'
import LastChanceCard_ from './LastChanceCard_';

export default function LastChance({handleSetOrderedHouse}) {
    const [offers , setOffers] = useState([]);
    const[housesOnOffer , setHousesOnOffer] = useState([]);
    const [dates , setDates] = useState([]);
    const housesDatabaseURL = "https://airbenb-448c7-default-rtdb.firebaseio.com/Houses";
    const lastChanceLength = 10;

    useEffect(()=>{
        const getHouses = async () => {
            const response = await fetch(`${housesDatabaseURL}.json`)
            const data = await response.json();
            const housesData = Object.keys(data).map(key => ({ key, ...data[key] }));
            let randomIndexArray = [];
            for(let i = 0; i < lastChanceLength; i++){
                randomIndexArray.push(420);
            }
            for(let i = 0; i < lastChanceLength;){
                let isFound = false;
                const randomIndex = Math.floor(Math.random() * housesData.length);
                for(let j = 0; j < randomIndexArray ; j++){
                    if(randomIndexArray[j] === randomIndex){
                        isFound = true;
                        break;
                    }
                }
                if(!isFound){
                    randomIndexArray[i] = randomIndex;
                    i++;
                }
            }
            let housesOnOfferArray = [];
            for(let i = 0; i < lastChanceLength; i++){
                const num = randomIndexArray[i];
                const value = housesData[num];
                // console.log("value" , value);
                housesOnOfferArray.push(value);
            }
            // console.log(housesOnOfferArray);
            setHousesOnOffer(housesOnOfferArray);
            
        };
        getHouses();

   
    },[]);

    useEffect(() => {
        const currentDate = new Date();
      
        // Create an array to store dates for the next two weeks
        const lineupDates = [];
      
        // Loop to add dates for the next 14 days
        for (let i = 0; i < 14; i++) {
          const date = new Date(currentDate);
          date.setDate(currentDate.getDate() + i);
          lineupDates.push(new Date(date));
        }
      
        setDates(lineupDates);
        console.log("lineupDates",lineupDates);
        let offerArray = [];
        const discountLastChanceOptions = [15, 16, 17, 18, 19, 20];
      
        if (housesOnOffer.length > 0) {
          for (const houseOnOffer of housesOnOffer) {
            let randomCheckIn, randomCheckOut;
      
            // Ensure randomCheckOut is greater than randomCheckIn
            do {
              randomCheckIn = Math.floor(Math.random() * lineupDates.length);
              randomCheckOut = Math.floor(Math.random() * lineupDates.length);
            } while (randomCheckIn >= randomCheckOut);
      
            let randomDiscount =
              discountLastChanceOptions[
                Math.floor(Math.random() * discountLastChanceOptions.length)
              ];
      
            let newPricePerNight = parseInt(
              houseOnOffer.pervPricePerNight -
                (houseOnOffer.pervPricePerNight * (randomDiscount / 100))
            );
            let checkIn = lineupDates[randomCheckIn].getDate();
            let checkOut = lineupDates[randomCheckOut].getDate();
            let time = checkOut - checkIn;
            console.log("time" , time);
            let totalPrice = newPricePerNight * time;
      
            let offer = {
              ...houseOnOffer,
              BusyDates: {
                checkInDay: lineupDates[randomCheckIn].toDateString(),
                checkOutDay: lineupDates[randomCheckOut].toDateString(),
              },
              dates : {
                checkInDay: lineupDates[randomCheckIn].toDateString() ,
                checkOutDay: lineupDates[randomCheckOut].toDateString(),
              },
              reservedHouseNights : time ,
              discountPercentages: randomDiscount,
              buyBylastChance: true,
              pricePerNight: newPricePerNight,
              totalPrice: totalPrice,
            };
      
            offerArray.push(offer);
          }
          setOffers(offerArray);
        }
      }, [housesOnOffer]);

    return (
        <>
        <div>
        <h3>Last Chance 🕒</h3>
        <p>
          Time is ticking, and so are our exclusive Last Chance Deals!
          Don't miss out on the opportunity to snag unbeatable offers for your next getaway.
          Whether you're a spontaneous adventurer or a savvy traveler looking for the best value,
          our Last Chance Deals section is your gateway to incredible savings.
        </p>
        </div>
        <div>
          {offers.length > 0 ? (
            offers.map((offer, index) => (
              <LastChanceCard_ key={index} offer={offer} handleSetOrderedHouse = {handleSetOrderedHouse} />
            ))
          ) : (
            <p>No chance here at this moment.</p>
          )}
        </div>
      </>
  )
}
