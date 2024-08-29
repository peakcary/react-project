import React, { useState, useEffect } from 'react';
import Odometer from 'react-odometerjs';
import 'odometer/themes/odometer-theme-default.css';

const RandomOdometer = () => {
  const [number, setNumber] = useState(0);

  // 生成随机三位数
  const getRandomNumber = () => {
    return Math.floor(100 + Math.random() * 900); // 三位数范围：100-999
  };

  // 点击按钮更新随机数字
  const handleRoll = () => {
    setNumber(getRandomNumber());
  };

  useEffect(() => {
    // 设置初始值
    setNumber(getRandomNumber());
  }, []);

  return (
    <div>
      <Odometer value={number} format="ddd" duration={1000} />
      <button onClick={handleRoll}>Roll</button>
    </div>
  );
};

export default RandomOdometer;