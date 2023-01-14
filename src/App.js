
import "./App.css";
// import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Containers/Home/Home";
import Header2 from "./Components/Header2/Header2";
import Login from "./Containers/Login/Login";
import Spots from "./Containers/Spots/Spots";
import About from "./Containers/About/About";
import SpotInfo from "./Containers/SpotInfo/SpotInfo";
import Profile from "./Containers/Profile/Profile";



function App() {
  return (
    <div className="App ">
      <BrowserRouter>
      
        <Header2/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/spots" element={<Spots />} />
          <Route path="/about" element={<About />} />
          <Route path="/spotinfo" element={<SpotInfo />} />
          <Route path="/profile" element={<Profile />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
