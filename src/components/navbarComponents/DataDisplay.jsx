import './DataDisplay.css'
import airbnbLogo from "../../airbnb.png";
import React, { useEffect, useState } from 'react'

export default function DataDisplay() {
    const [display , setDisplay] = useState("");
    const [residencesData , setResidencesData] = useState([]);
    const [revisionsData , setRevisionsData] = useState([]);
    const [displayDataList , setDisplayDataList] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const housesDatabaseURL = "https://airbenb-448c7-default-rtdb.firebaseio.com/Houses";
    const RevisionDatabaseURL = "https://airbenb-448c7-default-rtdb.firebaseio.com/Revision";


    useEffect(()=>{
        const getResidencesData = async () =>{
            try{
                const response = await fetch(`${housesDatabaseURL}.json`)
                const data = await response.json();
                const residencesData = Object.keys(data).map(key => ({ key, ...data[key] }));
                setResidencesData(residencesData);
            }catch(error){
                console.error('cant get residences data from the server' , error);
            }
        };
        // console.log(residencesData);
        getResidencesData();
    },[])

    useEffect(()=>{
        const getRevisionsData  = async () =>{
            try{
                const response = await fetch(`${RevisionDatabaseURL}.json`)
                const data = await response.json();
                const revisionsData = Object.keys(data).map(key => ({ key, ...data[key] }));
                setRevisionsData(revisionsData);
            }catch(error){
                console.error('cant get revisions data from the server' , error);
            }
        };
        // console.log(revisionsData);
        getRevisionsData();
    },[])

    useEffect(()=>{
        if(residencesData.length > 0 && revisionsData.length > 0){

            const arrayData = [];

            arrayData.push(residencesData.length + " residences  on site");
            arrayData.push("first residence ever on this site : " + residencesData[0].name);
            arrayData.push("last current residence on this site : " + residencesData[residencesData.length - 1].name);

            const discuontPercentageTotal =  residencesData.reduce((currentTotal , revision) => {
                return revision.discountPercentages + currentTotal;
            },0);

            // const discuontPercentageLength =  residencesData.filter((revision) => {
            //     return revision.discountPercentages > 0;
            // });

            // const discuontPercentageAvg = parseInt(discuontPercentageTotal / discuontPercentageLength);

            // arrayData.push("discuont Percentage Avg : " + discuontPercentageAvg);


            const discuontTotal =  residencesData.reduce((currentTotal , residence) => {
                return residence.pricePerNight + currentTotal;
            },0);

            const discuontAvg = parseInt(discuontTotal / residencesData.length);


            arrayData.push("discuont Avg : " + discuontAvg);


            const housesWithMostOrders = residencesData.filter((houseWithOrders)=>{
                return houseWithOrders.BusyDates;
            })
            housesWithMostOrders.sort((s1, s2) => s2.BusyDates - s1.BusyDates);
            
            const houseWithMostOrders = housesWithMostOrders[0].name;
            // console.log("houseWithMostOrders" , houseWithMostOrders);
            arrayData.push("house With Most Orders : " + houseWithMostOrders);


            const ownerWithMostOrders = housesWithMostOrders[0].ownerName;
            // console.log("ownerWithMostOrders" , ownerWithMostOrders);
            arrayData.push("owner With Most Orders: " + ownerWithMostOrders);

            
            const locationWithMostOrders = housesWithMostOrders[0].location;
            // console.log("ownerWithMostOrders" , locationWithMostOrders);
            arrayData.push("location With Most Orders: " + locationWithMostOrders);

            setDisplayDataList(arrayData);

        }
    },[residencesData, revisionsData])

    useEffect(() => {
        const timer = setTimeout(() => {
          // Increment the index after 4 seconds
          setCurrentIndex((prevIndex) => (prevIndex + 1) % displayDataList.length);
        }, 3000);
    
        // Clear the timeout on component unmount
        return () => clearTimeout(timer);
      }, [currentIndex, displayDataList]);
    
      useEffect(() => {
        if (displayDataList.length > 0) {
          setDisplay(displayDataList[currentIndex]);
        }
      }, [currentIndex, displayDataList]);

  return (
    <div className="data-display-container">
        <div className="div">
            <img style={{padding : '2px'}} src={airbnbLogo} alt="airbnbLogo" />
        </div>
        <div className="div">
            <p className="data-display-info">🗞️  : {display}</p>
        </div>
    </div>
  )
}
