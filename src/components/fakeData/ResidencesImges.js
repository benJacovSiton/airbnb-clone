import './ResidencesImges.css'
import { useEffect, useState } from 'react';
export default function ResidencesImges(intKey) {
  const [urlsToDisplay, setUrlsToDisplay] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');


  const houseDescribes = [
    "villa in the jungle",
    "beach house",
    "mountain penthouse",
    "countryside cottage",
    "urban loft",
    "lakefront mansion",
    "ski chalet",
    "desert retreat",
    "coastal bungalow",
    "historic manor",
    "tropical treehouse",
    "modern skyscraper apartment",
    "floating houseboat",
    "cliffside retreat",
    "suburban ranch",
    "underground bunker",
    "A-frame cabin",
    "futuristic smart home",
    "medieval castle",
    "lighthouse cottage",
    "A urban loft",
    "A styled villa",
    "A house in the desert ",
    "A beachfront bungalow",
    "A futuristic smart home",
    "An exotic tropical villa",
    "A treehouse in the forest",
    "A charming countryside cottage",
    "A contemporary city penthouse",
    "A historic Victorian mansion",
    "A lakeside cabin",
    "A hobbit-style underground home",
    "A remote mountain monastery",
    "A luxury penthouse in a skyscraper",
    "A desert oasis retreat",
    "A safari-inspired luxury tent",
    "A high-altitude alpine cabin",
    "A retro-futuristic space colony",
    "lookout tower house",
    "historic clock tower house",
    "studio house",
  ];

  useEffect(()=>{
    console.log(intKey);
    getUnsplashPhotos();
  },[])

  async function getUnsplashPhotos() {
    try {
      const apiKey = 'tD2IZtwVTs-sm7I9efK2Bm0fTV57AFhvrIIZ6WzkP5Q';
      let resp = await fetch(`https://api.unsplash.com/search/photos?client_id=${apiKey}&query=${houseDescribes[Object.values(intKey)]}&per_page=15`);
      let data = await resp.json();
      setUrlsToDisplay(data.results);
      console.log("houseDescribes[Object.values(intKey)]" , houseDescribes[Object.values(intKey)]);
    } catch (e) {
      console.log(e);
    }
  }

  return (
     <div>
            {urlsToDisplay.map((image, index) => (
            <div key={index} className="residences-imges-container">
              {/* Display image based on results we get back from Unsplash API */}
              <img src={image.urls.small} alt={`Unsplash ${index}`} />
            </div>
          ))}
     </div>
   );
}
