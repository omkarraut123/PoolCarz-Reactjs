import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Login from './components/Login';
import { Routes,Route } from 'react-router-dom';
import ShowRide from './components/ShowRide';
import ShowallRides from './components/ShowallRides';
import OfferRide from './components/OfferRide';
function App() {
  return (
    <div >      
        {/* <img src={logo} className="App-logo" alt="logo" />         */}
    <NavBar />
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/show_rides' element={<ShowRide />} />
          <Route path='/show_rides/all' element={<ShowallRides />} />
          <Route path='/offer_ride' element={<OfferRide />} />
        </Routes>
    <Footer />
    </div>
  );
}

export default App;
