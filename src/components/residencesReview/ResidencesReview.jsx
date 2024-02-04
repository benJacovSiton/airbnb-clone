import { useState , useEffect} from 'react'
import { useLogin } from '../../hooks/useLogin';
import likeIcon from "./../../assets/like.png";
import disLikeIcon from "./../../assets/disLike.png";
import { useNavigate } from 'react-router-dom';
import { app, getDatabase, ref, onValue, off, push } from '../../firebase';
import { useParams } from 'react-router-dom';
import './ResidencesReview.css';

export default function ResidencesReview({isLikePreesedFrist , isDisLikePreesedFrist , isDisLikePreesedFristVar,  emotionEmailFrist }) {
  const {user} = useLogin();  
  const { residenceId } = useParams();
  const [residence , setResidence] = useState({})
  const[reviews , setReviews] = useState([]);
  const[newReviewText , setNewReviewText] = useState("")
  const[isLike , setIsLike] = useState(false);
  const[isDisLike , setIsDisLike] = useState(false);
  const[likes , setLikes] = useState([])
  const[disLikes , setDisLikes] = useState([])
  const[isLikePreesed , setIsLikePreesed] = useState(isLikePreesedFrist);
  const[isDisLikePreesed , setIsDisLikePreesed] = useState(isDisLikePreesedFrist);
  const[newReviewRate , setNewReviewRate] = useState();
  const [likeId , setLikeId] = useState("");
  const [disLikeId , setDisLikeId] = useState("");
  let isLikeNow = isLikePreesedFrist;
  let isDisLikeNow = isDisLikePreesedFrist;
  const likeStr = 'like';
  const disLikeStr = 'disLike';
  const reviewsDatabaseURL = `https://airbenb-448c7-default-rtdb.firebaseio.com/Houses/`;
  const navigate = useNavigate();

  useEffect(()=>{
    const getResidence = async () => {
      try{
        const resposne = await fetch(`https://airbenb-448c7-default-rtdb.firebaseio.com/Houses/${residenceId}.json`);
        const data = await resposne.json();
        console.log("data",data);
        console.log("isLikePreesedFrist" ,isLikePreesedFrist);
        console.log("isDIsLikePreesedFrist" ,isDisLikePreesedFrist);
        console.log("isDisLikePreesedFristVar" ,isDisLikePreesedFristVar);
        setResidence(data);
      }catch(error){
        console.error("cant get house" , error);
      }
    }
    getResidence();
  },[])


  useEffect(()=>{
    const getTextReviews = async () => {
        try{
            const response = await fetch(`${reviewsDatabaseURL}/${residenceId}/Reviews/Text.json`)
            const data = await response.json()
            const textReviews = Object.values(data);
            console.log(textReviews);
            setReviews(textReviews);

        }catch(error){
            console.error("cant get text reviews" , error);
        }
    };
    getTextReviews();
  },[]);

  useEffect(()=>{
    const getLikes = async () => {
        try{
            const response = await fetch(`${reviewsDatabaseURL}/${residenceId}/Reviews/UsersLikes.json`)
            const data = await response.json()
            const likes = Object.values(data);
            setLikes(likes);
        }catch(error){
            console.error("cant get like reviews" , error);
        }
    };
    getLikes();
  },[]);

  useEffect(()=>{
    const getDisLikes = async () => {
        try{
            const response = await fetch(`${reviewsDatabaseURL}/${residenceId}/Reviews/UsersDisLikes.json`)
            const data = await response.json()
            const disLikes = Object.values(data);
            console.log(disLikes);
            setDisLikes(disLikes);

        }catch(error){
            console.error("cant get dis likes reviews" , error);
        }
    };
    getDisLikes();
  },[]);

  const handleReview = () => {
    const newReview = {reviewMessage : newReviewText , reviewRate : newReviewRate ,  reviewEditor : user.displayName , reviewerEmail : user.email , reviewerImg: user.photoURL , reviewTime : new Date()};
    setReviews([...reviews , newReview]);
    const updateReviews = async () => {
        try{
            const response = await fetch(`${reviewsDatabaseURL}/${residenceId}/Reviews/Text.json`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(newReview),
              });
              const data = await response.json();
              await fetch(`${reviewsDatabaseURL}/${residenceId}/Reviews/Text/${data.name}.json`, {
                method: 'PATCH',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({id : data.name}),
              });

        }catch(error){
            console.error("cant update reviews" , error)
        }
    }
    updateReviews();
  };

  const handleLike = (isLike1) => {
    console.log(isLike1);
    isLikeNow = !isLikeNow;
    console.log(isLikeNow);
    setIsLike(isLike);
    setIsDisLike(!isLike);
    setIsLikePreesed(!isLikePreesed);
    if(isDisLikePreesed && disLikeId != ""){
      deleteDisLikeByLike(disLikeId);
      setIsDisLikePreesed(false);
    }
    if(isLikePreesed === false){
        const newLike = { likeEditor : user.displayName ,likerEmail : user.email , likerImg: user.photoURL , likeOfTime : new Date()};
        setLikes([...likes , newLike]);
        const updateLikes = async () => {
            try{
              const response = await fetch(`${reviewsDatabaseURL}${residenceId}/Reviews/UsersLikes/.json`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(newLike),
              });
              const data = await response.json();
              await fetch(`${reviewsDatabaseURL}${residenceId}/Reviews/UsersLikes/${data.name}.json`, {
                method: 'PATCH',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({id : data.name}),
              });
              setLikeId(data.name);
            }catch(error){
                console.error("cant post like" , error)
            }
        }
        updateLikes();
    }
    else{
        const deleteLike = async () => {
            try{
              console.log(user.email);
              const response = await fetch(`${reviewsDatabaseURL}/${residenceId}/Reviews/UsersLikes.json`)
              const data = await response.json();
              const likes = Object.values(data);
              let value = "";
              for(const like of likes){
                // console.log("like.LikerEmail" , like.likerEmail);
                // console.log("like.LikerEmail === user.email",like.likerEmail === user.email);
                if(like.likerEmail === user.email){
                  // console.log("like.id" , like.id);
                  value = like.id;
                  break;
                }
              }
              if(value != ""){
                await fetch(`${reviewsDatabaseURL}/${residenceId}/Reviews/UsersLikes/${value}.json`, {
                  method: 'DELETE',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                })
                setLikeId("");            
              }
            }catch(error){
                console.error("cant delete like" , error);
            }
        }
        
        deleteLike();
        
        const setLikesList = async () => {
          try{
            const response = await fetch(`${reviewsDatabaseURL}${residenceId}/Reviews/UsersLikes.json`);
            const data = await response.json();
            console.log("likes : " , Object.values(data));
            setLikes(Object.values(data));
          }catch(error){
            console.error("cant set likes from data base")
          }
        }
        setLikesList();
    }
  };

  const handleDisLike = (isDisLike1) => {
    console.log(isDisLike1);
    setIsDisLike(isDisLike1);
    isDisLikeNow = !isDisLikeNow;
    console.log(isDisLikeNow);
    setIsLike(!isDisLike);
    setIsDisLikePreesed(!isDisLikePreesed)
    if(isLikePreesed && likeId != ""){
      deleteLikeByDisLike(likeId);
      setIsLikePreesed(false);
    }
    if(isDisLikePreesed === false){
        const newDisLike = { disLikeEditor : user.displayName ,disLikerEmail : user.email , disLikerImg: user.photoURL, disLikeOftime : new Date()};
        setDisLikes([...disLikes , newDisLike]);
        const updateDisLikes = async () => {
            try{
              const response = await fetch(`${reviewsDatabaseURL}/${residenceId}/Reviews/UsersDisLikes.json`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(newDisLike),
              });
              const data = await response.json();
              await fetch(`${reviewsDatabaseURL}/${residenceId}/Reviews/UsersDisLikes/${data.name}.json`, {
                method: 'PATCH',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({id : data.name}),
              });
              setDisLikeId(data.name);
            }catch(error){
                console.error("cant post dis like" , error)
            }
        }
        updateDisLikes();
    }
    else{
      const deleteDisLike = async () => {
        try{
          console.log(emotionEmailFrist);
          const response = await fetch(`${reviewsDatabaseURL}/${residenceId}/Reviews/UsersDisLikes.json`)
          const data = await response.json();
          const disLikes = Object.values(data);
          console.log("disLikes",disLikes);
          let value = "";
          console.log("user.email" ,user.email);
          console.log("user" , user.email);
          for(const disLike of disLikes){
            console.log("disLike" , disLike);
            console.log("disLike.disLikerEmail",disLike.disLikerEmail);
            console.log("disLike.disLikerEmail === emotionEmailFrist",disLike.disLikerEmail === user.email);
            if(disLike.disLikerEmail === user.email){
              console.log("disLike.id",disLike.id);
              value = disLike.id;
              break;
            }
          }
          console.log("value",value);
          if(value != ""){
            await fetch(`${reviewsDatabaseURL}/${residenceId}/Reviews/UsersDisLikes/${value}.json`, {
              method: 'DELETE',
              headers: {
                  'Content-Type': 'application/json',
              },
            });
            setDisLikeId("");            
          }
        }catch(error){
            console.error("cant delete dis like" , error);
        }
    }
    deleteDisLike();
    }
  };

       const deleteLikeByDisLike = async (likeId) => {
        try{
          console.log("likeId",likeId);
          await fetch(`${reviewsDatabaseURL}/${residenceId}/Reviews/UsersLikes/${likeId}.json`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
          });
          setLikeId("");            
        }catch(error){
            console.error("cant delete like" , error);
        }
    }

     const deleteDisLikeByLike = async (disLikeId) => {
        try{
          console.log("disLikeId",disLikeId);
          await fetch(`${reviewsDatabaseURL}/${residenceId}/Reviews/UsersDisLikes/${disLikeId}.json`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
          });
          setDisLikeId("");            
        }catch(error){
            console.error("cant delete dis like" , error);
        }
    }


  return (
  <>
    <div className="">
        {/* <div className="residences-review-house-info">
          <img className="residences-review-house-img" src={residence.img} alt="house img"/>
          <img className="residences-review-owner-img" src={residence.ownerProfilePic} alt="owner Profile Pic"/>
        </div> */}
        <div className="residences-review-tool-bar">
          <div className="residences-review-exit" onClick={() => navigate('/residences')}>
            <p className="residences-review-house-text">house : {residence.name}</p>
            <p className="residences-review-house-text">owner : {residence.ownerName}</p>
            ❌
          </div>
          <button style={{backgroundColor: isLikePreesed ? 'cornflowerblue' : 'grey',}} className="residences-review-like" onClick={()=>handleLike(!isLikeNow)}>
            <img src={likeIcon} alt='likeIcon' />
          </button>
          <button style={{backgroundColor: isDisLikePreesed ? 'thistle' : 'grey',}} className="residences-review-disLike" onClick={()=>handleDisLike(!isDisLikeNow)}>
            <img src={disLikeIcon} alt='disLikeIcon' />
          </button>
          {isLikePreesed ? likes.length > 1 ? <p onClick={() => navigate(`/${residenceId}/${likeStr}/list`)}>you and {likes.length - 1} more users like that</p>:<p>you like that</p>: null}
          {isDisLikePreesed ? disLikes.length > 1 ? <p onClick={() => navigate(`/${residenceId}/disLike/list`)}>you and {disLikes.length - 1} more users dis like that</p>:<p>you dis like that</p>: null}
          <textarea
          className="residences-review-textReview"
          placeholder='push yours review...'
          value={newReviewText}
          onChange={(e) => setNewReviewText(e.target.value)}
        />
        <input placeholder='🌟🌟🌟🌟🌟'
              className="residences-review-rateReview"
              type='number'
              min='1'
              max='5'
              value={newReviewRate}
              onChange={(e)=>setNewReviewRate(e.target.value)}/>
        <button className="residences-review-sendReview" onClick={newReviewText !== "" ? handleReview : () => alert("Empty review")}>post review</button>
        </div>
        <div className="residences-review-container">
          {reviews.length > 0 &&
            reviews.map((review, index) => (
              <div className="residences-review-card" key={index}>
                <p className="residences-review-card-review-message">{review.reviewMessage}</p>
                <p>By : {review.reviewEditor}</p>
                {review.reviewRate != null  ? <p>rate : {review.reviewRate}</p> : <p>no rate</p>}
                <img className="residences-review-user-img" src={review.reviewerImg} alt='userImg'></img>
              </div>
          ))}
      </div>
    </div>
  </>
  );
}
