// src/TabsWrapper.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import Tabs from './Tabs';
import TabsV2 from './TabsV2';

const TabsWrapper = () => {
  const location = useLocation();
  const isV2 = location.pathname.startsWith('/v2');
  const isLoadingPage = location.pathname === '/' || location.pathname === '/v2';

  // 如果是加载页面，不显示 Tabs
  if (isLoadingPage) {
    return null;
  }

  // 根据版本显示不同的 Tabs
  return isV2 ? <TabsV2 /> : <Tabs />;
};

export default TabsWrapper;
