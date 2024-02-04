import './ResidencesAccountData.css'
import ResidencesImages from './ResidencesImges';
import {useParams} from 'react-router-dom';
import ResidencesDescription from './ResidencesDescription';
import ResidencesOwner from './ResidencesOwner';
export default function ResidencesAccountData({handleSetOrderedHouse}) {

  const { key , name } = useParams();
  
  const intKey = parseInt(key);

  console.log(intKey);


  return (
    <div className="account-container">
        <h3 className="account-title">Hey There !</h3>
        <div className="account-description"><ResidencesDescription name={name}/></div>
        <div className="account-images"><ResidencesImages intKey={intKey}/></div>
        <div className="account-owner"><ResidencesOwner name={name} handleSetOrderedHouse={handleSetOrderedHouse}/></div>
    </div>
  )
}
