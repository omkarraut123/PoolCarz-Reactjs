import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Login from './components/Login';
import { Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div >      
        {/* <img src={logo} className="App-logo" alt="logo" />         */}
        <NavBar />
      <Routes>
        <Route path='/' element={<Login />}/>
      </Routes>
    <Footer />
    </div>
  );
}

export default App;
