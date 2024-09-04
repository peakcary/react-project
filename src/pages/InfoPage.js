// src/InfoPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const InfoPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Info Page</h1>
      <button onClick={() => navigate('/home')}>Back</button>
    </div>
  );
};

export default InfoPage;
