import React from "react";
import { useNavigate } from "react-router-dom";

import NumberScroller from '../../components/NumberScroller1'

const Tab2 = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-full">
      <div>
        <NumberScroller />
        <h1 className="text-2xl font-bold mb-4">Tab 3</h1>
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

export default Tab2;
