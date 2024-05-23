import './App.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PNG from './components/Products/PNG/PNG';
import Presets from './components/Products/Presets/Presets';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import Subscribe from './components/Login/Subscribe';
import BackgroundDesc from './components/Products/Backgrounds/BackgroundDesc';
import Backgrounds from './components/Products/Backgrounds/Backgrounds';
import Prices from './components/Prices/Prices';
import Faq from './components/Information/Faq';
import Licence from './components/Information/Licence';
import CookiesPolicies from './components/Information/CookiesPolicies';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path='/PNG' element={<PNG />} />
        <Route path='/presets' element={<Presets />} /> 
        <Route path='/contact' element={<Contact />} /> 
        <Route path='/login' element={<Login />} /> 
        <Route path='/signup' element={<Subscribe />} /> 
        <Route path='/background/*' element={<BackgroundDesc />} /> 
        <Route path='/backgrounds' element={<Backgrounds />} /> 
        <Route path='/prices' element={<Prices />} /> 
        <Route path='/faq' element={<Faq />} /> 
        <Route path='/licence' element={<Licence />} /> 
        <Route path='/cookies_policies' element={<CookiesPolicies />} /> 
          </Routes>
    </BrowserRouter>
  );
}

export default App;
