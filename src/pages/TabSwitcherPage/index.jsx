import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const TabSwitcherPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-gray-200">
        <div className="flex justify-around">
          <Link to="/tab/page1">Page 1</Link>
          <Link to="/tab/page2">Page 2</Link>
          <Link to="/tab/page3">Page 3</Link>
        </div>
      </div>
    </div>
  );
};

export default TabSwitcherPage;
