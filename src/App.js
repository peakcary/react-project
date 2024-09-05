// src/App.js
import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import InfoPage from './pages/InfoPage';
import LoadingPage from './pages/LoadingPage';
import HomePageV2 from './pages/HomePageV2';
import InfoPageV2 from './pages/InfoPageV2'; 
import LoadingPageV2 from './pages/LoadingPageV2';
import AdPage from './pages/AdPage'; // 导入广告页面组件
 

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true); // 控制全局加载状态
  const [isVersion2, setIsVersion2] = useState(false); // 用于判断版本

  useEffect(() => {
    // 检查本地缓存以确定是否需要显示加载页面
    const hasVisited = localStorage.getItem('hasVisited');
    const isV2 = location.pathname.startsWith('/v2');

    if (!hasVisited) {
      // 如果没有缓存，则设置加载状态为 true，并保存缓存
      setIsLoading(true);
      localStorage.setItem('hasVisited', 'true');
    } else {
      // 如果有缓存，跳过加载页面
      setIsLoading(false);
    }

    setIsVersion2(isV2);
  }, [location]);

  useEffect(() => {
    if (location.pathname === '/') {
      const isV2 = location.pathname.startsWith('/v2');
      navigate(isV2 ? '/v2/home' : '/home', { replace: true });
    }
  }, [location, navigate]);

  // 如果正在全局加载，渲染相应版本的 LoadingPage
  if (isLoading) {
    return isVersion2 ? <LoadingPageV2 /> : <LoadingPage />;
  }

  return (
    <div className="flex flex-col min-h-screen relative">
      <Routes>
        {/* 1.0 版本路由 */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/page1" element={<div><h1>Page 1</h1></div>} />
        <Route path="/page2" element={<div><h1>Page 2</h1></div>} />

        {/* 2.0 版本路由 */}
        <Route path="/v2/home" element={<HomePageV2 />} />
        <Route path="/v2/info" element={<InfoPageV2 />} />
        <Route path="/v2/page1" element={<div><h1>Page 1 (Version 2.0)</h1></div>} />
        <Route path="/v2/page2" element={<div><h1>Page 2 (Version 2.0)</h1></div>} />

        {/* 广告页面和其他无 tab 页面的路由 */}
        <Route path="/ad" element={<AdPage />} />
        <Route path="/no-tab-page1" element={<div><h1>No Tab Page 1</h1></div>} />
        <Route path="/no-tab-page2" element={<div><h1>No Tab Page 2</h1></div>} />
      </Routes>
    </div>
  );
};

export default App;
