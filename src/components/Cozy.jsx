import React, { useEffect , useState } from 'react';
import { storage } from '../firebase';
import A$apRocky from '../assets/A$apRocky.jpg';
import AlCapone from '../assets/AlCapone.jpg';
import AmyWinehouse from '../assets/AmyWinehouse.jpg';
import Beyonce from '../assets/Beyonce.jpg';
import Billie from '../assets/Billie.jpg';
import BobMarley from '../assets/BobMarley.jpg';
import ClintEastwood from '../assets/ClintEastwood.jpg';
import Default1 from '../assets/defulat1.jpg';
import Default2 from '../assets/defulat2.jpg';
import Default3 from '../assets/defulat3.jpg';
import Default4 from '../assets/defulat4.jpg';
import Default5 from '../assets/defulat5.jpg';
import Default6 from '../assets/defulat6.jpg';
import Default7 from '../assets/defulat7.jpg';
import Default8 from '../assets/defulat8.jpg';
import Default9 from '../assets/defulat9.jpg';
import Drake from '../assets/Drake.jpg';
import Einstein from '../assets/Einstein.jpg';
import FreddieMercury from '../assets/FreddieMercury.jpg';
import JimMorrison from '../assets/JimMorrison.jpg';
import JohnLennon from '../assets/JohnLennon.jpg';
import MacMiller from '../assets/MacMiller.jpg';
import MarilynMonroe from '../assets/MarilynMonroe.jpg';
import MichaelJordan from '../assets/MichaelJordan.jpg';
import NipseyHussle from '../assets/NipseyHussle.jpg';
import NotoriousBIG from '../assets/NotoriousBIG.jpg';
import RayCharles from '../assets/RayCharles.jpg';
import RobertDowneyJr from '../assets/RobertDowneyJr.jpg';
import SlimShady from '../assets/Slim Shady(Eminem).jpg';
import TheWeeknd from '../assets/TheWeeknd.jpg';
import TommyShelby from '../assets/TommyShelby.jpg';
import Tupac from '../assets/Tupac.jpg';
import WalterWhite from '../assets/Walter White(heisenberg).jpg';
import Zendaya from '../assets/Zendaya.jpg';
import Joker from '../assets/joker.jpg';
import LeonardoDiCaprio from '../assets/LeonardoDiCaprio.jpg';
import KylianMbappé from '../assets/KylianMbappé.jpg';
import KidCudi from '../assets/KidCudi.jpg';
import FrankOcean from '../assets/FrankOcean.jpg';
import PostMalone from '../assets/PostMalone.jpg';
import RoddyRicch from '../assets/RoddyRicch.jpg';
import ShaquilleOneal from '../assets/ShaquilleOneal.jpg';
import PaulMcCartney from '../assets/PaulMcCartney.jpg';
import FrankSinatra from '../assets/FrankSinatra.jpg';
import TravisScott from '../assets/TravisScott.jpg';
import WillSmith from '../assets/WillSmith.jpg';
import KurtCobain from '../assets/KurtCobain.jpg';
import JohnnyDepp from '../assets/JohnnyDepp.jpg';
import ElonMusk from '../assets/ElonMusk.jpg';

export default function Cozy() {

  const housesDatabaseURL = "https://airbenb-448c7-default-rtdb.firebaseio.com/Houses";  
  const [houses, setHouses] = useState([]);
  const [isLoading , setIsLoading] = useState(true);

  const getIsDiscount = () => {

   const discountOptions = [true , false];
   const discountPercentages = [4,5,6,7,8,9,10,11,12,13,14,15];
   let discountPercentage = 100;
   let discountOption = discountOptions[Math.floor(Math.random() * discountOptions.length), Math.floor(Math.random() * discountOptions.length)];
   if(discountOption === false){
      discountPercentage = 0
   }
   else{
    discountPercentage = discountPercentages[Math.floor(discountPercentages.length - Math.random()), Math.floor(Math.random() * discountPercentages.length)];
   }

   return discountPercentage ;

  };

  
  
  const cozyHouses = [
    {
      id: 1,
      name: "Mac's Cottage",
      location: "123 Charming Street, Small Town, USA",
      bedrooms: 2,
      bathrooms: 1,
      features: ["Fireplace", "Wooden Beams", "Private Garden"],
      canSmoke: false,
      petFriendly: false,
      pricePerNight: 150,
      pervPricePerNight : 150,
      ownerName: "Mac Miller",
      rating: 2,
      wifi: false,
      parking: false,
      hasBalcony: false,
      hasGarden: false,
      distance: 4,
      img: "https://i.pinimg.com/474x/4d/db/ae/4ddbaef4ca552efc6f7f55511251bd18.jpg",
      ownerProfilePic: MacMiller,
      discountPercentages: getIsDiscount(),
    },
    {
      id: 2,
      name: "Joker's Hideaway",
      location: "666 Mystery Lane, Gotham City, USA",
      bedrooms: 6,
      bathrooms: 3,
      features: ["Mischief Room", "Bathtub of Laughter", "Chaos Central"],
      canSmoke: true,
      petFriendly: true,
      pricePerNight: 420,
      pervPricePerNight : 420,
      ownerName: "Joker",
      rating: 5,
      wifi: true,
      parking: true,
      hasBalcony: true,
      hasGarden: true,
      distance: 322,
      img: "https://i.pinimg.com/474x/f0/7e/ef/f07eefa09873214cc09840a1190b07ec.jpg",
      ownerProfilePic: Joker,
      discountPercentages: getIsDiscount(),
    },
    {
      id: 3,
      name: "Lennon's Peaceful Place",
      location: "321 Strawberry Fields, Liverpool, UK",
      bedrooms: 5,
      bathrooms: 2,
      features: ["Imagine Room", "Vintage Vibes", "Garden of Tranquility"],
      canSmoke: true,
      petFriendly: true,
      pricePerNight: 120,
      pervPricePerNight : 120,
      ownerName: "John Lennon",
      rating: 4,
      wifi: true,
      parking: true,
      hasBalcony: true,
      hasGarden: false,
      distance: 200,
      img: "https://i.pinimg.com/474x/17/42/59/17425930f1b14e1ba4039aeaa0c499a4.jpg",
      ownerProfilePic: JohnLennon,
      discountPercentages: getIsDiscount(),
    },
    {
      id: 4,
      name: "Beyoncé's Luxurious Loft",
      location: "567 Diva Drive, Hollywood, USA",
      bedrooms: 2,
      bathrooms: 1,
      features: ["Golden Glam", "Starlight Lounge", "VIP Vibes"],
      canSmoke: true,
      petFriendly: true,
      pricePerNight: 400,
      pervPricePerNight : 400,
      ownerName: "Beyoncé",
      rating: 3,
      wifi: false,
      parking: true,
      hasBalcony: true,
      hasGarden: false,
      distance: 555,
      img: "https://i.pinimg.com/474x/77/e0/8d/77e08d961d2e90f90a9304cce6f96094.jpg",
      ownerProfilePic: Beyonce,
      discountPercentages: getIsDiscount(),
    },
    {
      id: 5,
      name: "Einstein's Intellectual Haven",
      location: "999 Quantum Lane, Physics City, Switzerland",
      bedrooms: 4,
      bathrooms: 1,
      features: ["Genius Lab", "E=mc² Lounge", "Quantum Garden"],
      canSmoke: true,
      petFriendly: true,
      pricePerNight: 180,
      pervPricePerNight : 180,
      ownerName: "Albert Einstein",
      rating: 3,
      wifi: true,
      parking: false,
      hasBalcony: false,
      hasGarden: false,
      distance: 3,
      img: "https://i.pinimg.com/474x/af/23/b2/af23b28b5483450a7e70db086499e32f.jpg",
      ownerProfilePic: Einstein,
      discountPercentages: getIsDiscount(),
    },
    {
      id: 6,
      name: "Drake's Skyline Retreat",
      location: "777 Views Avenue, Toronto, Canada",
      bedrooms: 2,
      bathrooms: 1,
      features: ["Rap Realm", "Cloud 9 Lounge", "Views Balcony"],
      canSmoke: false,
      petFriendly: false,
      pricePerNight: 800,
      pervPricePerNight : 800,
      ownerName: "Drake",
      rating: 2,
      wifi: true,
      parking: false,
      hasBalcony: false,
      hasGarden: false,
      distance: 7,
      img: "https://i.pinimg.com/474x/4e/c9/03/4ec903570c531a641935198dc4862a08.jpg",
      ownerProfilePic: Drake,
      discountPercentages: getIsDiscount(),
    },
    {
      id: 7,
      name: "Zendaya's Zen Zone",
      location: "456 Serenity Street, Los Angeles, USA",
      bedrooms: 5,
      bathrooms: 2,
      features: ["Infinity Pool", "Yoga Garden", "Peaceful Pavilion"],
      canSmoke: true,
      petFriendly: false,
      pricePerNight: 600,
      pervPricePerNight : 600,
      ownerName: "Zendaya",
      rating: 4,
      wifi: true,
      parking: true,
      hasBalcony: false,
      hasGarden: true,
      distance: 1,
      img: "https://i.pinimg.com/474x/a7/b1/46/a7b146e6481f576fb6078a2605b6e984.jpg",
      ownerProfilePic: Zendaya,
      discountPercentages: getIsDiscount(),
    },
    {
      id: 8,
      name: "Leo's Lakeside Lodge",
      location: "789 Serene Shores, Lake Como, Italy",
      bedrooms: 1,
      bathrooms: 1,
      features: ["Lakeview Terrace", "Italian Charm", "Candlelit Cove"],
      canSmoke: false,
      petFriendly: false,
      pricePerNight: 300,
      pervPricePerNight : 300,
      ownerName: "Leonardo DiCaprio",
      rating: 1,
      wifi: false,
      parking: false,
      hasBalcony: false,
      hasGarden: false,
      distance: 15,
      img: "https://i.pinimg.com/474x/a0/f3/4e/a0f34e7bde96942187f100768cd45037.jpg",
      ownerProfilePic: LeonardoDiCaprio,
      discountPercentages: getIsDiscount(),
    },
    {
      id: 9,
      name: "Tupac's Tupendous Mansion",
      location: "101 Hip-Hop Avenue, Compton, USA",
      bedrooms: 7,
      bathrooms: 5,
      features: ["Rap Royalty Room", "Pool of Lyrics", "Hip-Hop Haven"],
      canSmoke: true,
      petFriendly: true,
      pricePerNight: 699,
      pervPricePerNight : 699,
      ownerName: "Tupac",
      rating: 5,
      wifi: true,
      parking: true,
      hasBalcony: true,
      hasGarden: true,
      distance: 420,
      img: "https://i.pinimg.com/474x/da/b6/5e/dab65e4080b3209725d35dc52a1d6b16.jpg",
      ownerProfilePic: Tupac,
      discountPercentages: getIsDiscount(),
    },
    {
      id: 10,
      name: "Marilyn's Marvelous Mansion",
      location: "789 Glamour Lane, Hollywood, USA",
      bedrooms: 3,
      bathrooms: 2,
      features: ["Glam Room", "Iconic Views", "Vintage Elegance"],
      canSmoke: false,
      petFriendly: true,
      pricePerNight: 500,
      pervPricePerNight : 500,
      ownerName: "Marilyn Monroe",
      rating: 4,
      wifi: true,
      parking: true,
      hasBalcony: true,
      hasGarden: false,
      distance: 10,
      img: "https://i.pinimg.com/474x/33/8a/48/338a4845bc13d9f4cc34e9d5a8116038.jpg",
      ownerProfilePic: MarilynMonroe,
      discountPercentages: getIsDiscount(),
    },
    {
      id: 11,
      name: "Nipsey's Haven",
      location: "123 Crenshaw Blvd, Los Angeles, USA",
      bedrooms: 3,
      bathrooms: 2,
      features: ["Private Pool", "Recording Studio", "Basketball Court"],
      canSmoke: false,
      petFriendly: true,
      pricePerNight: 499,
      pervPricePerNight : 499,
      ownerName: "Nipsey Hussle",
      rating: 4,
      wifi: true,
      parking: true,
      hasBalcony: false,
      hasGarden: true,
      distance: 13,
      img: "https://i.pinimg.com/474x/bb/4f/6f/bb4f6f0098c6c28ab194ddaeb14f58f6.jpg",
      ownerProfilePic: NipseyHussle,
      discountPercentages: getIsDiscount(),
    },
    {
      id: 12,
      name: "Billie's Retreat",
      location: "456 Melody Lane, London, UK",
      bedrooms: 4,
      bathrooms: 3,
      features: ["Music Studio", "Artistic Decor", "Greenhouse"],
      canSmoke: true,
      petFriendly: true,
      pricePerNight: 799,
      pervPricePerNight : 799,
      ownerName: "Billie Eilish",
      rating: 5,
      wifi: true,
      parking: true,
      hasBalcony: true,
      hasGarden: false,
      distance: 6,
      img: "https://i.pinimg.com/474x/3c/b7/af/3cb7afd7aa8da7bf31d92f7a147e632b.jpg",
      ownerProfilePic: Billie,
      discountPercentages: getIsDiscount(),
    },
    {
      id: 13,
      name: "Biggie's Mansion",
      location: "789 Notorious St, New York, USA",
      bedrooms: 5,
      bathrooms: 4,
      features: ["Versace Decor", "Indoor Basketball Court", "Home Theater"],
      canSmoke: true,
      petFriendly: true,
      pricePerNight: 899,
      pervPricePerNight : 899,
      ownerName: "Notorious BIG",
      rating: 4,
      wifi: true,
      parking: true,
      hasBalcony: true,
      hasGarden: true,
      distance: 5,
      img: "https://i.pinimg.com/474x/56/df/a1/56dfa1f96fb005764fcfef238d5d56d9.jpg",
      ownerProfilePic: NotoriousBIG,
      discountPercentages: getIsDiscount(),
    },
    {
      id: 14,
      name: "Shelby's Manor",
      location: "321 Small Heath, Birmingham, UK",
      bedrooms: 6,
      bathrooms: 3,
      features: ["Vintage Furnishings", "Secret Whiskey Stash", "Horse Stable"],
      canSmoke: true,
      petFriendly: false,
      pricePerNight: 599,
      pervPricePerNight : 599,
      ownerName: "Tommy Shelby",
      rating: 3,
      wifi: true,
      parking: false,
      hasBalcony: true,
      hasGarden: true,
      distance: 2,
      img: "https://i.pinimg.com/474x/a8/73/5a/a8735ade81d45c04c6ca5b0db688af76.jpg",
      ownerProfilePic: TommyShelby,
      discountPercentages: getIsDiscount(),
    },
    {
      id: 15,
      name: "Mercury's Haven",
      location: "234 Rock Street, London, UK",
      bedrooms: 5,
      bathrooms: 4,
      features: ["Grand Piano", "Gold Records Wall", "Artistic Mural"],
      canSmoke: false,
      petFriendly: true,
      pricePerNight: 699,
      pervPricePerNight : 699,
      ownerName: "Freddie Mercury",
      rating: 5,
      wifi: true,
      parking: true,
      hasBalcony: false,
      hasGarden: true,
      distance: 4,
      img: "https://i.pinimg.com/474x/51/4d/c7/514dc7f68cf6d9985d2021949059ca61.jpg",
      ownerProfilePic: FreddieMercury,
      discountPercentages: getIsDiscount(),
    },
    {
      id: 16,
      name: "Eastwood's Retreat",
      location: "567 Cowboy Lane, Los Angeles, USA",
      bedrooms: 3,
      bathrooms: 2,
      features: ["Western-themed Decor", "Home Theater", "Scenic View"],
      canSmoke: false,
      petFriendly: true,
      pricePerNight: 599,
      pervPricePerNight : 599,
      ownerName: "Clint Eastwood",
      rating: 4,
      wifi: true,
      parking: true,
      hasBalcony: false,
      hasGarden: true,
      distance: 6,
      img: "https://i.pinimg.com/474x/5e/b6/42/5eb642f93f7aed034e92510624115366.jpg",
      ownerProfilePic: ClintEastwood,
      discountPercentages: getIsDiscount(),
    },
    {
      id: 17,
      name: "Morrison's Haven",
      location: "89 Psychedelic Blvd, Los Angeles, USA",
      bedrooms: 4,
      bathrooms: 3,
      features: ["Lava Lamp Room", "Rock 'n' Roll Lounge", "Mystical Garden"],
      canSmoke: true,
      petFriendly: false,
      pricePerNight: 799,
      pervPricePerNight : 799,
      ownerName: "Jim Morrison",
      rating: 3,
      wifi: true,
      parking: true,
      hasBalcony: true,
      hasGarden: false,
      distance: 3,
      img: "https://i.pinimg.com/474x/01/92/48/0192489f020c925d63d6bdc691830405.jpg",
      ownerProfilePic: JimMorrison,
      discountPercentages: getIsDiscount(),
    },
    {
      id: 18,
      name: "Marley's Oasis",
      location: "876 Reggae Lane, Kingston, Jamaica",
      bedrooms: 5,
      bathrooms: 4,
      features: ["Reggae-themed Decor", "Rastafarian Garden", "Hammock Lounge"],
      canSmoke: true,
      petFriendly: true,
      pricePerNight: 899,
      pervPricePerNight : 899,
      ownerName: "Bob Marley",
      rating: 5,
      wifi: true,
      parking: true,
      hasBalcony: true,
      hasGarden: true,
      distance: 5,
      img: "https://i.pinimg.com/474x/f7/96/12/f7961202edaea745423d5017c9c433b2.jpg",
      ownerProfilePic: BobMarley,
      discountPercentages: getIsDiscount(),
    },
    {
      id: 19,
      name: "The Weeknd's Hideaway",
      location: "456 Starboy Street, Toronto, Canada",
      bedrooms: 6,
      bathrooms: 5,
      features: ["Glass Observatory", "Private Concert Stage", "Infinity Pool"],
      canSmoke: false,
      petFriendly: true,
      pricePerNight: 999,
      pervPricePerNight : 999,
      ownerName: "The Weeknd",
      rating: 4,
      wifi: true,
      parking: true,
      hasBalcony: true,
      hasGarden: false,
      distance: 7,
      img: "https://i.pinimg.com/474x/a1/bf/8c/a1bf8c57eb582d2db69b8c917a853599.jpg",
      ownerProfilePic: TheWeeknd,
      discountPercentages: getIsDiscount(),
    },
    {
      id: 20,
      name: "Downey's Mansion",
      location: "789 Hollywood Blvd, Los Angeles, USA",
      bedrooms: 7,
      bathrooms: 6,
      features: ["Iron Man Memorabilia", "Movie Theater", "Indoor Pool"],
      canSmoke: false,
      petFriendly: false,
      pricePerNight: 1299,
      pervPricePerNight : 1299,
      ownerName: "Robert Downey, Jr.",
      rating: 5,
      wifi: true,
      parking: true,
      hasBalcony: true,
      hasGarden: true,
      distance: 2,
      img: "https://i.pinimg.com/474x/06/c5/8c/06c58ca760b107cce0a0092705d728dd.jpg",
      ownerProfilePic: RobertDowneyJr,
      discountPercentages: getIsDiscount(),
    },
    {
      id: 21,
      name: "Capone's Penthouse",
      location: "192 Gangster Ave, Chicago, USA",
      bedrooms: 4,
      bathrooms: 3,
      features: ["Speakeasy Bar", "Casino Room", "City Skyline View"],
      canSmoke: true,
      petFriendly: false,
      pricePerNight: 899,
      pervPricePerNight : 899,
      ownerName: "Al Capone",
      rating: 4,
      wifi: true,
      parking: true,
      hasBalcony: true,
      hasGarden: false,
      distance: 3,
      img: "https://i.pinimg.com/474x/75/83/2e/75832e8c6d18176c062bb11128f80649.jpg",
      ownerProfilePic: AlCapone,
      discountPercentages: getIsDiscount(),
    },
    {
      id: 22,
      name: "Heisenberg's Hideout",
      location: "308 Blue Sky Lane, Albuquerque, USA",
      bedrooms: 3,
      bathrooms: 2,
      features: ["Chemistry Lab", "RV Garage", "Desert Landscape"],
      canSmoke: true,
      petFriendly: true,
      pricePerNight: 749,
      pervPricePerNight : 749,
      ownerName: "Walter White (Heisenberg)",
      rating: 5,
      wifi: true,
      parking: true,
      hasBalcony: false,
      hasGarden: true,
      distance: 1,
      img: "https://i.pinimg.com/474x/26/33/d0/2633d052d5b6a378f0b561f46c48ed17.jpg",
      ownerProfilePic: WalterWhite,
      discountPercentages: getIsDiscount(),
    },
    {
      id: 23,
      name: "Rocky's Retreat",
      location: "123 Boxing Ring Rd, New York, USA",
      bedrooms: 2,
      bathrooms: 1,
      features: ["Home Gym", "Music Studio", "Cityscape Balcony"],
      canSmoke: false,
      petFriendly: true,
      pricePerNight: 499,
      pervPricePerNight : 499,
      ownerName: "A$AP Rocky",
      rating: 4,
      wifi: true,
      parking: true,
      hasBalcony: true,
      hasGarden: false,
      distance: 5,
      img: "https://i.pinimg.com/474x/c4/13/45/c413451c4122ad754a9c3a8c2073c19a.jpg",
      ownerProfilePic: A$apRocky,
      discountPercentages: getIsDiscount(),
    },
    {
      id: 24,
      name: "Winehouse's Villa",
      location: "456 Jazz Lane, London, UK",
      bedrooms: 5,
      bathrooms: 4,
      features: [
        "Jazz-themed Decor",
        "Private Recording Studio",
        "English Garden",
      ],
      canSmoke: true,
      petFriendly: true,
      pricePerNight: 899,
      pervPricePerNight : 899,
      ownerName: "Amy Winehouse",
      rating: 3,
      wifi: true,
      parking: true,
      hasBalcony: true,
      hasGarden: true,
      distance: 4,
      img: "https://i.pinimg.com/474x/91/3c/4f/913c4f9804ad65181653d0ced0411567.jpg",
      ownerProfilePic: AmyWinehouse,
      discountPercentages: getIsDiscount(),
    },
    {
      id: 25,
      name: "Mbappé's Mansion",
      location: "789 Soccer Street, Paris, France",
      bedrooms: 6,
      bathrooms: 5,
      features: ["Football Pitch", "Trophy Room", "Eiffel Tower View"],
      canSmoke: false,
      petFriendly: true,
      pricePerNight: 1199,
      pervPricePerNight : 1199,
      ownerName: "Kylian Mbappé",
      rating: 5,
      wifi: true,
      parking: true,
      hasBalcony: true,
      hasGarden: true,
      distance: 2,
      img: "https://i.pinimg.com/474x/2a/09/3c/2a093c305bfb15bcf587da11facfb940.jpg",
      ownerProfilePic: KylianMbappé,
      discountPercentages: getIsDiscount(),
    },
    {
      id: 26,
      name: "Jordan's Court",
      location: "23 Slam Dunk Lane, Chicago, USA",
      bedrooms: 4,
      bathrooms: 3,
      features: [
        "Basketball Court",
        "Championship Trophies",
        "Air Jordan Collection",
      ],
      canSmoke: false,
      petFriendly: true,
      pricePerNight: 999,
      pervPricePerNight : 999,
      ownerName: "Michael Jordan",
      rating: 5,
      wifi: true,
      parking: true,
      hasBalcony: false,
      hasGarden: true,
      distance: 1,
      img: "https://i.pinimg.com/474x/fa/4a/5b/fa4a5baa9210cc48edea5231ad4ccc89.jpg",
      ownerProfilePic: MichaelJordan,
      discountPercentages: getIsDiscount(),
    },
    {
      id: 27,
      name: "Ray's Melody Cottage",
      location: "456 Soulful Street, New Orleans, USA",
      bedrooms: 3,
      bathrooms: 2,
      features: ["Piano Lounge", "Jazz Festival Tickets", "Soul Food Kitchen"],
      canSmoke: false,
      petFriendly: true,
      pricePerNight: 799,
      pervPricePerNight : 799,
      ownerName: "Ray Charles",
      rating: 4,
      wifi: true,
      parking: true,
      hasBalcony: true,
      hasGarden: false,
      distance: 2,
      img: "https://i.pinimg.com/474x/83/11/1e/83111e490a1ac45115a807fa67652e09.jpg",
      ownerProfilePic: RayCharles,
      discountPercentages: getIsDiscount(),
    },
    {
      id: 28,
      name: "Shady's Hideaway",
      location: "313 Slim Street, Detroit, USA",
      bedrooms: 2,
      bathrooms: 1,
      features: [
        "Recording Studio",
        "Rap Battle Arena",
        "Private Jet Landing Strip",
      ],
      canSmoke: true,
      petFriendly: true,
      pricePerNight: 899,
      pervPricePerNight : 899,
      ownerName: "Slim Shady (Eminem)",
      rating: 5,
      wifi: true,
      parking: true,
      hasBalcony: true,
      hasGarden: false,
      distance: 3,
      img: "https://i.pinimg.com/474x/94/ba/92/94ba9272c491327fd3e29f074a70dc15.jpg",
      ownerProfilePic: SlimShady,
      discountPercentages: getIsDiscount(),
    },
    {
      id: 29,
      name: "Cudi Glamorous Getaway",
      location: "567 Man On The Moon , Hollywood, USA",
      bedrooms: 3,
      bathrooms: 2,
      features: ["Dazzling Stage", "Fashionista Closet", "Diamond Pool"],
      canSmoke: false,
      petFriendly: false,
      pricePerNight: 899,
      pervPricePerNight: 899,
      ownerName: "Kid Cudi",
      rating: 4,
      wifi: true,
      parking: true,
      hasBalcony: true,
      hasGarden: false,
      distance: 5,
      img: "https://i.pinimg.com/564x/ba/ff/66/baff6672f22eaaf1a461a0537ca03049.jpg",
      ownerProfilePic: KidCudi,
      discountPercentages: getIsDiscount(),
    },
    {
      id: 30,
      name: "Johnny's Cruise Cabin",
      location: "789 Action Ave, Hollywood, USA",
      bedrooms: 1,
      bathrooms: 1,
      features: ["Action Movie Theater", "Speedboat Dock", "Stuntman Studio"],
      canSmoke: false,
      petFriendly: false,
      pricePerNight: 599,
      pervPricePerNight: 599,
      ownerName: "Johnny Depp",
      rating: 3,
      wifi: true,
      parking: true,
      hasBalcony: true,
      hasGarden: false,
      distance: 8,
      img: "https://i.pinimg.com/564x/e9/f7/66/e9f7669617dd4f9c3e6d36b400a8a0bb.jpg",
      ownerProfilePic: JohnnyDepp,
      discountPercentages: getIsDiscount(),
    },
    {
      id: 31,
      name: "Malone's Songbird Sanctuary",
      location: "456 Melody Lane, Nashville, USA",
      bedrooms: 4,
      bathrooms: 3,
      features: ["Country Music Studio", "Songwriting Nook", "Swifties Lounge"],
      canSmoke: false,
      petFriendly: true,
      pricePerNight: 799,
      pervPricePerNight: 799,
      ownerName: "Post Malone",
      rating: 5,
      wifi: true,
      parking: true,
      hasBalcony: true,
      hasGarden: true,
      distance: 3,
      img: "https://i.pinimg.com/564x/5e/cf/b0/5ecfb02c0de9ae5f65f18ca19f8fe7e9.jpg",
      ownerProfilePic: PostMalone,
      discountPercentages: getIsDiscount(),
    },
    {
      id: 32,
      name: "Oneal's Glam Haven",
      location: "789 Fashion Blvd, Beverly Hills, USA",
      bedrooms: 6,
      bathrooms: 4,
      features: ["Fashion Runway", "Luxury Spa", "Crystal Chandelier"],
      canSmoke: false,
      petFriendly: false,
      pricePerNight: 1299,
      pervPricePerNight: 1299,
      ownerName: "Shaquille Oneal",
      rating: 4,
      wifi: true,
      parking: true,
      hasBalcony: true,
      hasGarden: false,
      distance: 4,
      img: "https://i.pinimg.com/564x/d4/d1/0b/d4d10bc8e75c811bacc4529022c0e30a.jpg",
      ownerProfilePic: ShaquilleOneal,
      discountPercentages: getIsDiscount(),
    },
    {
      id: 33,
      name: "Smiths' Tech Retreat",
      location: "123 Innovation Lane, Seattle, USA",
      bedrooms: 5,
      bathrooms: 3,
      features: ["Smart Home System", "Private Tech Lab", "Infinity Tech Pool"],
      canSmoke: false,
      petFriendly: false,
      pricePerNight: 1499,
      pervPricePerNight: 1499,
      ownerName: "Will Smith",
      rating: 5,
      wifi: true,
      parking: true,
      hasBalcony: true,
      hasGarden: false,
      distance: 1,
      img: "https://i.pinimg.com/736x/21/cc/c5/21ccc5f54c848982e688b5443e717ec0.jpg",
      ownerProfilePic: WillSmith,
      discountPercentages: getIsDiscount(),
    },
    {
      id: 34,
      name: "Kurt's Castle",
      location: "789 Monarchy Lane, London, UK",
      bedrooms: 8,
      bathrooms: 6,
      features: ["Royal Ballroom", "Crown Jewel Collection", "Knight's Guard"],
      canSmoke: false,
      petFriendly: false,
      pricePerNight: 1999,
      pervPricePerNight: 1999,
      ownerName: "Kurt Cobain",
      rating: 5,
      wifi: true,
      parking: true,
      hasBalcony: true,
      hasGarden: true,
      distance: 2,
      img: "https://i.pinimg.com/564x/de/42/cb/de42cb1eb8a66e7c7dacdb3baf7d19ae.jpg",
      ownerProfilePic: KurtCobain,
      discountPercentages: getIsDiscount(),
    },
    {
      id: 35,
      name: "Musk's Mars Oasis",
      location: "456 SpaceX Street, Mars",
      bedrooms: 2,
      bathrooms: 1,
      features: ["Rocket Launch Pad", "Zero-Gravity Lounge", "Martian Garden"],
      canSmoke: false,
      petFriendly: false,
      pricePerNight: 9999,
      pervPricePerNight: 9999,
      ownerName: "Elon Musk",
      rating: 5,
      wifi: true,
      parking: true,
      hasBalcony: true,
      hasGarden: false,
      distance: 1000000,
      img: "https://i.pinimg.com/564x/8e/de/88/8ede889d8e2be958c9667300c6468aec.jpg",
      ownerProfilePic: ElonMusk,
      discountPercentages: getIsDiscount(),
    },
    {
      id: 36,
      name: "Ocean's Hideout",
      location: "567 Thor Lane, Asgard",
      bedrooms: 3,
      bathrooms: 2,
      features: ["God of Thunder Room", "Mjolnir Collection", "Asgardian Garden"],
      canSmoke: false,
      petFriendly: false,
      pricePerNight: 1499,
      pervPricePerNight: 1499,
      ownerName: "Frank Ocean",
      rating: 4,
      wifi: true,
      parking: true,
      hasBalcony: true,
      hasGarden: true,
      distance: 9999,
      img: "https://i.pinimg.com/564x/96/0a/1f/960a1f95cedc9a7b3c0b63dcdbe6503f.jpg",
      ownerProfilePic: FrankOcean,
      discountPercentages: getIsDiscount(),
    },
    {
      id: 37,
      name: "McCartneys' Cozy Cabin",
      location: "123 Log Cabin Lane, Woods, USA",
      bedrooms: 2,
      bathrooms: 1,
      features: ["Rustic Fireplace", "Nature Trail", "Woodland Retreat"],
      canSmoke: false,
      petFriendly: true,
      pricePerNight: 799,
      pervPricePerNight: 799,
      ownerName: "Paul McCartney",
      rating: 4,
      wifi: true,
      parking: true,
      hasBalcony: false,
      hasGarden: true,
      distance: 10,
      img: "https://i.pinimg.com/564x/ed/bc/80/edbc8059c82bc3f6144310b6f0c3d542.jpg",
      ownerProfilePic: PaulMcCartney,
      discountPercentages: getIsDiscount(),
    },
    {
      id: 38,
      name: "Ricch's Caribbean Retreat",
      location: "789 Tropical Paradise, Caribbean",
      bedrooms: 4,
      bathrooms: 3,
      features: ["Beachfront Villa", "Private Yacht Dock", "Tropical Gardens"],
      canSmoke: false,
      petFriendly: false,
      pricePerNight: 1899,
      pervPricePerNight: 1899,
      ownerName: "Roddy Ricch",
      rating: 5,
      wifi: true,
      parking: true,
      hasBalcony: true,
      hasGarden: true,
      distance: 100,
      img: "https://i.pinimg.com/564x/d4/d1/0b/d4d10bc8e75c811bacc4529022c0e30a.jpg",
      ownerProfilePic: RoddyRicch,
      discountPercentages: getIsDiscount(),
    },
    {
      id: 39,
      name: "Scott's Wilderness Lodge",
      location: "456 Tranquil Trail, Montana, USA",
      bedrooms: 3,
      bathrooms: 2,
      features: ["Mountain View Deck", "Wildlife Safari", "Oprah's Book Club Room"],
      canSmoke: false,
      petFriendly: true,
      pricePerNight: 1499,
      pervPricePerNight: 1499,
      ownerName: "Travis Scott",
      rating: 5,
      wifi: true,
      parking: true,
      hasBalcony: true,
      hasGarden: true,
      distance: 15,
      img: "https://i.pinimg.com/564x/d7/c4/7b/d7c47b23c36fe0c26104afd3e6a4bb1e.jpg",
      ownerProfilePic: TravisScott,
      discountPercentages: getIsDiscount(),
    },
    {
      id: 40,
      name: "Sinatra's Eco Retreat",
      location: "789 Green Valley, Amazon Rainforest , USA",
      bedrooms: 5,
      bathrooms: 4,
      features: ["Canopy Walkway", "Eco-Friendly Living", "Jungle Adventure"],
      canSmoke: false,
      petFriendly: true,
      pricePerNight: 1599,
      pervPricePerNight: 1599,
      ownerName: "Frank Sinatra",
      rating: 4,
      wifi: true,
      parking: true,
      hasBalcony: true,
      hasGarden: true,
      distance: 20,
      img: "https://i.pinimg.com/564x/92/7d/18/927d1801b440ea87732b775c97dd6a3b.jpg",
      ownerProfilePic: FrankSinatra,
      discountPercentages: getIsDiscount(),
    },
  
  ];

  const getDiscountPrice = () => {
    for(const hotDeal of cozyHouses ){
      if(hotDeal.discountPercentages > 0){
        let newPricePerNight = parseInt(hotDeal.pervPricePerNight - (hotDeal.pervPricePerNight * (hotDeal.discountPercentages / 100)));
        hotDeal.pricePerNight = newPricePerNight;
      }
    }
  }

  
  let count = 0;
  let keyCount = 0;
  useEffect(() => {
    getDiscountPrice();
    const addHouses = async () => {
      try {
        const updatedCozyHouses = [];      
        for (const house of cozyHouses) {
          const updateImg = async () => {
            try{

              const storageRef = storage.ref().child(`house_images/${house.id}.jpg`);
              await storageRef.putString(house.img, 'data_url');
             // Get the download URL for the uploaded image
              const imageUrl = await storageRef.getDownloadURL();
             // Create a new house object with the image URL
             cozyHouses[count] = { ...house, img: imageUrl };

            }catch(error){
              console.error("cant update img" , error);
            }
            updateImg();
          } 
          console.log("house : "  , house);
          const response = await fetch(`${housesDatabaseURL}.json`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(cozyHouses[count++]),
          });
       
          if (!response.ok) {
            throw new Error('Failed to add house to the database');
          }

          const responseData = await response.json();

          // Update the local house object with the generated ID
          const houseWithId = { ...cozyHouses[count], id: responseData.name };
           updatedCozyHouses.push(houseWithId);

          // Fetch request to update the 'id' field in the local database
          await fetch(`${housesDatabaseURL}/${responseData.name}.json`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: responseData.name , key :  keyCount ++ }),
          });
        }
        console.log(count);
        count++;
        setHouses(updatedCozyHouses);
        // console.log(updatedCozyHouses);
        // console.log(houses);
      } catch (error) {
        console.error(error);
      }
    };

    // Call the addHouses function to execute the asynchronous operation
    addHouses();
    setTimeout(() => {
      setIsLoading(false);
    }, 4000); // 2000 milliseconds = 2 seconds
  }, []);
  return (
    <div>{isLoading ? 'Loading...' : 'Finish Loading'}</div>
  )
}