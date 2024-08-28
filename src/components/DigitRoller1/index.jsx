import React, { useState, useEffect, useRef } from 'react';
import { useSprings, animated } from '@react-spring/web';
import { easeCubicInOut } from 'd3-ease';

const DigitRoller = ({ targetNumbers = [0, 0, 0], rolling = false, duration = 3000 }) => {
  const digits = [...Array(10).keys()];
  const height = 40; // 每个数字的高度

  // 使用 useSprings 来管理每个数字的滚动状态
  const [springs, api] = useSprings(3, index => ({
    from: { y: 0 },
    to: { y: 0 },
    config: { tension: 120, friction: 30 },
  }));

  const targetRef = useRef([0, 0, 0]); // 保存目标数字
  const rollingRef = useRef(false); // 保留滚动状态

  const [isRolling, setIsRolling] = useState(false); // 控制是否在滚动

  useEffect(() => {
    if (rolling && !isRolling) {
      // 启动滚动逻辑
      setIsRolling(true); // 防止多次启动
      rollingRef.current = true;

      api.start(index => {
        const rounds = 5; // 固定滚动圈数
        const targetDigit = targetRef.current[index];
        const totalDistance = rounds * digits.length * height + targetDigit * height;

        return {
          from: { y: springs[index].y.get() }, // 从当前位置继续滚动
          to: { y: totalDistance },
          config: { duration: duration + index * 500, easing: easeCubicInOut },
          reset: true,
        };
      });
    } else if (!rolling && isRolling) {
      // 停止滚动逻辑
      api.start(index => {
        const targetDigit = targetRef.current[index];
        const currentY = springs[index].y.get();
        const currentDigit = Math.floor((currentY % (digits.length * height)) / height);

        const direction = targetDigit >= currentDigit ? 1 : -1; // 判断滚动方向
        const distanceToTarget =
          direction === 1
            ? (targetDigit - currentDigit + 10) % 10
            : (currentDigit - targetDigit + 10) % 10;

        return {
          to: { y: currentY + direction * distanceToTarget * height }, // 顺势滚动到目标
          config: { duration: 500, easing: easeCubicInOut },
        };
      });

      setIsRolling(false); // 允许再次点击启动
      rollingRef.current = false;
    }
  }, [rolling, api, springs, duration, isRolling]);

  useEffect(() => {
    targetRef.current = targetNumbers; // 更新目标数字
  }, [targetNumbers]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      {springs.map((style, index) => (
        <div
          key={index}
          style={{
            width: '40px',
            height: '40px', // 只显示一个数字的高度
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
              transform: style.y.to(y => `translateY(-${y % (digits.length * height)}px)`), // 修正为 0-360 之间的 y 值
            }}
          >
            {/* 循环数字，确保滚动连续 */}
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
  );
};

export default DigitRoller;
