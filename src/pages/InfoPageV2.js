// src/InfoPageV2.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const InfoPageV2 = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Info Page (Version 2.0)</h1>
      <button onClick={() => navigate('/v2/home')}>Back to Home</button>
    </div>
  );
};

export default InfoPageV2;
