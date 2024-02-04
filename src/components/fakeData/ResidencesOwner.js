import {useState , useEffect} from 'react'
import Dialog from '.././Dialog';

import './ResidencesOwner.css';
export default function ResidencesOwner({name , handleSetOrderedHouse}) {
  const [allResidences, setAllResidences] = useState([]);
  const [owner, setOwner] = useState({});
  const[ownerPhoneNumber , setOwnerPhoneNumber] = useState("");
  const [isDialog , setIsDialog] = useState(false);
  const housesDatabaseURL = "https://airbenb-448c7-default-rtdb.firebaseio.com/Houses";
  const phoneDigits = 7;
  useEffect(() => {
    getHouses();
  }, []); 

  useEffect(() => {
    setOwner(findOwner());
    let phoneDigitsStr = '';
    for(let i = 0 ; i < phoneDigits; i++){
        phoneDigitsStr += getRandomNumber(0,9);
    }
    setOwnerPhoneNumber(phoneDigitsStr);
  }, [allResidences]); 

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

  const findOwner = () => {
    const owner = allResidences.filter((residence) => {
      return residence.name === name;
    });
    console.log("owner[0] " , owner[0]);
    return owner.length > 0 ? owner[0] : null;
  };
  
  
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }


  return (
    <div className="residences-owner-container">
      {owner && (
        <>
          <p>owner Name : {owner.ownerName}</p>
          <img style={{ height: '100px', width: '100px' }} src={owner.ownerProfilePic} alt='ownerProfilePic' />
          <p>owner Phone : {ownerPhoneNumber}</p>
          <p>owner Email : {owner.ownerName}@gmail.com</p>
          <p>owner Facebook : wwww.facebook.com/{owner.ownerName}</p>
          <p>owner Instagram : wwww.instagram.com/{owner.ownerName} </p>
          <p>owner TickTok : wwww.ticktok.com/{owner.ownerName}</p>
          <button onClick = {() => setIsDialog(true)}>Book {name} Now ! 🧳</button>
          {isDialog ? <div style={{color: 'black'}}><Dialog residence={owner} handleSetOrderedHouse={handleSetOrderedHouse} setIsDialog={setIsDialog}  /></div> : null}
        </>
      )}
    </div>
  );

  
}
