import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header'
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Services from './pages/services/Services';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Services" element={<Services />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
