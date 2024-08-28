import React from "react";

const LoadingPage = ({ progress }) => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div>
        <h1 className="text-2xl font-bold mb-4">Loading...</h1>
        <div className="w-64 bg-gray-300 rounded-full h-4">
          <div
            className="bg-blue-500 h-4 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-center mt-2">{progress}%</p>
      </div>
    </div>
  );
};

export default LoadingPage;
