import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";

 
const DigitRoller = ({ initialDigit, targetDigit, speed, fontColor, isRolling }) => {
  const [currentDigit, setCurrentDigit] = useState(initialDigit);

  const springProps = useSpring({
    from: { transform: "translateY(0%)" },
    to: { transform: isRolling ? "translateY(-100%)" : "translateY(0%)" },
    config: { duration: speed },
    reset: true,
    onRest: () => {
      if (isRolling) {
        setCurrentDigit((prevDigit) => (prevDigit + 1) % 10); // 循环滚动
      }
    },
    loop: isRolling,
  });

  useEffect(() => {
    if (!isRolling && targetDigit !== null) {
      setCurrentDigit(targetDigit); // 停止在目标数字
    }
  }, [isRolling, targetDigit]);

  return (
    <div
      style={{
        display: "inline-block",
        fontSize: "60px",
        fontWeight: "bold",
        overflow: "hidden",
        height: "60px",
        width: "40px",
        color: fontColor,
      }}
    >
      <animated.div style={springProps}>{currentDigit}</animated.div>
    </div>
  );
};

export default DigitRoller;