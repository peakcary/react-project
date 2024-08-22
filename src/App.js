import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <div className="flex flex-col items-center justify-center h-screen overflow-hidden">
        <div className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
        <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white flex justify-around p-4">
          <Link to="/" className="flex flex-col items-center text-center text-sm sm:text-base hover:text-yellow-500">
            <span className="block">Home</span>
          </Link>
          <Link to="/about" className="flex flex-col items-center text-center text-sm sm:text-base hover:text-yellow-500">
            <span className="block">About</span>
          </Link>
          <Link to="/settings" className="flex flex-col items-center text-center text-sm sm:text-base hover:text-yellow-500">
            <span className="block">Settings</span>
          </Link>
        </div>
      </div>
    </Router>
  );
}

export default App;
