import React, { useState } from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import "./App.css";
import {
  Home,
  AboutUs,
  Contact,
} from "../src/pages/index";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' exact element={<AboutUs />} />
        <Route path='/contact' exact element={<Contact />} />
        </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;