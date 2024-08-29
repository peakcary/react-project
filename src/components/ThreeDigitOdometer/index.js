import React, { useState, useEffect, useRef, useCallback } from 'react';
import Odometer from 'react-odometerjs';
import 'odometer/themes/odometer-theme-default.css';

const ThreeDigitOdometer = () => {
  const [odometerValues, setOdometerValues] = useState([0, 0, 0]);  // 三个独立数字的初始值
  const [rolling, setRolling] = useState(false);
  const [targetValues, setTargetValues] = useState([5, 3, 7]); // 目标值设为 0-9
  const [speed, setSpeed] = useState(1000);  // 滚动速度

  const intervalRef = useRef([]);

  const startRolling = useCallback(() => {
    intervalRef.current = [
      setInterval(() => {
        setOdometerValues((prevValues) => [
          (prevValues[0] + 1) % 10, // 限制在 0-9 之间
          (prevValues[1] + 1) % 10,
          (prevValues[2] + 1) % 10,
        ]);
      }, speed),
    ];
  }, [speed]);

  const stopRolling = useCallback(() => {
    intervalRef.current.forEach((interval) => clearInterval(interval));
    setOdometerValues(targetValues);  // 停止时设置每个数字为目标值
  }, [targetValues]);

  useEffect(() => {
    if (rolling) {
      startRolling();
    } else {
      stopRolling();
    }
    return () => stopRolling();
  }, [rolling, startRolling, stopRolling]);

  const handleStart = () => {
    setRolling(true);
  };

  const handleStop = () => {
    setRolling(false);
  };

  const handleTargetChange = (index, value) => {
    const newTargets = [...targetValues];
    newTargets[index] = (parseInt(value, 10) % 10) || 0; // 限制输入值为 0-9
    setTargetValues(newTargets);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex space-x-4">
        {/* 三个独立的 Odometer */}
        <Odometer value={odometerValues[0]} format="d" duration={speed / 1000} />
        <Odometer value={odometerValues[1]} format="d" duration={speed / 1000} />
        <Odometer value={odometerValues[2]} format="d" duration={speed / 1000} />
      </div>

      {/* 控制按钮 */}
      <div className="mt-4">
        <button onClick={handleStart} className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2">
          Start
        </button>
        <button onClick={handleStop} className="px-4 py-2 bg-red-500 text-white rounded-md">
          Stop
        </button>
      </div>

      {/* 输入目标值 */}
      <div className="mt-4 flex space-x-4">
        {odometerValues.map((value, index) => (
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
        <label htmlFor="speed" className="mr-2">Speed:</label>
        <input
          id="speed"
          type="number"
          value={speed}
          onChange={(e) => setSpeed(parseInt(e.target.value, 10))}
          className="px-2 py-1 border rounded-md"
        />
      </div>
    </div>
  );
};

export default ThreeDigitOdometer;