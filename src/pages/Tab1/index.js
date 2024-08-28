import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "./index.css"; 

import DigitRoller from '../../components/DigitRoller'

const Tab1 = () => { 
  const [numbers, setNumbers] = useState([0, 0, 0]);

  const handleRoll = () => {
    // 生成三个随机数
    const newNumbers = [
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
    ];
    setNumbers(newNumbers); // 更新状态，触发数字滚动
  };



  return (
    <div className="flex items-center justify-center h-full">
       <div>
          <h1>数字滚动动画</h1>
          <DigitRoller targetNumbers={numbers} duration={3000} />
          <button
            onClick={handleRoll}
            style={{
              padding: "10px 20px",
              marginTop: "20px",
              fontSize: "16px",
            }}
          >
            开始滚动
          </button>
        </div>
    </div>
  );
};

export default Tab1;
