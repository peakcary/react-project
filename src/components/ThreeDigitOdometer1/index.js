import React, { useState, useEffect, useRef, useCallback, forwardRef, useImperativeHandle } from 'react';
import Odometer from 'react-odometerjs';
import 'odometer/themes/odometer-theme-default.css';

// 封装的独立组件
const ThreeDigitOdometer = forwardRef(({ initialSpeed = 1000 }, ref) => {
  const [odometerValues, setOdometerValues] = useState([0, 0, 0]);  // 三个独立数字的初始值
  const [rolling, setRolling] = useState(false);
  const [targetValues, setTargetValues] = useState([0, 0, 0]); // 目标值设为 0-9
  const [speed, setSpeed] = useState(initialSpeed);  // 滚动速度由外部控制

  const intervalRef = useRef([]);

  const startRolling = useCallback(() => {
    intervalRef.current.forEach(interval => clearInterval(interval)); // 清除已有的定时器
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
    intervalRef.current.forEach(interval => clearInterval(interval));
    setOdometerValues(targetValues);  // 停止时设置每个数字为目标值
  }, [targetValues]);

  useImperativeHandle(ref, () => ({
    start: () => setRolling(true),
    stop: () => setRolling(false),
    setTargetValues: (values) => setTargetValues(values),
    setSpeed: (newSpeed) => setSpeed(newSpeed) // 允许外部设置速度
  }));

  useEffect(() => {
    if (rolling) {
      startRolling();
    } else {
      stopRolling();
    }
    return () => stopRolling(); // 清理定时器
  }, [rolling, startRolling, stopRolling]);

  return (
    <div className="flex space-x-4">
      <Odometer value={odometerValues[0]} format="d" duration={speed / 1000} />
      <Odometer value={odometerValues[1]} format="d" duration={speed / 1000} />
      <Odometer value={odometerValues[2]} format="d" duration={speed / 1000} />
    </div>
  );
});

export default ThreeDigitOdometer;