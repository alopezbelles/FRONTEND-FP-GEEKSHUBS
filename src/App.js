
import "./App.css";
import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Containers/Home/Home";
// import Header from "./Components/Header/Header";
import Header2 from "./Components/Header2/Header2";
import Login from "./Containers/Login/Login";


function App() {
  return (
    <div className="App ">
      <BrowserRouter>
      
        <Header2/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
