import React, { useState, useEffect, useRef } from "react";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";

import ThreeDigitOdometer from "../../components/ThreeDigitOdometer";
import ThreeDigitOdometer1 from "../../components/ThreeDigitOdometer1";

const Tab3 = () => {
  const [value, setValue] = useState(1234);

  useEffect(() => {
    const timeoutId = setTimeout(() => setValue(4321), 2000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const odometerRef = useRef();
  const [targetValues, setTargetValues] = useState([3, 5, 7]); // 默认目标值
  const [speed, setSpeed] = useState(1000); // 初始滚动速度

  const handleStart = () => {
    odometerRef.current.start();
  };

  const handleStop = () => {
    odometerRef.current.setTargetValues(targetValues); // 设置目标值
    odometerRef.current.stop();
  };

  const handleSpeedChange = (e) => {
    const newSpeed = parseInt(e.target.value, 10);
    setSpeed(newSpeed);
    odometerRef.current.setSpeed(newSpeed); // 更新滚动速度
  };

  const handleTargetChange = (index, value) => {
    const newTargets = [...targetValues];
    newTargets[index] = parseInt(value, 10) % 10 || 0; // 限制输入值为 0-9
    setTargetValues(newTargets);
  };

  return (
    <div className="flex items-center justify-center h-full">
      <Odometer value={value} format="(.ddd),dd" />
      <ThreeDigitOdometer></ThreeDigitOdometer>

      {/* 三位数字滚动的组件 */}
      <ThreeDigitOdometer1 ref={odometerRef} initialSpeed={speed} />

      {/* 控制按钮 */}
      <div className="mt-4">
        <button
          onClick={handleStart}
          className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2"
        >
          Start
        </button>
        <button
          onClick={handleStop}
          className="px-4 py-2 bg-red-500 text-white rounded-md"
        >
          Stop
        </button>
      </div>

      {/* 输入目标值 */}
      <div className="mt-4 flex space-x-4">
        {targetValues.map((value, index) => (
          <input
            key={index}
            type="number"
            value={targetValues[index]}
            onChange={(e) => handleTargetChange(index, e.target.value)}
            className="px-2 py-1 border rounded-md"
            placeholder={`Target ${index + 1}`}
            min="0"
            max="9"
          />
        ))}
      </div>

      {/* 调整滚动速度 */}
      <div className="mt-4">
        <label htmlFor="speed" className="mr-2">
          Speed (ms):
        </label>
        <input
          id="speed"
          type="number"
          value={speed}
          onChange={handleSpeedChange}
          className="px-2 py-1 border rounded-md"
        />
      </div>
    </div>
  );
};

export default Tab3;
