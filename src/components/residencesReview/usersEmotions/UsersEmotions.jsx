import './UsersEmotions.css'
import { useEffect, useState } from "react";
import { useParams ,useNavigate } from 'react-router-dom';

export default function UsersEmotions() {

  const[house , setHouse] = useState({});
  const[usersEmotions,setUsersEmotions] = useState([]);
  const { residenceId , emotion } = useParams();

  const navigate = useNavigate();

  useEffect(()=>{
    const getHouse = async () => {
        try{
            const response = await fetch(`https://airbenb-448c7-default-rtdb.firebaseio.com/Houses/${residenceId}/Reviews.json`);
            const data = await response.json()
            console.log("house" , data);
            setHouse(data);

        }catch(error){
            console.error("cant get user emotions reviews from house" , error);
        }
    };
    getHouse();
  },[]);

  useEffect(() => {
    console.log("Checking second useEffect condition:", house, emotion);
  
    if (house && emotion === 'like' && house.UsersLikes) {
      const likers = Object.values(house.UsersLikes);
      console.log("Liked Users:", likers);
      setUsersEmotions(likers);
    } else if (house && emotion === 'disLike' && house.UsersDisLikes) {
      const disLikers = Object.values(house.UsersDisLikes);
      console.log("Disliked Users:", disLikers);
      setUsersEmotions(disLikers);
    }
  }, [house, emotion]);
  
  
  

  return (
    <div className="users-emotions-container">
        <div className="users-emotions-exit" onClick={() => navigate('/residences')}>❌</div>
        <div className="users-emotions-title">
          <h2>Users Emotions</h2>
        </div>
        {emotion == 'like' ? 
          <div className="users-emotions-cards">
            {usersEmotions.map((userEmotion, index) => (
              <div className="users-emotions-card" key={index}>
                <img className="users-emotions-card-img-container users-emotions-card-img" src={userEmotion.likerImg} alt={`like-user-${index}`} />
                <p className="users-emotions-card-text">{userEmotion.likeEditor}</p>
              </div>
            ))}
          </div>
        :
        <div className="users-emotions-container">
          <h3>Disliked Users</h3>
          <div className="users-emotions-cards">
            {usersEmotions.map((userEmotion, index) => (
                <div className="users-emotions-card" key={index}>
                <p className="users-emotions-card-text">{userEmotion.disLikeEditor}</p>
                <img className="users-emotions-card-img-container users-emotions-card-img" src={userEmotion.disLikerImg} alt={`disLike-user-${index}`} />
              </div>
            ))}
          </div>
        </div>
      }
      </div>
  );
}
