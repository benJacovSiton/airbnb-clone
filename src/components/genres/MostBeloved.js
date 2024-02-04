import '../Residences.css'; // Import the CSS file
import React, { useEffect, useState } from 'react';
import ResidenceCard from '../ResidenceCard';

export default function MostBeloved({handleSetOrderedHouse}) {
    const [mostBelovedList, setMostBelovedList] = useState([]);
    const mostBelovedLength = 10;
    const housesDatabaseURL = "https://airbenb-448c7-default-rtdb.firebaseio.com/Houses";

    useEffect(() => {
        getMostBelovedList();
    }, []);

    const getMostBelovedList = async () => {
        try {
            const response = await fetch(`${housesDatabaseURL}.json`);
            const data = await response.json();
            const housesData = Object.values(data);
            let likes = [];
            for(const item of housesData){
                console.log(item.Reviews.UsersLikes);
                likes.push({key : item.name , value: Object.values(item.Reviews.UsersLikes)});
            }
            console.log("likes",likes);
            likes.sort((s1, s2) => s2.value.length - s1.value.length);
            let mostsBeloved = [];
            for(const item of likes){
                for(const item2 of housesData){
                   if(item2.name === item.key){
                       mostsBeloved.push(item2);
                    }
                }
            }
            console.log("mostsBeloved" , mostsBeloved);
            setMostBelovedList(mostsBeloved);
        } catch (error) {
            console.error("Error fetching hot deals:", error);
        }
    };
    return (
        <>
        <div >
            <h3>Most Beloved 🌟 </h3>
            <p>
                Embark on a journey of warmth and connection with our Most Beloved Houses collection. 
                These are not just accommodations; they are homes that have captured the hearts of our guests.
                Each residence in this cherished selection is celebrated for its unique charm, 
                genuine hospitality, and the unforgettable moments it creates. 
                Experience the magic of staying in a place where you're not just a guest but a cherished part of the story.
            </p>
        </div>
        <div className="residences-container-body">
            {mostBelovedList.length > 0 ? (
                mostBelovedList.slice(0, mostBelovedLength).map((residence, index) => (
                    <ResidenceCard key={index} residence={residence} handleSetOrderedHouse={handleSetOrderedHouse} />
                ))
            ) : (
                <p>No most beloved available at the moment.</p>
            )}
        </div>
        </>
    );
}
