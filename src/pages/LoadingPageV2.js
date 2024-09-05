// src/LoadingPageV2.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoadingPageV2 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/v2/home'); // 3秒后导航到V2主页
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div>
      <h1>Loading... (Version 2.0)</h1>
    </div>
  );
};

export default LoadingPageV2;
