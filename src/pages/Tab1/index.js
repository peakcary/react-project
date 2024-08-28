import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css"; 

const Tab1 = () => {
  const navigate = useNavigate();
 
  return (
    <div className="flex items-center justify-center h-full">
      <div>
        <h1 className="text-2xl font-bold mb-4">Tab 1</h1>
        <button
          className="bg-blue-500 text-white p-2 rounded"
          onClick={() => navigate("/info")}
        >
          Go to Info Page
        </button>
      </div> 
    </div>
  );
};

export default Tab1;
