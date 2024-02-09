import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Photos from "./components/photos"; // Make sure the import matches the file name
import Designs from "./components/Designs"; // Import the Designs component
import Header from "./components/Header";
import Menu from "./components/Menu";
import About from "./components/About"; // Ensure you have this component
import Contact from "./components/Contact"; // Ensure you have this component

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/designs" element={<Designs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
