import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Legales from './pages/Legales';
import CustomNavbar from './components/Navbar';
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from './components/Footer';

function App() {

  return (
    <>
      <CustomNavbar />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Legales" element={<Legales />} />
      </Routes>

      <Footer />
    </>

  );
}


export default App;
