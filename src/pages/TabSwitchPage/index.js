import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const TabSwitchPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 p-4">
        <Outlet /> {/* 用于渲染当前激活的子页面 */}
      </div>
      <div className="fixed bottom-0 w-full flex justify-around bg-gray-200 p-4">
        <NavLink 
          to="/tab/1"
          className={({ isActive }) => isActive ? 'text-blue-500' : ''}
        >
          Tab 1
        </NavLink>
        <NavLink 
          to="/tab/2"
          className={({ isActive }) => isActive ? 'text-blue-500' : ''}
        >
          Tab 2
        </NavLink>
        <NavLink 
          to="/tab/3"
          className={({ isActive }) => isActive ? 'text-blue-500' : ''}
        >
          Tab 3
        </NavLink>
      </div>
    </div>
  );
};

export default TabSwitchPage;
