import { useState , useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { useLogin } from '../../../hooks/useLogin';
import ResidencesReview from '../ResidencesReview';

export default function ResidencesUsersEmotions() {
    const {user} = useLogin();  
    const { userEmail , residenceId } = useParams();
    const [isFinish , setIsFinish] = useState(false);
    const [isFinish2 , setIsFinish2] = useState(false);
    const[emotions , setEmotions] = useState([]);
    const[isLikePreesedFrist , setIsLikePreesedFrist] = useState(false);
    const[isDisLikePreesedFrist , setIsDisLikePreesedFrist] = useState(false);
    const[emotionEmailFrist , setEmotionEmailFrist] = useState("");
    let isDisLikePreesedFristVar = false;
  useEffect(() => {

    const getLikesReviews = async () => {
      try {
        const response = await fetch(`https://airbenb-448c7-default-rtdb.firebaseio.com/Houses/${residenceId}/Reviews.json`);
        const data = await response.json();
        console.log("reviews : ", data);
        console.log("Object.values(data.UsersLikes) : " , Object.values(data.UsersLikes));
        const likers = Object.values(data.UsersLikes);
        console.log("likers", likers);
        console.log("userEmail", userEmail);
        const hasLike = likers.filter((like) => {
          console.log("like", like.likerEmail);
          console.log(
            "userEmail===like.likerEmail",
            userEmail === like.likerEmail
          );
          return like.likerEmail === userEmail;
        });
        console.log("hasLike", hasLike);
        if (hasLike.length > 0) {
          setIsLikePreesedFrist(true);
          setEmotionEmailFrist(hasLike[0].likerEmail);
          console.log("hasLike[0].likerEmail", hasLike[0].likerEmail);
        }else{
          console.log("no likes for this user");
        }
      } catch (error) {
        console.error("cant get likes user reviews from house", error);
      } finally {
        console.log("isLikePreesedFrist", isLikePreesedFrist);
      }
    };
    getLikesReviews();

    const getDisLikesReviews = async () => {
      
      try{
        const response = await fetch(`https://airbenb-448c7-default-rtdb.firebaseio.com/Houses/${residenceId}/Reviews.json`);
        const data = await response.json();
        console.log("reviews : ", data);
        console.log("Object.values(data.UsersDisLikes)" , Object.values(data.UsersDisLikes));
        const disLikers = Object.values(data.UsersDisLikes);
        console.log("disLikers", disLikers);
        const hasDisLike = disLikers.filter((disLike) => {
          console.log("dis-like", disLike.disLikerEmail);
          console.log("userEmail === disLike.disLikerEmail", userEmail === disLike.disLikerEmail);
          return disLike.disLikerEmail === userEmail || disLike.disLikerEmail === user.email ;
        });
        console.log("hasDisLike", hasDisLike);
        if (hasDisLike.length > 0) {
          isDisLikePreesedFristVar = true;
          setIsDisLikePreesedFrist(true);
          setEmotionEmailFrist(hasDisLike[0].disLikerEmail);
          console.log("disLikers[0].disLikerEmail",disLikers[0].disLikerEmail);
        }else{
          console.log("no dis likes for this user");
        }
      }catch(error){
        console.error("cant get dis likes user reviews from house", error);
      }finally{
        console.log("isDisLikePreesedFristVar" , isDisLikePreesedFristVar);
        // console.log("isDisLikePreesedFrist", isDisLikePreesedFrist);
        console.log("setEmotionEmailFrist",emotionEmailFrist);
        setIsFinish(true);
      }
    }
    // console.log("isDisLikePreesedFrist", isDisLikePreesedFrist);
    getDisLikesReviews();
    setTimeout(() => {
      setIsFinish2(true);
    }, 1000);
  }, [userEmail, residenceId]);

  return isFinish && isFinish2 ? <ResidencesReview isLikePreesedFrist={isLikePreesedFrist} isDisLikePreesedFrist={isDisLikePreesedFrist} isDisLikePreesedFristVar = {isDisLikePreesedFristVar} emotionEmailFrist={emotionEmailFrist}/> : null;
}


