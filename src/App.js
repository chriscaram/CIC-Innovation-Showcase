import React, { useState } from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import "./App.css";
import {
  ProjectPage,
  DemoSite,
} from "../src/pages/index";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
        <Route path='/' exact element={<DemoSite />} />
        <Route path='/project' exact element={<ProjectPage />} />
        <Route path='/demo' exact element={<DemoSite />} />
        </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;