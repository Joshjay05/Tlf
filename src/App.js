import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// import Volunteer from "./Pages/Volunteer";
// import Home from "./Homepage";
import About from "./About/About";

import Donate from "./Pages/Donate";
import Events from "./Pages/VolunteerPage";
import Homepage from "./Homepage";
import  AboutPage from "./About/AboutPage";
import VolunteerPage from "./Pages/VolunteerPage";
function App() {
  return (
    <div>
      
     
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/volunteer" element={<VolunteerPage />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/events" element={<Events />} />
          {/* <Route path="/Contact" element={Contact}/> */}
          <Route exact path="/about" element={<About />} />
{/* <Route exact path="/"   */}
        <Route exact path="/about-us" element={<AboutPage />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
