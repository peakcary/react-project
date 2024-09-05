// src/LoadingPageV2.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoadingPageV2 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // 模拟加载过程，2秒后自动跳转
    const timer = setTimeout(() => {
      navigate('/v2/home'); // 加载完成后跳转到 2.0 版本主页
    }, 2000);

    return () => clearTimeout(timer); // 清除定时器
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold">Loading Version 2.0...</h1>
    </div>
  );
};

export default LoadingPageV2;
