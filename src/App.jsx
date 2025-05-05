import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import HomePage from './Pages/HomePage'
import { useEffect } from 'react';

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
     <HomePage/>
    </>
  )
}

export default App
