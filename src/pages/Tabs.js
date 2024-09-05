// src/Tabs.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tabs = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md flex justify-around p-2 border-t border-gray-200 z-50">
      <button className="flex-1 text-center py-2" onClick={() => navigate('/home')}>Home</button>
      <button className="flex-1 text-center py-2" onClick={() => navigate('/page1')}>Page 1</button>
      <button className="flex-1 text-center py-2" onClick={() => navigate('/page2')}>Page 2</button>
    </div>
  );
};

export default Tabs;
