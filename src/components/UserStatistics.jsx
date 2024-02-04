import { useEffect, useState } from 'react';
import { useLogin } from '../hooks/useLogin';
import './UserStatistics.css';


export default function UserStatistics({allUserRevisions}) {
    const {user} = useLogin();  
    const [activeAllUserRevisions , setActiveAllUserRevisions] = useState([]);
    const[totalDiscount,setTotalDiscount] = useState();
    const[totalSpend,setTotalSpend] = useState();
    const[totalSleepOut,setTotalSleepOut] = useState();
    const [discountPercentageAvg,setDiscountPercentageAvg] = useState();

    useEffect(()=>{
        const activeAllUserRevisionsData = allUserRevisions.filter((userRevisions) =>{
            return userRevisions.stilActive === true;
        });
        // console.log("activeAllUserRevisionsData : " , activeAllUserRevisionsData);
        setActiveAllUserRevisions(activeAllUserRevisionsData);
    },[allUserRevisions])
    
    useEffect(()=>{

        let totalBeforeDiscount = 0;
        let totalAfterDiscount = 0;
        
        for (const userRevision of activeAllUserRevisions) {
            totalBeforeDiscount += userRevision.reservedHousePervPricePerNight;
            totalAfterDiscount += userRevision.reservedHousePricePerNight;
        }
        
        const totalDiscount = totalBeforeDiscount - totalAfterDiscount;
        setTotalDiscount(totalDiscount);

        setTotalSpend(activeAllUserRevisions.reduce((currentTotal , userRevision) => {
            // console.log(currentTotal);
            return userRevision.reservedHousePrice + currentTotal;
        },0));

        let totalDiscountPercentage = 0;

        for (const userRevision of activeAllUserRevisions) {
            const beforeDiscount = userRevision.reservedHousePervPricePerNight;
            const afterDiscount = userRevision.reservedHousePricePerNight;
        
            const discountPercentage = ((beforeDiscount - afterDiscount) / beforeDiscount) * 100;
        
            totalDiscountPercentage += discountPercentage;
        }
        
        const discountPercentageAvg = parseInt(totalDiscountPercentage / allUserRevisions.length);
        
        setDiscountPercentageAvg(discountPercentageAvg);

        setTotalSleepOut(activeAllUserRevisions.reduce((currentTotal, userRevision) => {
            const checkInDate = new Date(userRevision.reservedCheckIn);
            const checkOutDate = new Date(userRevision.reservedCheckOut);
        
            const timeDifference = checkOutDate.getTime() - checkInDate.getTime();
            const numberOfNights = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
        
            return numberOfNights + currentTotal;
        }, 0));

    },[activeAllUserRevisions])    

  return (
    <div className="user-statistics-container">
        <h3 style={{color : 'black'}}>Statistics Of {user.displayName} : </h3>
        <p className="user-statistics-list-frist-item">totalDiscount :  {totalDiscount}$💰</p>
        <p className="user-statistics-list-second-item">totalSpend : {totalSpend}$💸</p>
        <p className="user-statistics-list-Third-item">discountPercentageAvg : {discountPercentageAvg}%📉</p>
        <p className="user-statistics-list-Fourth-item">totalSleepOut :  {totalSleepOut}💤</p>
    </div>
  )
}
