// OdometerExample.js
import React, { useState, useEffect } from 'react';
import Odometer from 'react-odometerjs';
import 'odometer/themes/odometer-theme-default.css'; // 引入默认样式

const OdometerExample = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    // 模拟值的变化
    const interval = setInterval(() => {
      setValue(Math.floor(Math.random() * 10000)); // 随机生成一个值
    }, 2000);

    return () => clearInterval(interval); // 组件卸载时清除定时器
  }, []);

  return (
    <div style={{ fontSize: '2rem', textAlign: 'center', marginTop: '50px' }}>
      <Odometer value={value} format="d" duration={500} />
      <p>当前值: {value}</p>
    </div>
  );
};

export default OdometerExample;
