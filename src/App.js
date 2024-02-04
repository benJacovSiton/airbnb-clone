import { useState } from 'react';
import Login from './pages/Login';
import Logup from './pages/Logup';
import Cozy from './components/Cozy';
import Layout from './layout/Layout';
import Welcome from './pages/Welcome';
import Chat_ from './components/Chat_';
import Revision from './components/Revision';
import Residences from './components/Residences';
import HotDeals from './components/genres/HotDeals';
import TopCharts from './components/genres/TopCharts';
import UserRevisions from './components/UserRevisions';
import LastChance from './components/genres/lastChance/LastChance';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import CancellationSummary from './components/cancelReservation/CancellationSummary';
import UsersEmotions from './components/residencesReview/usersEmotions/UsersEmotions';
import ResidencesUsersEmotions from './components/residencesReview/usersEmotions/ResidencesUsersEmotions';
import FilterBy from './components/filter/FilterBy';
import SearchBy from './components/searchBy/SearchBy';
import LocateDates from './components/locateDates/LocateDates';
import FakeReviews from './components/fakeData/FakeReviews';
import ResidencesAccountData from './components/fakeData/ResidencesAccountData';
import MostBeloved from './components/genres/MostBeloved';
import UserReviews from './components/userReviews/UserReviews';
function App() {
  const [orderedHouse , setOrderedHouse] = useState({});

  const handleSetOrderedHouse = (house) => {
    console.log("handleSetOrderedHouse : ",house);
    setOrderedHouse(house);
  }
  
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/logup" element={<Logup />} />
      <Route path="/welcome" element={<Welcome/>}/>
      <Route path="/residences"element={<Layout> <Residences handleSetOrderedHouse={handleSetOrderedHouse}/> </Layout> }/>
      <Route path="/cozy" element={<Layout> <Cozy /> </Layout>}/>
      <Route path='/revision' element={<Layout><Revision orderedHouse={orderedHouse}/></Layout>}/>
      <Route path="/chat/:revisionId" element={<Layout><Chat_ /></Layout>}/>
      <Route path="/:user/resvisions" element={<Layout><UserRevisions /></Layout>}/>
      <Route path="/:userName/reviews" element={<Layout><UserReviews /></Layout>}/>
      <Route path="/explore/hotDeals" element={<Layout><HotDeals handleSetOrderedHouse={handleSetOrderedHouse} /></Layout>}/>
      <Route path="/explore/topCharts" element={<Layout><TopCharts handleSetOrderedHouse={handleSetOrderedHouse} /></Layout>}/>
      <Route path="/explore/lastChance" element={<Layout><LastChance handleSetOrderedHouse={handleSetOrderedHouse} /></Layout>}/>
      <Route path="/explore/mostBeloved" element={<Layout><MostBeloved handleSetOrderedHouse={handleSetOrderedHouse} /></Layout>}/>
      <Route path="/:userRevisionId/revisionCancellation" element={<Layout><CancellationSummary /></Layout>}/>
      <Route path="/:userEmail/:residenceId/review" element={<Layout><ResidencesUsersEmotions /></Layout>}/>
      <Route path="/:residenceId/:emotion/list" element={<Layout><UsersEmotions /></Layout>}/>
      <Route path="/residences/filterBy/:filterThrow" element={<Layout><FilterBy handleSetOrderedHouse={handleSetOrderedHouse} /></Layout>}/>
      <Route path="/residences/searchBy/:searchValue" element={<Layout><SearchBy handleSetOrderedHouse={handleSetOrderedHouse} /></Layout>}/>
      <Route path="/residences/:checkIn/to/:checkOut" element={<Layout><LocateDates handleSetOrderedHouse={handleSetOrderedHouse} /></Layout>}/>
      <Route path="/fakeReviews" element={<Layout><FakeReviews /></Layout>}/>
      <Route path="/residences/:key/:name/images" element={<Layout><ResidencesAccountData handleSetOrderedHouse={handleSetOrderedHouse} /></Layout>}/>
    </Routes>
  </Router>
  );
}

export default App;
