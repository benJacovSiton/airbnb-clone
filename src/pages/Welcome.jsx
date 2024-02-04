import { useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../hooks/useLogin';
import './Welcome.css'
export default function Welcome() {
  const { user } = useLogin();
  const [specialToggle , setSpecialToggle] = useState(false);
  const [featuresToggle , setFeaturesToggle] = useState(false);
  const navigate = useNavigate();

  return (
    <div style={{ backgroundImage: `url(https://www.jetsetter.com//uploads/sites/7/2018/04/4pLO4Vp_-1380x690.jpeg)` , objectFit: 'cover' ,   backgroundSize: 'cover',   backgroundPosition: 'center',   backgroundRepeat: 'no-repeat', height: '96vh' , color : 'whitesmoke'}}>
        <div className="welcome-container">
            <h2>Welcome {user.displayName }</h2>
            <img src = {user.photoURL} alt="user.photoURL"></img>
            <p>
                In the bustling world of travel, the Airbnb app stands as a beacon for those seeking more than just a place to stay; it's an invitation to embark on a journey that transcends the ordinary. With its intuitive features, users can effortlessly explore a tapestry of accommodations, from cozy apartments to lavish homes, each with a unique story to tell.

                Immerse yourself in the magic of personalized experiences, guided by the wisdom of likes and dislikes. Unearth hidden gems with a seamless sorting system, ensuring your perfect retreat is just a tap away. Engage in meaningful conversations through the in-app chat, connecting with hosts who open their doors to a world of local insights and cherished memories.

                Reviews weave tales of past sojourns, guiding fellow travelers toward the extraordinary. The app is a symphony of possibilities, where cancellations are handled with grace, and the journey is as much about the unexpected detours as it is about the planned destinations.

                In the world of Airbnb, every stay is a chapter waiting to be written, a canvas ready to capture the colors of your unique adventure. So, unlock the door to your next escapade – where the ordinary becomes extraordinary, and every moment is infused with the spirit of exploration.
            </p>
            <div className="welcome-buttons">
                <div onClick={()=>setSpecialToggle(!specialToggle)}>
                    <button className="welcome-button">What makes us so special ? 🦋</button>
                    {specialToggle && ( <p>
                        At our Airbnb Apartment Rental App, we take pride in offering an unparalleled experience that transcends ordinary stays. What makes us truly special?

                        1. Diverse Price Range and Tailored Options:

                        We cater to a wide spectrum of budgets, ensuring that everyone can find a comfortable and stylish space that suits their financial preferences.

                        Whether you're seeking a cozy getaway or a lavish retreat, our platform has options that align with your unique needs.

                        2. Celebrity-Owned Apartments:

                        Elevating the standard of luxury, our portfolio includes apartments owned by renowned figures from the worlds of cinema, television, music, culture, science, and history.

                        Immerse yourself in the ambiance curated by these iconic personalities, turning your stay into a one-of-a-kind experience.

                        3. Prime Locations in Touristic Cities:

                        Our curated selection of apartments is strategically placed in sought-after locations within the most tourist-centric cities.

                        Enjoy the convenience of staying in the heart of vibrant neighborhoods, with iconic landmarks, cultural hotspots, and renowned attractions just steps away.

                        4. Exclusive Access to Glamorous Retreats:

                        Revel in the allure of glamorous retreats designed for those who appreciate the finer things in life.

                        From chic urban dwellings to opulent getaways, our app provides access to accommodations that redefine luxury and sophistication.

                        5. Personalized Experiences from Influential Hosts:

                        Our platform connects you with hosts who are influencers and leaders in their respective fields.

                        Immerse yourself in curated experiences shaped by the expertise and passions of your hosts, creating memories that go beyond the ordinary.

                        6. Tailor-Made for Every Need:

                        We understand that every traveler is unique. Our platform is designed to cater to a myriad of needs, ensuring that your accommodation aligns perfectly with your travel style.

                        In essence, our Airbnb Apartment Rental App is not just a booking platform; it's a gateway to a world of diversity, luxury, and curated experiences. Join us in redefining the art of travel, where every stay is an opportunity to live in the lap of luxury and exclusivity.
                    </p> )}
                </div>
                <div onClick={()=>setFeaturesToggle(!featuresToggle)}>
                    <button className="welcome-button">Read More About Our features 👨‍💻🐱‍💻</button>
                    {featuresToggle && (<p>
                        Apartment Sorting:

                        Allows users to sort search results based on various criteria such as price, location, size, amenities, and user ratings.

                        Enhances user experience by providing a quick and efficient way to find accommodations that meet specific preferences.

                        Apartment Search by Type:

                        Enables users to filter and search for apartments based on specific types, such as studio, one-bedroom, or entire homes.

                        Improves search accuracy and efficiency, ensuring users find accommodations that match their desired criteria.

                        Likes and Dislikes:

                        Users can express their preferences by liking or disliking accommodations, creating a personalized list of favored options.

                        Enhances the app's recommendation system, providing users with more tailored and relevant suggestions over time.
                        Reviews:

                        Allows guests to leave reviews and ratings for accommodations after their stay.

                        Provides valuable feedback for hosts and assists future guests in making informed decisions about where to stay.

                        Chat:

                        Facilitates direct communication between hosts and guests through an in-app chat feature.

                        Enables users to discuss details, ask questions, and coordinate aspects of their stay, fostering a sense of connection.

                        Cancellation of Orders:

                        Offers a user-friendly cancellation process, allowing guests to cancel reservations within specified terms.

                        Clearly communicates cancellation policies and ensures transparency in the event of a cancellation.

                    </p>)}
                </div>
                <button className="welcome-button" onClick={() => navigate('/residences')}>
                    begin ! 🔰
                </button>
            </div>
        </div>
    </div>
  )
}

/*

The Japanese symbol for beginner is "初心者" (pronounced shoshinsha). In Japanese writing, it is commonly used to indicate that someone is a beginner or a novice in a particular activity or skill. The symbol consists of three kanji characters: 初 (sho) means "first" or "beginning," 心 (shin) means "heart" or "mind," and 者 (sha) means "person" or "individual." Together, they form the word for "beginner" or "novice."*/