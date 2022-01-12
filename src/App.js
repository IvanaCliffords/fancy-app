import React, { useState } from "react";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Add from './pages/Add';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Footer from "./Components/Footer/Footer";


function App() {



  return (
    <div style={{ height: '100%', position: "relative" }}>
      <Router>
        <Header style={{ position: "absolute", zIndex: "999" }} />
        <main style={{ marginTop: '100px', position: "relative", zIndex: "-100" }}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/add" element={<Add />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          {/* <Footer style={{ position: "absolute", bottom: "0", zIndex: "5000" }} /> */}


        </main>
      </Router>

    </div>
  )
}






export default App;
