import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

const ThreeDigitCycler = ({ startCycling, stopCycling, stopAtNumbers }) => {
  const [isCycling, setIsCycling] = useState(false);
  const [stopAt, setStopAt] = useState([null, null, null]);

  // 每个数字的 spring 动画
  const spring0 = useSpring({
    from: { number: 0 },
    to: async (next) => {
      while (isCycling) {
        await next({ number: (prev) => (prev + 1) % 10 });
      }
    },
    reset: true,
    config: { tension: 200, friction: 30 },
  });

  const spring1 = useSpring({
    from: { number: 0 },
    to: async (next) => {
      while (isCycling) {
        await next({ number: (prev) => (prev + 1) % 10 });
      }
    },
    reset: true,
    config: { tension: 200, friction: 30 },
  });

  const spring2 = useSpring({
    from: { number: 0 },
    to: async (next) => {
      while (isCycling) {
        await next({ number: (prev) => (prev + 1) % 10 });
      }
    },
    reset: true,
    config: { tension: 200, friction: 30 },
  });

  // 启动循环
  useEffect(() => {
    if (startCycling) {
      setIsCycling(true);
      setStopAt([null, null, null]);
    }
  }, [startCycling]);

  // 停止循环
  useEffect(() => {
    if (stopCycling) {
      setIsCycling(false);
    }
  }, [stopCycling]);

  // 停止到指定数字
  useEffect(() => {
    if (stopAtNumbers) {
      setStopAt(stopAtNumbers);
    }
  }, [stopAtNumbers]);

  // 停止在指定数字上
  useEffect(() => {
    [spring0, spring1, spring2].forEach((spring, index) => {
      if (stopAt[index] !== null && Math.floor(spring.number.get()) === stopAt[index]) {
        setIsCycling(false);
      }
    });
  }, [spring0, spring1, spring2, stopAt]);

  return (
    <div className="flex space-x-2 text-4xl font-bold">
      <animated.div>{spring0.number.to((n) => Math.floor(n))}</animated.div>
      <animated.div>{spring1.number.to((n) => Math.floor(n))}</animated.div>
      <animated.div>{spring2.number.to((n) => Math.floor(n))}</animated.div>
    </div>
  );
};

export default ThreeDigitCycler;
