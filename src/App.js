
import "./App.css";
import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Containers/Home/Home"

function App() {
  return (
    <div className="container-fluid App ">
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
