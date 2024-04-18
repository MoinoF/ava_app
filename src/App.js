import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import Prices from './components/Prices/Prices';
import Packages from './components/Packages/Packages';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import Subscribe from './components/Login/Subscribe';
import Page404 from './components/Page404/Page404';
import Admin from './components/Admin/Admin';
import '@fortawesome/fontawesome-free/css/all.css';



function App() {
  return (
    <BrowserRouter className="App">

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/gallery/*' element={<Gallery />} />
        <Route path='/prices' element={<Prices />} />
        <Route path='/packages/*' element={<Packages />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/subscribe' element={<Subscribe />} />
        <Route path='/admin/*' element={<Admin />} />
        <Route path='*' element={<Page404 />} />

      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
