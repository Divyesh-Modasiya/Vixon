import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import HomePage from './Pages/HomePage'
import { useEffect } from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import ProductPage from './Pages/ProductPage';
import GalleryPage from './Pages/GalleryPage';
import EbrochurePage from './Pages/EbrochurePage';
import ContactPage from './Pages/ContactPage';
import Header from './Component/HomeComponent/Header';
import LuxuryFooter from './Component/HomeComponent/LuxuryFooter';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Animations occur only once
      mirror: false // Animations don't replay when scrolling up
    });
  }, []);
  
  return (
    <>
    <Header/>
     <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/about' element={<AboutPage/>} />
      <Route path='/product' element={<ProductPage/>} />
      <Route path='/gallery' element={<GalleryPage/>} />
      <Route path='/ebrochure' element={<EbrochurePage/>} />
      <Route path='/contact' element={<ContactPage/>} />
     </Routes>
     <LuxuryFooter/>
    </>
  )
}

export default App
