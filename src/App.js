// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingPage from './pages/LoadingPage';
import HomePage from './pages/HomePage';
import InfoPage from './pages/InfoPage';
import LoadingPageV2 from './pages/LoadingPageV2';
import HomePageV2 from './pages/HomePageV2';
import InfoPageV2 from './pages/InfoPageV2';
import TabsWrapper from './pages/TabsWrapper'; // 创建并引入新的 TabsWrapper 组件
import './App.css';

const App = () => {
  return (
    <Router>
     <div className="flex flex-col min-h-screen relative"> {/* 使用 Tailwind CSS 的 Flexbox 和最小高度类 */}
     <div className="flex-1 mb-16"> {/* 内容区域，保留足够的底部空间用于 Tabs */}
          <Routes>
            {/* 1.0 版本路由 */}
            <Route path="/" element={<LoadingPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/info" element={<InfoPage />} />
            <Route path="/page1" element={<div><h1>Page 1</h1></div>} />
            <Route path="/page2" element={<div><h1>Page 2</h1></div>} />

            {/* 2.0 版本路由 */}
            <Route path="/v2" element={<LoadingPageV2 />} />
            <Route path="/v2/home" element={<HomePageV2 />} />
            <Route path="/v2/info" element={<InfoPageV2 />} />
            <Route path="/v2/page1" element={<div><h1>Page 1 (Version 2.0)</h1></div>} />
            <Route path="/v2/page2" element={<div><h1>Page 2 (Version 2.0)</h1></div>} />
          </Routes>
        </div>
        {/* 使用 TabsWrapper 动态选择 Tabs */}
        <TabsWrapper />
      </div>
    </Router>
  );
};

export default App;
