// src/HomePageV2.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePageV2 = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1 onClick={() => navigate('/v2/info')}>Home Page (Version 2.0) - Click to Show Info</h1>
      <p>Welcome to the Version 2.0 Home Page.</p>
    </div>
  );
};

export default HomePageV2;
