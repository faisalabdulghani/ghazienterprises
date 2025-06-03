import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header'
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Services from './pages/services/Services';
import ContactUs from './pages/contact/ContactUs';
import AboutUs from './pages/about/AboutUs'


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Services" element={<Services />} />
        <Route path="ContactUs" element={<ContactUs />} />
        <Route path="AboutUs" element={<AboutUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
