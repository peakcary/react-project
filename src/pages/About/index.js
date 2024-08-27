import React, { useState } from 'react';
import ThreeDigitCycler from '../../components/ThreeDigitCycler';

const App = () => {
  const [startCycling, setStartCycling] = useState(false);
  const [stopCycling, setStopCycling] = useState(false);
  const [stopAtNumbers, setStopAtNumbers] = useState(null);

  const handleStart = () => {
    setStopCycling(false);  // 确保未停止
    setStartCycling(true);  // 启动循环
  };

  const handleStop = () => {
    setStartCycling(false);  // 停止循环
    setStopCycling(true);    // 停止动画
  };

  const handleStopAtNumber = (num1, num2, num3) => {
    setStartCycling(false);  // 停止循环
    setStopCycling(false);   // 停止动画
    setStopAtNumbers([num1, num2, num3]);  // 设置要停止的数字
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <ThreeDigitCycler
        startCycling={startCycling}
        stopCycling={stopCycling}
        stopAtNumbers={stopAtNumbers}
      />
      <div className="space-x-4">
        <button
          onClick={handleStart}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Start
        </button>
        <button
          onClick={handleStop}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Stop
        </button>
      </div>
      <div className="space-x-4">
        <button
          onClick={() => handleStopAtNumber(1, 2, 3)}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Stop at 123
        </button>
        <button
          onClick={() => handleStopAtNumber(4, 5, 6)}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Stop at 456
        </button>
        <button
          onClick={() => handleStopAtNumber(7, 8, 9)}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Stop at 789
        </button>
      </div>
    </div>
  );
};

export default App;
