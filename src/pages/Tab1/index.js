import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css"; 

import DigitRoller from '../../components/DigitRoller1'

const Tab1 = () => {
  const navigate = useNavigate();
 
  const [rolling, setRolling] = useState(false);
  const [targetNumbers, setTargetNumbers] = useState([0, 0, 0]);

  const handleStartRolling = () => {
    setRolling(true); // 启动滚动
  };

  const handleStopRolling = () => {
    setRolling(false); // 停止滚动
  };

  const handleTargetChange = (index, value) => {
    const newTargetNumbers = [...targetNumbers];
    newTargetNumbers[index] = parseInt(value) % 10;
    setTargetNumbers(newTargetNumbers); // 更新目标数字
  };




  return (
    <div className="flex items-center justify-center h-full">
      <div>
      <DigitRoller targetNumbers={targetNumbers} rolling={rolling} />

<div style={{ marginTop: '20px' }}>
  {targetNumbers.map((num, index) => (
    <div key={index} style={{ margin: '10px 0' }}>
      <label>Digit {index + 1} Target: </label>
      <input
        type="number"
        value={num}
        onChange={e => handleTargetChange(index, e.target.value)}
        min={0}
        max={9}
      />
    </div>
  ))}
</div>

<div style={{ marginTop: '20px' }}>
  <button onClick={handleStartRolling} disabled={rolling}>
    Start Rolling
  </button>
  <button onClick={handleStopRolling} disabled={!rolling} style={{ marginLeft: '10px' }}>
    Stop and Set to Target
  </button>
</div>
 
      </div> 
    </div>
  );
};

export default Tab1;
