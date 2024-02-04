import{ useState,useEffect } from 'react';
import DatesLogo from '../../assets/calendar.png'
import { useNavigate } from 'react-router-dom';

export default function DatesInfo({handleSetIsSortMode , handleSetResidences}) {
    const [isOpen , setIsOpen] = useState(false);
    const [isDates , setIsDates] = useState(false);
    const[checkInDay , setCheckInDay] = useState();
    const[checkInMonth , setCheckInMonth] = useState();
    const[checkInYear , setCheckInYear] = useState();
    const[checkOutDay , setCheckOutDay] = useState();
    const[checkOutMonth , setCheckOutMonth] = useState();
    const[checkOutYear , setCheckOutYear] = useState();
    const[houses , setHouses] = useState([]);
    const [freeDatesHouses, setFreeDatesHouses] = useState([]);
    const [dates ,setDates] = useState("");

    const housesDatabaseURL = `https://airbenb-448c7-default-rtdb.firebaseio.com/Houses`;
    const navigate = useNavigate();
    useEffect(() => {
        const fetchBusyDates = async () => {
          try {
            const response = await fetch(`${housesDatabaseURL}.json`);
            const housesObjects = await response.json();
       
            // Convert the object values to an array of Date objects
            setHouses(Object.values(housesObjects || []));
           
      
          } catch (error) {
            console.error('Error fetching busy dates:', error);
          }
        };
      
        fetchBusyDates();
      }, [housesDatabaseURL]);

    const handleDates = () =>{
        if(checkInYear > checkOutYear || checkInYear === checkOutYear && checkInMonth > checkOutMonth || checkInYear === checkOutYear && checkInMonth === checkOutMonth && checkInDay > checkOutDay)
            return false;
        let checkInDateString = checkInMonth+"-"+checkInDay+"-"+checkInYear;
        let checkOutDateString = checkOutMonth+"-"+checkOutDay+"-"+checkOutYear;
        
        // Parse date strings into Date objects
        let checkInDate = new Date(checkInDateString);
        let checkOutDate = new Date(checkOutDateString);

        // Now, checkInDate and checkOutDate are valid Date objects
        console.log(checkInDate.toDateString());
        console.log(checkOutDate.toDateString());

        checkInDate = checkInDate.toDateString();
        checkOutDate = checkOutDate.toDateString();

        setDates("browser throw are awesome residences available in dates check in : " + checkInDate + "check out : " + checkOutDate);

        setIsDates(true);
        handleClear(false);
        navigate(`/residences/${checkInDate}/to/${checkOutDate}`);
    };

    const handleClear = (isclearAndRemove) => {
      if(isclearAndRemove){
        setIsDates(false);
      }
      setCheckInDay('');
      setCheckInMonth('');
      setCheckInYear('');
      setCheckOutDay('');
      setCheckOutMonth('');
      setCheckOutYear('');
    };

  return (
  <div>
    <img  onClick={()=>setIsOpen(!isOpen)} className="sorted-residences-toggle-icon" src={DatesLogo} alt='datesLogo'></img>
    {isOpen ? (
      <div>
        <h4>find that it in your's dates</h4>
        <label>check in : </label>
        <input
          type="number"
          id="inDay"
          required
          placeholder="dd/"
          value={checkInDay}
          onChange={(e) => setCheckInDay(e.target.value)}
        />
        <input
          type="number"
          id="inMonth"
          required
          placeholder="mm/"
          value={checkInMonth}
          onChange={(e) => setCheckInMonth(e.target.value)}
        />
        <input
          type="number"
          id="inYear"
          required
          placeholder="yyyy"
          value={checkInYear}
          onChange={(e) => setCheckInYear(e.target.value)}
        />
        <label>check out : </label>
        <input
          type="number"
          id="outDay"
          required
          placeholder="dd/"
          value={checkOutDay}
          onChange={(e) => setCheckOutDay(e.target.value)}
        />
        <input
          type="number"
          id="outMonth"
          required
          placeholder="mm/"
          value={checkOutMonth}
          onChange={(e) => setCheckOutMonth(e.target.value)}
        />
        <input
          type="number"
          id="outYear"
          required
          placeholder="yyyy"
          value={checkOutYear}
          onChange={(e) => setCheckOutYear(e.target.value)}
        />
        <button onClick={handleDates}>find for this dates</button>
        <button onClick={()=> handleClear(true)}>Clear All</button>
        {isDates ? <p>{dates}</p> : null}
      </div>
    ) : null}
  </div>
  )    
    
}


