import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Home from './pages/Home';
import { Route,Routes } from 'react-router-dom';
import Services from './pages/Services';
function App() {

  return ( 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Services />} />
      </Routes>
  );
}

export default App;
