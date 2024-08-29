import React, { useState, useEffect, useRef } from 'react';
import Odometer from 'react-odometerjs';
import 'odometer/themes/odometer-theme-default.css';

const formatNumber = (number) => {
  return number.toString().padStart(3, '0');
};

const ControlledOdometer = ({ start, stopNumber, speed, direction = 'up' }) => {
  const [number, setNumber] = useState(1);
  const intervalRef = useRef(null);

  const getNextNumber = (currentNumber) => {
    if (direction === 'up') {
      return currentNumber < 999 ? currentNumber + 1 : 1; // 循环递增
    } else {
      return currentNumber > 1 ? currentNumber - 1 : 999; // 循环递减
    }
  };

  useEffect(() => {
    if (start) {
      intervalRef.current = setInterval(() => {
        setNumber((prevNumber) => getNextNumber(prevNumber));
      }, speed); // 控制滚动速度
    }

    if (!start && stopNumber !== null) {
      clearInterval(intervalRef.current);
      setNumber(stopNumber); // 停止时设置为指定的数字
    }

    return () => clearInterval(intervalRef.current); // 清理定时器
  }, [start, stopNumber, speed, direction]);

  return (
    <div>
      <Odometer value={formatNumber(number)} format="ddd" duration={speed / 2} />
    </div>
  );
};

export default ControlledOdometer;