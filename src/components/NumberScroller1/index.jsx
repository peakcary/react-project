import React, { useState } from 'react';
import { useSprings, animated } from '@react-spring/web';
import { easeCubicInOut } from 'd3-ease';

const DigitRoller = () => {
  const digits = [...Array(10).keys()]; // 数字0-9
  const [targetNumbers, setTargetNumbers] = useState([1, 2, 2]); // 目标数字
  const [inputValues, setInputValues] = useState([1, 1, 1]); // 输入的数字值
  const [springs, api] = useSprings(3, index => ({
    from: { y: 0 },
    to: { y: 0 },
    config: { tension: 120, friction: 30 },
  }));
  const [rolling, setRolling] = useState(false); // 是否在滚动

  // 启动滚动的函数
  const startRolling = () => {
    setTargetNumbers(inputValues);
    setRolling(true);

    api.start(index => {
      const targetDigit = targetNumbers[index];
      const rounds = 5; // 固定滚动5圈
      const totalDistance = rounds * digits.length * 40 + targetDigit * 40; // 计算滚动距离

      return {
        from: { y: 0 },
        to: { y: totalDistance },
        config: { duration: 3000 + index * 500, easing: easeCubicInOut },
        reset: true,
        onRest: () => {
          if (index === 2) { // 当最后一位数字滚动完成
            setRolling(false); // 停止滚动
          }
        },
      };
    });
  };

  // 停止滚动的函数并使数字停在目标数字上
  const stopRolling = () => {
    setRolling(false);

    api.start(index => {
      const targetDigit = targetNumbers[index];
      const currentY = springs[index].y.get(); // 获取当前的 y 值
      const digitHeight = 40;
      const targetY = targetDigit * digitHeight; // 计算目标位置
      const currentOffset = currentY % (digits.length * digitHeight);
      const distanceToTarget = targetY - currentOffset;

      // 计算需要滚动的总距离（包括当前滚动距离）
      const totalDistance = distanceToTarget + (distanceToTarget < 0 ? digits.length * digitHeight : 0);

      return {
        from: { y: currentY },
        to: { y: currentY + totalDistance },
        config: { duration: 500, easing: easeCubicInOut },
        reset: true,
      };
    });
  };

  // 更新输入值的函数
  const handleInputChange = (index, value) => {
    const newValues = [...inputValues];
    newValues[index] = Number(value);
    setInputValues(newValues);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        {springs.map((style, index) => (
          <div
            key={index}
            style={{
              width: '40px',
              height: '40px',
              overflow: 'hidden',
              border: '1px solid gray',
              margin: '0 10px',
              position: 'relative',
            }}
          >
            <animated.div
              style={{
                position: 'absolute',
                willChange: 'transform',
                transform: style.y.to(y => `translateY(-${y % (digits.length * 40)}px)`),
              }}
            >
              {[...digits, ...digits, ...digits].map((digit, i) => (
                <div
                  key={i}
                  style={{
                    height: '40px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '32px',
                  }}
                >
                  {digit}
                </div>
              ))}
            </animated.div>
          </div>
        ))}
      </div>

      <div style={{ marginBottom: '20px' }}>
        {inputValues.map((value, index) => (
          <input
            key={index}
            type="number"
            min="0"
            max="9"
            value={value}
            onChange={(e) => handleInputChange(index, e.target.value)}
            style={{ width: '40px', textAlign: 'center', margin: '0 5px' }}
          />
        ))}
      </div>

      <button onClick={startRolling} className="px-4 py-2 bg-blue-500 text-white rounded">
        Start Rolling
      </button>
      <button onClick={stopRolling} className="px-4 py-2 bg-red-500 text-white rounded mt-4">
        Stop Rolling
      </button>
    </div>
  );
};

export default DigitRoller;
