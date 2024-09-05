// src/InfoPage.js
import React, { useState, useEffect } from 'react';
import TabsWrapper from './TabsWrapper';
import LoadingOverlay from './LoadingOverlay';

const InfoPage = () => {
  const [isLoading, setIsLoading] = useState(false); // 局部控制加载状态

  useEffect(() => {
    // 模拟页面数据加载
    const timer = setTimeout(() => {
      setIsLoading(false); // 数据加载完成，隐藏 loading
    }, 2000);

    return () => clearTimeout(timer); // 清除定时器
  }, []);

  return (
    <div className="relative">
      {/* 如果正在加载，则显示 LoadingOverlay */}
      {isLoading && <LoadingOverlay />}
      
      {/* 页面内容部分 */}
      <div className={`p-4 ${isLoading ? 'hidden' : ''}`}>
        <h1>Info Page</h1>
        <p>这是信息页面内容。</p>
      </div>

      {/* 页面加载完成后显示 TabsWrapper */}
      {!isLoading && <TabsWrapper />}
    </div>
  );
};

export default InfoPage;
