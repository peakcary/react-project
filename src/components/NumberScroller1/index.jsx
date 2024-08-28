import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

const NumberScroller = () => {
  const [numbers, setNumbers] = useState([0, 0, 0]); // 初始三位数为 [0, 0, 0]

  const generateRandomNumber = () => Math.floor(Math.random() * 10);

  // 定义每个数字的 spring 钩子
  const [props0, api0] = useSpring(() => ({ transform: 'translateY(0%)' }));
  const [props1, api1] = useSpring(() => ({ transform: 'translateY(0%)' }));
  const [props2, api2] = useSpring(() => ({ transform: 'translateY(0%)' }));

  // 启动滚动效果
  const startRolling = () => {
    const newNumbers = [generateRandomNumber(), generateRandomNumber(), generateRandomNumber()];

    // 开始每个数字的滚动动画
    api0.start({
      from: { transform: 'translateY(100%)' },
      to: { transform: 'translateY(0%)' },
      onRest: () => setNumbers((prev) => [newNumbers[0], prev[1], prev[2]]),
    });

    api1.start({
      from: { transform: 'translateY(100%)' },
      to: { transform: 'translateY(0%)' },
      onRest: () => setNumbers((prev) => [prev[0], newNumbers[1], prev[2]]),
    });

    api2.start({
      from: { transform: 'translateY(100%)' },
      to: { transform: 'translateY(0%)' },
      onRest: () => setNumbers((prev) => [prev[0], prev[1], newNumbers[2]]),
    });
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex space-x-4 text-4xl font-bold">
        {/* 数字滚动容器 */}
        <div className="relative h-16 w-10 overflow-hidden">
          <animated.div style={props0} className="absolute top-0 left-0 w-full text-center">
            {numbers[0]}
          </animated.div>
        </div>
        <div className="relative h-16 w-10 overflow-hidden">
          <animated.div style={props1} className="absolute top-0 left-0 w-full text-center">
            {numbers[1]}
          </animated.div>
        </div>
        <div className="relative h-16 w-10 overflow-hidden">
          <animated.div style={props2} className="absolute top-0 left-0 w-full text-center">
            {numbers[2]}
          </animated.div>
        </div>
      </div>

      <button onClick={startRolling} className="px-4 py-2 bg-blue-500 text-white rounded">
        Start Rolling
      </button>
    </div>
  );
};

export default NumberScroller;
