// src/LoadingPage.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoadingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home'); // 3秒后导航到主页
    }, 3000);
    return () => clearTimeout(timer); // 清除计时器
  }, [navigate]);

  return (
    <div>
      <h1>Loading...</h1>
    </div>
  );
};

export default LoadingPage;
