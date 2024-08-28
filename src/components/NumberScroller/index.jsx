import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import * as d3Ease from 'd3-ease';

const NumberScroller = () => {
  const [isRolling, setIsRolling] = useState(false);
  const [targetNumber, setTargetNumber] = useState(0);
  const [inputNumber, setInputNumber] = useState("");
  const [numbers, setNumbers] = useState([0, 0, 0]); // 初始三位数为 [0, 0, 0]

  // 使用随机数生成器
  const getRandomNumber = () => Math.floor(Math.random() * 10);

  // 调整动画的缓动和参数
  const smoothConfig = { 
    tension: 180, 
    friction: 30, 
    easing: d3Ease.easeCubicOut 
  };

  // 使用 react-spring 的动画钩子
  const props0 = useSpring({ number: numbers[0], config: smoothConfig });
  const props1 = useSpring({ number: numbers[1], config: smoothConfig });
  const props2 = useSpring({ number: numbers[2], config: smoothConfig });

  useEffect(() => {
    let interval;
    if (isRolling) {
      interval = setInterval(() => {
        setNumbers([getRandomNumber(), getRandomNumber(), getRandomNumber()]);
      }, 70); // 滚动速度可以调得更快
    } else if (!isRolling && targetNumber !== 0) {
      const targetArray = targetNumber.toString().padStart(3, '0').split('').map(Number);
      setNumbers(targetArray);
    }

    return () => clearInterval(interval);
  }, [isRolling, targetNumber]);

  // 启动滚动
  const startRolling = () => {
    setIsRolling(true);
  };

  // 停止滚动并设置目标数字
  const stopRolling = () => {
    setIsRolling(false);
    setTargetNumber(parseInt(inputNumber, 10));
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex space-x-4 text-4xl font-bold">
        <animated.div>{props0.number.to((n) => Math.floor(n))}</animated.div>
        <animated.div>{props1.number.to((n) => Math.floor(n))}</animated.div>
        <animated.div>{props2.number.to((n) => Math.floor(n))}</animated.div>
      </div>

      <div className="space-x-2">
        <button onClick={startRolling} className="px-4 py-2 bg-blue-500 text-white rounded">
          Start Rolling
        </button>
        <button onClick={stopRolling} className="px-4 py-2 bg-red-500 text-white rounded">
          Stop Rolling
        </button>
      </div>

      <input
        type="text"
        value={inputNumber}
        onChange={(e) => setInputNumber(e.target.value)}
        placeholder="Enter a number"
        className="border rounded px-2 py-1"
      />
    </div>
  );
};

export default NumberScroller;
