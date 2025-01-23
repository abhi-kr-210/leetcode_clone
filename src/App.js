
import React from 'react';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './component/Home'
import Dashboard from './component/Dashboard';
import Questionpage from './component/Questionpage';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/dash" element={<Dashboard/>}/>
    <Route path="/question-details" element={<Questionpage/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
