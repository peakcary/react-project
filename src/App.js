import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Settings from './pages/Settings';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
        <div className="bottom-tabs">
          <Link to="/" className="tab">Home</Link>
          <Link to="/about" className="tab">About</Link>
          <Link to="/settings" className="tab">Settings</Link>
        </div>
      </div>
    </Router>
  );
}

export default App;
