import React from "react";
import { useNavigate } from "react-router-dom";

const InfoPage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex items-center justify-center">
      <div>
        <h1 className="text-2xl font-bold mb-4">Info Page</h1>
        <button
          className="bg-blue-500 text-white p-2 rounded"
          onClick={() => navigate("/tab/1")}
        >
          Go back to Tab Page
        </button>
      </div>
    </div>
  );
};

export default InfoPage;
