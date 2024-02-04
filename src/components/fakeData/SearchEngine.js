import { useState } from 'react';

export default function SearchEngine() {
  const [urlsToDisplay, setUrlsToDisplay] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Link to Unsplash Search API Documentation: https://unsplash.com/documentation#search-photos
  async function getUnsplashPhotos() {
    try {
      // IMPORTANT! Update the below variable with your own api key!!
      const apiKey = 'tD2IZtwVTs-sm7I9efK2Bm0fTV57AFhvrIIZ6WzkP5Q';

      // Making Unsplash API call to search for photos based on the search query
      let resp = await fetch(`https://api.unsplash.com/search/photos?client_id=${apiKey}&query=${searchQuery}&per_page=15`);
      
      // Parsing the JSON data from the response
      let data = await resp.json();
      
      // Store the array of results into the urlsToDisplay variable
      setUrlsToDisplay(data.results);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <div className="fullscreen">
        <div className="center">
          {/* Input box where the user types in the search query */}
          <input
            placeholder='Enter Search Query'
            onChange={(e) => {
              // Update searchQuery variable with what the user types into the input box
              setSearchQuery(e.target.value);
            }}
          />
          <button onClick={getUnsplashPhotos}>Submit</button>
        </div>
        <div className="row">
          {/* Looping through the urlsToDisplay array to get each image URL to display */}
          {urlsToDisplay.map((image, index) => (
            <div key={index}>
              {/* Display image based on results we get back from Unsplash API */}
              <img src={image.urls.small} alt={`Unsplash ${index}`} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
