import { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserReviewsCards from './UserReviewsCards';
import UserReviewsTable from './UserReviewsTable';
export default function UserReviews() {
    const {userName} = useParams();
    const [allHouses , setAllHouses] = useState([]);
    const[likes , setLikes] = useState([]);
    const[disLikes , setDisLikes] = useState([]);
    const[text , setText] = useState([]);
    const[housesLikes , setHousesLikes] = useState([]);
    const[housesDisLikes , setHousesDisLikes] = useState([]);
    const[housesText , setHousesText] = useState([]);
    const [isLoadingHouses , setIsLoadingHouses] = useState();


    useEffect(()=>{
        getResidence();
        const timerId = setTimeout(() => {
          setIsLoadingHouses(false);
      }, 3000);
      return () => clearTimeout(timerId);        
    },[])

    useEffect(()=>{
        getLikes();
      },[isLoadingHouses])

    useEffect(()=>{
        getDisLikes();
      },[isLoadingHouses])

    useEffect(()=>{
        getText();
      },[isLoadingHouses])

    const getResidence = async () => {
        try{
          const resposne = await fetch(`https://airbenb-448c7-default-rtdb.firebaseio.com/Houses.json`);
          const data = await resposne.json();
          const houseData = Object.values(data);
          setAllHouses(houseData);
        }catch(error){
          console.error("cant get house" , error);
        }
    }

    const getLikes = () => {
      let allHousesLikes = [];
      for (const house of allHouses) {
        const tempLike = {houseName : house.name , houseId : house.id ,houseImg: house.img , houseOwnerImg : house.ownerProfilePic , like : Object.values(house.Reviews.UsersLikes)};
        allHousesLikes = allHousesLikes.concat(tempLike);
      }
      console.log("allHousesLikes : " , allHousesLikes);
      
      let housesIdLikes = [];
      let housesNamesLikes = [];
      let housesPicsLikes = [];
      let housesOwnerPicsLikes = [];
      let likes = [];
      for(const houseLike of allHousesLikes){
        for(const like of houseLike.like){
          if(like.likeEditor === userName){
            housesIdLikes.push(houseLike.houseId);
            housesNamesLikes.push(houseLike.houseName);
            housesPicsLikes.push(houseLike.houseImg);
            housesOwnerPicsLikes.push(houseLike.houseOwnerImg);
            likes.push(like);
          }
        }
      }
      console.log("housesPicsLikes " , housesPicsLikes);
      console.log("housesOwnerPicsLikes " , housesOwnerPicsLikes);


      let houseLikes = [];
      for(let i = 0; i < likes.length ; i++){
        const houseLike = {houseName : housesNamesLikes[i] , houseId : housesIdLikes[i] , houseImg : housesPicsLikes[i] , houseOwnerImg :  housesOwnerPicsLikes[i], houseLikes : likes[i]}
        houseLikes.push(houseLike);
      }
      console.log("houseLikes : " , houseLikes);
      // console.log("likes " + likes);
      setLikes(likes);
      setHousesLikes(houseLikes);
  }
  
    const getDisLikes = () => {
      let allHousesDisLikes = [];
      for (const house of allHouses) {
        const tempDisLike = {houseName : house.name ,houseId : house.id ,houseImg: house.img , houseOwnerImg : house.ownerProfilePic , disLike : Object.values(house.Reviews.UsersDisLikes)};
        allHousesDisLikes = allHousesDisLikes.concat(tempDisLike);
      }
      // console.log("allHousesDisLikes : " , allHousesDisLikes);
      
      let disLikes = [];
      let housesIdDisLikes = [];
      let housesNamesDisLikes = [];
      let housesPicsDisLikes = [];
      let housesOwnerPicsDisLikes = [];
      for(const houseDisLike of allHousesDisLikes){
        let count = 0;
        for(const disLike of houseDisLike.disLike){
          if(disLike.disLikeEditor === userName){
            housesIdDisLikes.push(houseDisLike.houseId);
            housesNamesDisLikes.push(houseDisLike.houseName);
            housesPicsDisLikes.push(houseDisLike.houseImg);
            housesOwnerPicsDisLikes.push(houseDisLike.houseOwnerImg);
            disLikes.push(disLike);
          }
          count++;
        }
      }
      // console.log("housesIdDisLikes " + housesIdDisLikes);

      let houseDisLikes = [];
      for(let i = 0; i < disLikes.length ; i++){
        const houseDisLike = {houseName : housesNamesDisLikes[i] , houseId : housesIdDisLikes[i] , houseImg : housesPicsDisLikes[i] , houseOwnerImg : housesOwnerPicsDisLikes[i] , houseDisLikes : disLikes[i]}
        houseDisLikes.push(houseDisLike);
      }
      // console.log("houseDisLikes : " , houseDisLikes);
      // console.log("disLikes " + disLikes);
      setDisLikes(disLikes);
      setHousesDisLikes(houseDisLikes);
    }

    const getText = () => {
      let allHousesText = [];
      for (const house of allHouses) {
        const tempText = {houseName : house.name , houseId: house.id ,houseImg: house.img , houseOwnerImg : house.ownerProfilePic , text: Object.values(house.Reviews.Text) };
        allHousesText = allHousesText.concat(tempText);
      }
    
      let housesIdText = [];
      let housesNamesText = [];
      let textArr = [];
      let housesPicsText = [];
      let housesOwnerPicsText = [];
      for (const houseText of allHousesText) {
        for (const text of houseText.text) {
          if (text.reviewEditor === userName) {
            housesIdText.push(houseText.houseId);
            housesNamesText.push(houseText.houseName);
            housesPicsText.push(houseText.img);
            housesOwnerPicsText.push(houseText.ownerProfilePic);
            textArr.push(text);
          }
        }
      }
    
      let housesText = [];
      for (let i = 0; i < textArr.length; i++) {
        const houseText = { houseId: housesIdText[i], houseName: housesNamesText[i] , houseImg : housesPicsText[i] , houseOwnerImg : housesOwnerPicsText , textItem: textArr[i] }; // Change 'houseText' to 'textItem'
        housesText.push(houseText);
      }
    
      // console.log("housesText : ", housesText);
      // console.log("textArr ", textArr);
      setText(textArr);
      setHousesText(housesText);
    };
    
    
    
    return(
      <>
        <UserReviewsCards userName = {userName} housesLikes = {housesLikes} housesDisLikes = {housesDisLikes} housesText = {housesText}/>
        <UserReviewsTable allHouses = {allHouses} housesLikes = {housesLikes} housesDisLikes = {housesDisLikes} housesText = {housesText}/>
      </>
    )
  }
