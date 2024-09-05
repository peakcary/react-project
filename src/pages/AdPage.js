// src/AdPage.js
import React from 'react';

const AdPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">广告页面</h1>
      <p className="text-lg mb-8">这是一个广告页面内容。</p>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => window.history.back()} // 返回上一个页面
      >
        返回
      </button>
    </div>
  );
};

export default AdPage;
