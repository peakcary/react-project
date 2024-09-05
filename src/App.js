// src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import LoadingPage from './pages/LoadingPage';
import HomePage from './pages/HomePage';
import InfoPage from './pages/InfoPage';
import LoadingPageV2 from './pages/LoadingPageV2';
import HomePageV2 from './pages/HomePageV2';
import InfoPageV2 from './pages/InfoPageV2';
import TabsWrapper from './pages/TabsWrapper'; // 创建并引入新的 TabsWrapper 组件
import './App.css';


const App = () => {
  const [isLoading, setIsLoading] = useState(!localStorage.getItem('hasVisited')); 
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        // localStorage.setItem('hasVisited', 'true');
        setIsLoading(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  const isV2 = location.pathname.startsWith('/v2');

  useEffect(() => {
    if (location.pathname === '/') {
      navigate(isV2 ? '/v2/home' : '/home', { replace: true });
    }
  }, [location, isV2, navigate]);

  if (isLoading) {
    return isV2 ? <LoadingPageV2 /> : <LoadingPage />;
  }

  return (
    <div className="flex flex-col min-h-screen relative">
      <div className="flex-1 mb-16">
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
        </Routes>
      </div>
      <TabsWrapper />
    </div>
  );
};

export default App;