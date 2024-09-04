// src/Tabs.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
 

const Tabs = () => {
  const navigate = useNavigate();

  return (
    <div className="tabs">
      <button onClick={() => navigate('/home')}>Home</button>
      <button onClick={() => navigate('/page1')}>Page 1</button>
      <button onClick={() => navigate('/page2')}>Page 2</button>
    </div>
  );
};

export default Tabs;
