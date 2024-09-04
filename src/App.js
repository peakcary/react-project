// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingPage from './pages/LoadingPage';
import HomePage from './pages/HomePage';
import InfoPage from './pages/InfoPage';
import Tabs from './pages/Tabs';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LoadingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/page1" element={<div><h1>Page 1</h1></div>} />
          <Route path="/page2" element={<div><h1>Page 2</h1></div>} />
        </Routes>
        <Tabs />
      </div>
    </Router>
  );
};

export default App;
