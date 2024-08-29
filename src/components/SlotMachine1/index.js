import React, { useState, useEffect } from "react";
import { useSpring, animated } from '@react-spring/web';
import "odometer/themes/odometer-theme-default.css"; // Odometer 主题

const SlotMachine = () => {
  const [value, setValue] = useState([0, 0, 0]);  // 三个独立的数字
  const [targetValue, setTargetValue] = useState([null, null, null]); // 目标数字
  const [isRolling, setIsRolling] = useState(false);
  const [speeds, setSpeeds] = useState([100, 150, 200]); // 每个数字的滚动速度
  const [fontColor, setFontColor] = useState("#000000"); // 字体颜色

  // 启动滚动
  const startRolling = () => {
    setIsRolling(true);
    setTargetValue([null, null, null]);  // 重置目标数字
  };

  // 停止滚动并设置到指定数字
  const stopAtTarget = (input) => {
    const formattedInput = input.padStart(3, '0');  // 确保输入是三位数字
    setTargetValue(formattedInput.split("").map(Number));
  };

  useEffect(() => {
    const intervals = [];
    if (isRolling) {
      // 为每个数字设置单独的定时器和速度
      for (let i = 0; i < 3; i++) {
        intervals[i] = setInterval(() => {
          setValue(prevValue => {
            const newValue = [...prevValue];
            newValue[i] = (Math.floor(Math.random() * 10)); // 随机设置每个数字的滚动
            return newValue;
          });
        }, speeds[i]); // 使用不同的速度滚动
      }
    }

    // 当目标值达到时停止滚动
    if (targetValue.every(num => num !== null)) {
      setIsRolling(false);
      setValue(targetValue);
    }

    return () => intervals.forEach(interval => clearInterval(interval));
  }, [isRolling, speeds, targetValue]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Slot Machine Number Rolling</h2>
      
      <div style={{ fontSize: '50px', fontWeight: 'bold', color: fontColor }}>
        {value.map((digit, index) => (
          <animated.div key={index}>
            {digit}
          </animated.div>
        ))}
      </div>
      
      <div style={{ marginTop: '20px' }}>
        <button onClick={startRolling} className="bg-blue-500 text-white px-4 py-2 rounded">启动滚动</button>
        <button onClick={() => stopAtTarget(prompt("输入三位数来停止滚动"))} className="bg-red-500 text-white px-4 py-2 ml-4 rounded">输入数字停止</button>
      </div>
      
      <div style={{ marginTop: '20px' }}>
        <label>
          字体颜色:
          <input type="color" value={fontColor} onChange={(e) => setFontColor(e.target.value)} className="ml-2 p-1"/>
        </label>
      </div>
    </div>
  );
};

export default SlotMachine;