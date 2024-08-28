import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { easeCubicOut } from 'd3-ease';

const SlotMachine = ({ start, stop, targetNumbers = [null, null, null], speed = 1000 }) => {
  const [rolling, setRolling] = useState(false);
  const [shouldStop, setShouldStop] = useState(false);
  const [currentNumbers, setCurrentNumbers] = useState([0, 0, 0]);

  // Handle the first digit's animation
  const spring1 = useSpring({
    from: { number: currentNumbers[0] },
    to: { number: rolling ? 9 + Math.random() * 10 : targetNumbers[0] || currentNumbers[0] },
    config: { duration: rolling ? speed : 500, easing: easeCubicOut },
    reset: true,
    onRest: () => {
      if (!shouldStop) {
        setCurrentNumbers(prev => {
          const newNumbers = [...prev];
          newNumbers[0] = (newNumbers[0] + 1) % 10;
          return newNumbers;
        });
      } else if (currentNumbers[0] !== targetNumbers[0]) {
        setCurrentNumbers(prev => {
          const newNumbers = [...prev];
          newNumbers[0] = targetNumbers[0];
          return newNumbers;
        });
      }
    },
  });

  // Handle the second digit's animation
  const spring2 = useSpring({
    from: { number: currentNumbers[1] },
    to: { number: rolling ? 9 + Math.random() * 10 : targetNumbers[1] || currentNumbers[1] },
    config: { duration: rolling ? speed : 500, easing: easeCubicOut },
    reset: true,
    onRest: () => {
      if (!shouldStop) {
        setCurrentNumbers(prev => {
          const newNumbers = [...prev];
          newNumbers[1] = (newNumbers[1] + 1) % 10;
          return newNumbers;
        });
      } else if (currentNumbers[1] !== targetNumbers[1]) {
        setCurrentNumbers(prev => {
          const newNumbers = [...prev];
          newNumbers[1] = targetNumbers[1];
          return newNumbers;
        });
      }
    },
  });

  // Handle the third digit's animation
  const spring3 = useSpring({
    from: { number: currentNumbers[2] },
    to: { number: rolling ? 9 + Math.random() * 10 : targetNumbers[2] || currentNumbers[2] },
    config: { duration: rolling ? speed : 500, easing: easeCubicOut },
    reset: true,
    onRest: () => {
      if (!shouldStop) {
        setCurrentNumbers(prev => {
          const newNumbers = [...prev];
          newNumbers[2] = (newNumbers[2] + 1) % 10;
          return newNumbers;
        });
      } else if (currentNumbers[2] !== targetNumbers[2]) {
        setCurrentNumbers(prev => {
          const newNumbers = [...prev];
          newNumbers[2] = targetNumbers[2];
          return newNumbers;
        });
      }
    },
  });

  useEffect(() => {
    if (start) {
      setRolling(true);
      setShouldStop(false);
    }
    if (stop && targetNumbers.every(num => num !== null)) {
      setShouldStop(true);
    } else if (stop) {
      setRolling(false);
    }
  }, [start, stop, targetNumbers]);

  return (
    <div className="slot-machine-container flex space-x-4">
      <animated.div style={{ fontSize: '2rem', fontWeight: 'bold' }}>
        {spring1.number.to(n => Math.floor(n) % 10)}
      </animated.div>
      <animated.div style={{ fontSize: '2rem', fontWeight: 'bold' }}>
        {spring2.number.to(n => Math.floor(n) % 10)}
      </animated.div>
      <animated.div style={{ fontSize: '2rem', fontWeight: 'bold' }}>
        {spring3.number.to(n => Math.floor(n) % 10)}
      </animated.div>
    </div>
  );
};

export default SlotMachine;
