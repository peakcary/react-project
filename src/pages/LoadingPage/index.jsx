import React, { useEffect, useState } from 'react';

const LoadingPage = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          // Delay the state update to the next event loop tick
          setTimeout(() => onComplete(), 0);
        }
        return prev + 10;
      });
    }, 300);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <p>Loading... {progress}%</p>
        <div className="w-full bg-gray-300 rounded-full">
          <div
            className="bg-blue-600 h-4 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
