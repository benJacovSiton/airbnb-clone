import { useEffect , useState } from 'react';
import anconda from '../../assets/fake/anaconda.png';
import armadillo from '../../assets/fake/armadillo.png';
import bird from '../../assets/fake/bird.png';
import buddy from '../../assets/fake/buddy.png';
import buddy2 from '../../assets/fake/buddy2.png';
import cat from '../../assets/fake/cat.png';
import jacutinga from '../../assets/fake/jacutinga.png';
import jaguar from '../../assets/fake/jaguar.png';
import macaw from '../../assets/fake/macaw.png';
import turtle from '../../assets/fake/turtle1.png';
import deer from '../../assets/fake/deer.png';
import ganesha from '../../assets/fake/ganesha.png';
import cow1 from '../../assets/fake/cow1.png';
import shark from '../../assets/fake/shark.png';
import dinosaur from '../../assets/fake/dinosaur.png';
import pork from '../../assets/fake/pork.png';
import pelican from '../../assets/fake/pelican.png';
import blackbird from '../../assets/fake/blackbird.png';
import pandabear from '../../assets/fake/pandabear.png';
import koi from '../../assets/fake/koi.png';

import bull1 from '../../assets/fake/bull1.jpeg';
import bull2 from '../../assets/fake/bull2.jpeg';
import superHeroDog from '../../assets/fake/superHeroDog.jpeg';
import dog1 from '../../assets/fake/dog1.jpeg';
import dog2 from '../../assets/fake/dog2.jpeg';
import beaver from '../../assets/fake/beaver.jpeg';
import wolf from '../../assets/fake/wolf.jpeg';
import octopus from '../../assets/fake/octopus.jpeg';
import strok from '../../assets/fake/stork.jpeg';
import chicken from '../../assets/fake/chicken.jpeg';
import cow2 from '../../assets/fake/cow2.jpeg';
import camel from '../../assets/fake/camel.jpeg';
import Leviathan from '../../assets/fake/Leviathan.jpeg';
import bat from '../../assets/fake/bat.jpeg';
import owel from '../../assets/fake/owel.jpeg';
import gorilla from '../../assets/fake/gorilla.jpeg';
import blackshark from '../../assets/fake/blackshark.jpeg';
import lemur from '../../assets/fake/lemur.jpeg';
import turkey from '../../assets/fake/turkey.jpeg';
import walrus from '../../assets/fake/walrus.jpeg';
import duck from '../../assets/fake/duck.jpeg';
import AbuNafha from '../../assets/fake/AbuNafha.jpeg';
import seamonster from '../../assets/fake/seamonster.jpeg';

export default function FakeReviews() {
  const [allResidences, setAllResidences] = useState([]);
  const housesDatabaseURL = "https://airbenb-448c7-default-rtdb.firebaseio.com/Houses";

 
  const pics = [
    anconda, armadillo, bird, buddy, buddy2, cat, jacutinga, jaguar, macaw, turtle,
    deer, ganesha, cow1, shark, dinosaur, pork, pelican, blackbird, pandabear, koi,
    bull1, bull2, superHeroDog, dog1, dog2, beaver, wolf, octopus, strok, chicken,
    cow2, camel, Leviathan, bat, owel, gorilla, blackshark, lemur, turkey, walrus,
    duck, AbuNafha, seamonster
  ];
  const seriesCharacters = [
    // Breaking Bad
    "Walter White",
    "Jesse Pinkman",
    "Saul Goodman",
    "Hank Schrader",
    "Skyler White",
  
    // Better Call Saul
    "Jimmy McGill",
    "Kim Wexler",
    "Mike Ehrmantraut",
    "Gus Fring",
  
    // Sons of Anarchy
    "Jax Teller",
    "Clay Morrow",
    "Gemma Teller Morrow",
    "Tig Trager",
    "Opie Winston",
  
    // Game of Thrones
    "Jon Snow",
    "Daenerys Targaryen",
    "Tyrion Lannister",
    "Arya Stark",
    "Cersei Lannister",
  
    // Lost
    "Jack Shephard",
    "Kate Austen",
    "Sawyer",
    "John Locke",
    "Ben Linus",
  
    // Entourage
    "Vincent Chase",
    "Johnny Drama",
    "Ari Gold",
    "Eric Murphy",
    "Turtle",
  
    // The Sopranos
    "Tony Soprano",
  
    // The Simpsons
    "Homer Simpson",
  
    // Friends
    "Rachel Green",
    "Ross Geller",
    "Monica Geller",
    "Chandler Bing",
    "Joey Tribbiani",
  
    // The Office
    "Michael Scott",
    "Jim Halpert",
    "Pam Beesly",
    "Dwight Schrute",
    "Stanley Hudson",
  
    // Gangs of London
    "Finn Wallace",
    "Sean Wallace",
    "Elliot Finch",
    "Ed Dumani",
    "Lale",
  
    // Banshee
    "Lucas Hood",
  
    // Prison Break
    "Michael Scofield",
    "T-Bag",
  
    // Peaky Blinders
    "Thomas Shelby",
    "Arthur Shelby",
    "Polly Gray",
    "Alfie Solomons",
  
    // Boardwalk Empire
    "Nucky Thompson",
    "Arnold Rothstein",
    "Jimmy Darmody",
  
    // The Boys
    "Billy Butcher",
    "Homelander",
    "Starlight",
    "Frenchie",

    // Narcos
    "Pablo Escobar",
    "Javier Peña",
    "Steve Murphy",
    "Gustavo Gaviria",
  
    // Vikings
    "Ragnar Lothbrok",
    "Lagertha",
    "Rollo",
    "Bjorn Ironside",
    "Floki",

  // The Last of Us
  "Joel",
  "Ellie",


  // Fargo
  "Lorne Malvo",
  "V.M. Varga",
  "Peggy Blumquist)",
  "Nikki Swango",
  
  ];
  /*
  Laudatory Reviews (Score 4 or 5 out of 5): 36 reviews (indices 0 to 35)
  Lukewarm Reviews (Score 3 out of 5): 20 reviews (indices 36 to 55)
  Bad Reviews (Score below 3 out of 5): 20 reviews (indices 56 to 75)
  */
  const airbnbReviews = [
    // Laudatory Reviews (Score 4 or 5 out of 5)
    "Absolutely fantastic! The apartment exceeded our expectations in every way.",
    "A perfect stay! Clean, comfortable, and beautifully decorated.",
    "Outstanding hospitality! The host went above and beyond to make our stay memorable.",
    "I can't recommend this place enough! Five-star experience all the way.",
    "Incredible value for money! This apartment is a hidden gem.",
    "Superb location and amenities. Will definitely book again!",
    "Exemplary service and attention to detail. Top-notch accommodation.",
    "Wonderful experience! The view from the apartment was breathtaking.",
    "A true home away from home. We couldn't have asked for a better place.",
    "The best Airbnb I've ever stayed in. Everything was perfect!",
    "Fantastic communication with the host. Made our trip even more enjoyable.",
    "Stunning apartment with all the comforts one could ask for.",
    "Exceptional cleanliness and hygiene standards. Very impressed!",
    "Highly recommended! This place made our vacation unforgettable.",
    "Five-star rating without a doubt. Will be back for sure.",
    "An absolute delight! The attention to detail made all the difference.",
    "Remarkable experience! The apartment had a unique charm that we loved.",
    "Top-tier accommodation. Every aspect of our stay was exceptional.",
    "Unbeatable value! We felt like royalty in this exquisite Airbnb.",
    "Perfect in every way. From check-in to check-out, it was flawless.",
    "An oasis of luxury. This Airbnb sets a new standard for excellence.",
    "Truly exceptional! We couldn't have asked for a better place to stay.",
    "A dream getaway! This Airbnb made our vacation truly unforgettable.",
    "Absolutely sublime. The host's attention to detail was remarkable.",
    "Stylish and comfortable. We loved every moment of our stay.",
    "Exceeded all expectations. This Airbnb deserves all the praise.",
    "Exceptional customer service. The host made us feel incredibly welcome.",
    "Spectacular views and amenities. A perfect retreat for relaxation.",
    "Luxurious accommodation with a personal touch. Highly recommended.",
    "Impeccable cleanliness and organization. A model Airbnb experience.",
    "The epitome of hospitality. We felt like VIP guests throughout our stay.",
    "Outstanding in every aspect. This Airbnb sets a new standard for excellence.",
    "A haven of tranquility. We couldn't have asked for a better getaway.",
    
    // Lukewarm Reviews (Score 3 out of 5)
    "Decent stay, but the apartment could use some improvements.",
    "Average experience. The price was fair, but not exceptional.",
    "Okay for a short stay, but amenities were somewhat lacking.",
    "Reasonable accommodation, but the noise from neighbors was bothersome.",
    "Mediocre at best. Expected more for the price we paid.",
    "Satisfactory stay, but nothing stood out as exceptional.",
    "Adequate for the price. Don't expect luxury, but it gets the job done.",
    "Mixed feelings about this place. Some aspects were good, others not so much.",
    "Middle-of-the-road experience. Wouldn't go out of my way to recommend it.",
    "Fair deal for the cost, but not a memorable stay.",
    "Not bad, but not great either. A neutral experience overall.",
    "Average amenities. Nothing special, but not terrible either.",
    "Sufficient for a short stay, but wouldn't choose it for a longer trip.",
    "Just okay. Didn't live up to the hype we read in the reviews.",
    "Average cleanliness. Expected a bit more attention to detail.",
    "Decent location, but the surrounding area was not as charming as expected.",
    "Reasonably comfortable, but the furnishings were a bit dated.",
    "A middle-of-the-road choice. Not outstanding, but not terrible.",
    "Fine for a quick stay, but wouldn't choose it for a longer vacation.",
    "A so-so experience. Didn't leave a lasting impression.",
    
    // Bad Reviews (Score below 3 out of 5)
    "Disappointing stay. The apartment did not meet our expectations.",
    "Unpleasant experience. Issues with cleanliness and maintenance.",
    "Not worth the money. Regret choosing this Airbnb for our trip.",
    "Terrible communication with the landlord. Avoid if possible.",
    "Avoid at all costs. The description does not match the reality.",
    "Worst Airbnb ever. Uncomfortable and unpleasant in every way.",
    "Major issues with the amenities. Would not recommend to anyone.",
    "Regrettable stay. Wish we had chosen a different accommodation.",
    "Dreadful experience. The host was unresponsive to our concerns.",
    "Run-down apartment with numerous problems. Stay away from this place.",
    "Absolutely horrible. The worst Airbnb we've ever stayed in.",
    "Complete disappointment. Nothing about this stay was enjoyable.",
    "Awful conditions. We regretted our decision to book this place.",
    "Terrible value for money. We felt cheated by the end of our stay.",
    "Unacceptable. The host's attitude was appalling.",
    "Stay away! The photos are deceiving, and the reality is disappointing.",
    "Nightmare stay. Nothing went as planned, and we had a miserable time.",
    "Not fit for habitation. We left early due to the unsatisfactory conditions.",
    "Avoid this place like the plague. It's not worth the risk.",
    "A disaster from start to finish. We will never book here again."
  ];
    
  useEffect(()=>{
    getHouses();
  },[])

  useEffect(()=>{
    let j = 0;
    for(const residence of allResidences){
      const amoutOfReviews = getRandomNumber( 3 , 11 );
        for(let i = 0; i < amoutOfReviews; i ++){
          const picIndex = getRandomNumber(0 , pics.length - 1);
          const pic = pics[picIndex];
          const seriesCharacterIndex = getRandomNumber(0,  seriesCharacters.length-1); // Random rating between 1 and 5 (inclusive)
          const seriesCharacter = seriesCharacters[seriesCharacterIndex];
          const newDisLike = {disLikeEditor : seriesCharacter , disLikeOfTime : new Date(Date.now()) , disLikerEmail :`fake${j}@fake.com` , disLikerImg : pic}
          updateEmotions("disLike" , residence.id ,  newDisLike);
        
        }
        for(let i = 0 ; i < amoutOfReviews; i++ ){
          const picIndex = getRandomNumber(0 , pics.length - 1);
          const pic = pics[picIndex];
          const seriesCharacterIndex = getRandomNumber(0,  seriesCharacters.length-1); // Random rating between 1 and 5 (inclusive)
          const seriesCharacter = seriesCharacters[seriesCharacterIndex];
          const newLike = {likeEditor : seriesCharacter , likeOfTime : new Date(Date.now()) , likerEmail :`fake${j}@fake.com` , likerImg : pic}
          updateEmotions("like", residence.id  , newLike);
        }
        for(let i = 0; i < amoutOfReviews; i ++){
          const picIndex = getRandomNumber(0 , pics.length - 1);
          const seriesCharacterIndex = getRandomNumber(0,  seriesCharacters.length-1); // Random rating between 1 and 5 (inclusive)
          const reviewIndex = getRandomNumber(0, airbnbReviews.length-1); // Random rating between 1 and 5 (inclusive)
          let res = 0;
          if(reviewIndex <= 35){
            res = getRandomNumber(4,5);
          }
          else if(reviewIndex <= 55){
            res = 3;
          }
          else if(reviewIndex <= 75){
            res = getRandomNumber(1,2);
          }
          const pic = pics[picIndex];
          const seriesCharacter = seriesCharacters[seriesCharacterIndex];
          const airbnbReview = airbnbReviews[reviewIndex];
          const ratingReview  = res;

          const newTextReview = {reviewEditor : seriesCharacter , reviewMessage: airbnbReview , reviewRate : ratingReview , reviewTime : new Date(Date.now()) , reviewerEmail :`fake${j}@fake.com` , reviewerImg : pic}
          updateTextReviews(residence.id  , newTextReview);
        }
      j++;
    }
  },[allResidences])
  
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

  const updateEmotions = async (emotionValue , residenceId ,  emotion) => {
    try{
      if(emotionValue === 'like'){

        await fetch(`${housesDatabaseURL}/${residenceId}/Reviews/UsersLikes.json` , {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(emotion),
        });

        const response = await fetch(`${housesDatabaseURL}/${residenceId}/Reviews/UsersLikes.json` , {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: response.name }),
        });

      }else if(emotionValue === 'disLike'){

        await fetch(`${housesDatabaseURL}/${residenceId}/Reviews/UsersDisLikes.json` , {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(emotion),
        });
        
        const response = await fetch(`${housesDatabaseURL}/${residenceId}/Reviews/UsersDisLikes.json` , {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: response.name }),
        });
      }

    }catch(error){
      console.error("cant update the characters emotions ... " , error);
    }
  }

  const updateTextReviews = async (residenceId  , review) => {
    try{
      await fetch(`${housesDatabaseURL}/${residenceId}/Reviews/Text.json` , {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(review),
      });
      
      const response = await fetch(`${housesDatabaseURL}/${residenceId}/Reviews/Text.json` , {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: response.name }),
      });
    }catch(error){
      console.error("cant update the characters text reviews")
    }
  }

  // Function to generate a random number between min (inclusive) and max (exclusive)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Function to generate a random boolean value
// function getRandomBoolean() {
//   return Math.random() < 0.5;
// }

  
    return (
    <div>FakeData</div>
  )
}
