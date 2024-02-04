import './UserReviewsCards.css';
import {useEffect , useState} from 'react';
import badQuality from '../../assets/quality/badQuality.png';
import reviewQuality from '../../assets/quality/reviewQuality.png';
import goodQuality from '../../assets/quality/goodQuality.png';

export default function UserReviewsCards({userName , housesLikes , housesDisLikes , housesText}) {
  const [userLikes , setUserLikes] = useState([]);
  const [userDisLikes , setUserDisLikes] = useState([]);
  const [userTexts , setUserTexts] = useState([]);
  const [userReviews , setUserReviews] = useState([]);
  const [count , setCount] = useState(0);
  const [isSort , setIsSort] = useState(false);
  const [userSortedReviews,setUserSortedReviews] = useState([]);

  const [isAllReviewsToggle , setIsAllReviewsToggle] = useState(true);
  const [isLikesReviewsToggle , setIsLikesReviewsToggle] = useState(false);
  const [isDisLikesReviewsToggle , setIsDisLikesReviewsToggle] = useState(false);
  const [isTextsReviewsToggle , setIsTextsReviewsToggle] = useState(false);


  useEffect(()=>{
    getLikes();
  },[housesLikes])

  
  useEffect(()=>{
    getDisLikes();
  },[housesDisLikes])

  useEffect(()=>{
    getText();
  },[housesText])

  useEffect(()=>{
    console.log("userReviews" , userReviews);
    if(count === 3){
      const data = dataUndress(userReviews);
      sortData(data);
      setIsSort(true);
      setUserSortedReviews(data);
    }
  },[userReviews])

  const dataUndress = (userReviewsArray) => {
    let data = [];
    for(const userReviews of userReviewsArray){
      data.push(userReviews);
    }
    console.log("data : " , data);
    return data;
  }

  
  const sortData = (data) => {
    data.sort((s1, s2) => {
      const date1 = new Date(s1.review.likeOfTime || s1.review.disLikeOfTime || s1.review.reviewTime);
      const date2 = new Date(s2.review.likeOfTime || s2.review.disLikeOfTime || s2.review.reviewTime);
  
      return date2 - date1;
    });
  
    console.log("data : ", data);
  };
  

  const getLikes = () => {
    let userLikes = [];
    let userReviewsArray = [];
    for(const houseLike of housesLikes) {
      const id = houseLike.houseId;
      const name = houseLike.houseName;
      const userLike = {houseName : name , houseId : id , like : houseLike.houseLikes};
      const userReview = {houseName : name , houseId : id , review : houseLike.houseLikes , reviewIcon : goodQuality};
      // console.log(userLike);
      userLikes.push(userLike);
      userReviewsArray.push(userReview);
    }
    setUserLikes(userLikes);
    console.log("userReviewsArray " ,userReviewsArray);
    setUserReviews(prevReviews => [...prevReviews, ...userReviewsArray]);
    console.log("UserReviews",userReviews);
    setCount(count + 1);
  }

  const getDisLikes = () => {
    let userDisLikes = [];
    let userReviewsArray = [];
    for(const houseDisLike of housesDisLikes) {
      const id = houseDisLike.houseId;
      const name = houseDisLike.houseName;
      const userDisLike = {houseName : name , houseId : id , disLike : houseDisLike.houseDisLikes};
      const userReview = {houseName : name , houseId : id , review : houseDisLike.houseDisLikes , reviewIcon : badQuality};
      //console.log(userDisLike);
      userDisLikes.push(userDisLike);
      userReviewsArray.push(userReview);
    }
    setUserDisLikes(userDisLikes);
    console.log("userReviewsArray " ,userReviewsArray);
    setUserReviews(prevReviews => [...prevReviews, ...userReviewsArray]);
    console.log("UserReviews",userReviews);
    setCount(count + 1);
  }

  const getText = () => {
    let userTextArray = [];
    let userTextReviewArray = [];
    for(const houseText of housesText) {
      const id = houseText.houseId;
      const name = houseText.houseName;
      const userText = {houseName : name , houseId : id , text : houseText.textItem};
      const userReview = {houseName : name , houseId : id , review : houseText.textItem , reviewIcon : reviewQuality};
      userTextArray.push(userText);
      userTextReviewArray.push(userReview);
    }
    setUserTexts(userTextArray);
    console.log("userTextReviewArray " ,userTextReviewArray);
    setUserReviews(prevReviews => [...prevReviews, ...userTextReviewArray]);
    console.log("UserReviews" , userReviews);
    setCount(count + 1);
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
    const formattedDate = new Date(dateString).toLocaleString();
    return formattedDate;
  };

  
  return (
    <div >
      <button className="button1" onClick={()=>setIsAllReviewsToggle(!isAllReviewsToggle)}>click for all activity:</button>
      <div className="user-reviews-cards-container"> 
        {userReviews && userSortedReviews && isAllReviewsToggle && count === 3 && isSort &&
          userSortedReviews.map((userReview, key) => (
            <div className="user-reviews-cards-reviews" key={key}>
              <p>{userReview.houseName}</p>
              {console.log("Current userReview:", userReview)}
                <div>
                  <div>{userReview.review.reviewMessage ? userReview.review.reviewMessage : null}</div>
                  <img className="user-reviews-cards-img" src={userReview.reviewIcon} alt={`Image for goodQuality`} />
                  <div>{formatDate(userReview.review.likeOfTime || userReview.review.disLikeOfTime || userReview.review.reviewTime)}</div>
                </div>
            </div>
          ))}
      </div>
      <button className="button2" onClick={()=>setIsLikesReviewsToggle(!isLikesReviewsToggle)}>click for likes :</button>
      <div className="user-reviews-cards-container">       
          {userLikes && isLikesReviewsToggle &&
            userLikes.map((userLike) => (
              <div className="user-reviews-cards-likes" key={userLike.houseId}>
                <p>{userLike.houseName}</p>
                <img className="user-reviews-cards-img" src={goodQuality} alt={`Image for goodQuality`} />
                {userLike.like && (
                  <div key={userLike.like.likeEditor} >
                    {/* <img className="user-reviews-cards-user-img" src={userLike.like.likerImg} alt='like.likerImg' /> */}
                    {/* <div>{userLike.like.likeEditor}</div> */}
                    {/* Additional properties from like object */}
                    <div>{/* Additional properties from like object */}</div>
                    <div>{formatDate(userLike.like.likeOfTime)}</div>
                  </div>
                )}
              </div>
            ))}
      </div>
      <button className="button3" onClick={()=>setIsDisLikesReviewsToggle(!isDisLikesReviewsToggle)}>click for dislikes :</button>
      <div className="user-reviews-cards-container" >
        {userDisLikes && isDisLikesReviewsToggle &&
          userDisLikes.map((userDisLike) => (
            <div className="user-reviews-cards-disLikes" key={userDisLike.houseId}>
              <p>{userDisLike.houseName}</p>
              <img className="user-reviews-cards-img"  src={badQuality} alt={`Image for badQuality`} />
              {userDisLike.disLike && (
                <div key={userDisLike.disLike.disLikeEditor} >
                  {/* <img className="user-reviews-cards-user-img" src={userDisLike.disLike.disLikerImg} alt='like.likerImg' /> */}
                  {/* <div>{userDisLike.disLike.disLikeEditor}</div> */}
                  <div>{formatDate(userDisLike.disLike.disLikeOftime)}</div>
                </div>
              )}
            </div>
        ))}
      </div> 
      <button className="button4" onClick={()=>setIsTextsReviewsToggle(!isTextsReviewsToggle)}>click for text reviews :</button>
      <div className="user-reviews-cards-container">
            {userTexts && isTextsReviewsToggle &&
              userTexts.map((userText) => (
                <div className="user-reviews-cards-texts" key={userText.houseId}>
                  <p>{userText.houseName}</p>
                  {userText.text && (
                    <div key={userText.text.reviewEditor} >
                      <div style={{fontStyle : 'italic'}}>{userText.text.reviewMessage}</div>
                      <img className="user-reviews-cards-img" src={reviewQuality} alt={`Image for reviewQuality`} />
                      <div>{formatDate(userText.text.reviewTime)}</div>
                    </div>
                  )}
                </div>
            ))}
        </div>
      </div> 
  );
  
}
