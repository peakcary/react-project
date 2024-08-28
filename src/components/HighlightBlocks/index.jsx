import React, { useState, useEffect } from 'react';
import { useSprings, animated } from '@react-spring/web';

const elements = [1, 2, 3, 4, 5, 6];

export default function HighlightBlocks() {
  const [highlightIndex, setHighlightIndex] = useState(-1); // 默认停留在 -1（不高亮）
  const [speed, setSpeed] = useState(1000); // 默认速度为 1000ms
  const [isLooping, setIsLooping] = useState(true);

  const springs = useSprings(
    elements.length,
    elements.map((_, i) => ({
      backgroundColor: highlightIndex === i ? '#FBBF24' : '#E5E7EB', // 高亮时黄色，否则灰色
      config: { duration: speed }, // 控制动画速度
    }))
  );

  // 循环高亮动画
  useEffect(() => {
    if (!isLooping) return; // 停止循环

    const interval = setInterval(() => {
      setHighlightIndex(prev => (prev + 1) % elements.length); // 依次高亮元素
    }, speed);

    return () => clearInterval(interval);
  }, [speed, isLooping]);

  // 模拟外部停止循环并固定在指定元素上的输入
  const stopOnElement = (index) => {
    setIsLooping(false); // 停止循环
    setHighlightIndex(index); // 高亮指定元素
  };

  return (
    <div className="flex flex-wrap justify-center space-x-4">
      {springs.map((props, index) => (
        <animated.div
          key={index}
          className="w-16 h-16 rounded-lg"
          style={props}
        />
      ))}

      <div className="flex flex-col items-center mt-6">
        <button 
          className="bg-blue-500 text-white py-2 px-4 rounded mb-4"
          onClick={() =>{setIsLooping(true);setSpeed(1000)} } // 加速
        >
          Speed Up
        </button>
        <button 
          className="bg-blue-500 text-white py-2 px-4 rounded mb-4"
          onClick={() => setSpeed(speed + 200)} // 减速
        >
          Slow Down
        </button>
        <button 
          className="bg-green-500 text-white py-2 px-4 rounded mb-4"
          onClick={() => stopOnElement(3)} // 停止并固定在指定的第4个元素上
        >
          Stop at Element 4
        </button>
      </div>
    </div>
  );
}
