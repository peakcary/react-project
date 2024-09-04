// src/HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1 onClick={() => navigate('/info')}>Home Page (Click Title to Show Info)</h1>
      <p>Welcome to the Home Page.</p>
    </div>
  );
};

export default HomePage;
