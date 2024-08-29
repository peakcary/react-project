import React, { useState } from "react";
import DigitRoller from "../DigitRoller2"; // 引入独立的数字滚动组件

 

const SlotMachine = () => {
  const [targetNumbers, setTargetNumbers] = useState([null, null, null]);
  const [isRolling, setIsRolling] = useState([false, false, false]);
  const [speed, setSpeed] = useState(500); // 滚动速度
  const [fontColor, setFontColor] = useState("#000000"); // 字体颜色

  const initialDigits = [3, 7, 1]; // 每个数字的初始数字

  // 启动所有数字的滚动
  const startRolling = () => {
    setIsRolling([true, true, true]);
    setTargetNumbers([null, null, null]); // 清空目标数字
  };

  // 停止所有数字并设置到目标数字
  const stopAtTarget = () => {
    const userInput = prompt("输入三位数来停止滚动");
    const formattedInput = userInput.padStart(3, "0"); // 确保三位数
    const target = formattedInput.split("").map(Number);

    setTargetNumbers(target); // 设置目标数字
    setIsRolling([false, false, false]); // 停止所有数字滚动
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Slot Machine with Independent Digit Rollers</h2>

      <div style={{ display: "flex", justifyContent: "center" }}>
        {initialDigits.map((initial, index) => (
          <DigitRoller
            key={index}
            initialDigit={initial}
            targetDigit={targetNumbers[index]}
            speed={speed}
            fontColor={fontColor}
            isRolling={isRolling[index]}
          />
        ))}
      </div>

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={startRolling}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          启动滚动
        </button>
        <button
          onClick={stopAtTarget}
          className="bg-red-500 text-white px-4 py-2 ml-4 rounded"
        >
          输入数字停止
        </button>
      </div>

      <div style={{ marginTop: "20px" }}>
        <label>
          滚动速度（毫秒）:
          <input
            type="number"
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
            className="border ml-2 p-1"
          />
        </label>
      </div>

      <div style={{ marginTop: "20px" }}>
        <label>
          字体颜色:
          <input
            type="color"
            value={fontColor}
            onChange={(e) => setFontColor(e.target.value)}
            className="ml-2 p-1"
          />
        </label>
      </div>
    </div>
  );
};

export default SlotMachine;