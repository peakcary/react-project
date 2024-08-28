import React, { useState, useRef } from "react";
import CoinRain from "../../components/CoinRain";
import BoxAnimation from "../../components/BoxAnimation";
import DigitRoller from "../../components/DigitRoller";
import BoxAnimation1 from "../../components/BoxAnimation/index_bak1";
import BoxAnimation2 from "../../components/BoxAnimation/index_bak";
import Card from "../../components/Card";

function Home() {
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

  const [trigger, setTrigger] = useState(false);
  const handleCoinRain = () => {
    console.log("aa");
    // 每次点击按钮时，触发撒金币效果
    setTrigger(true);

    // 重置 trigger 状态为 false 以便下次点击可以再次触发
    setTimeout(() => {
      setTrigger(false);
    }, 0); // 可以立即重置
  };

  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md">
        <div className="relative">
          <button
            ref={triggerRef}
            onClick={handleToggle}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            触发 Popover111
          </button>
          {isOpen && (
            <div
              className="absolute z-10 bg-white shadow-md rounded mt-2"
              style={{
                left: triggerRef.current?.offsetLeft,
                top:
                  triggerRef.current?.offsetTop +
                  triggerRef.current?.offsetHeight,
              }}
            >
              <div className="p-4">
                <p>这是 Popover 的内容</p>
              </div>
            </div>
          )}
        </div>

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

        <BoxAnimation></BoxAnimation>
        <BoxAnimation1></BoxAnimation1>
        <BoxAnimation2></BoxAnimation2>
        <button
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
          }}
          onClick={handleCoinRain}
        >
          撒金币
        </button>

        {/* 撒金币效果组件 */}
        <CoinRain trigger={trigger} />

        {/* <div className="bg-white p-4 rounded-lg shadow-lg">
          <h1 className="text-xl font-bold mb-4">动态自适应区域</h1>
          <div className="max-h-[70vh] overflow-y-auto bg-gray-200 p-4">
            <p>
              这是一个自适应的内容区域，始终保持在可视窗口的70%以内。即使在不同设备上，它也能够适配屏幕大小。
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              scelerisque velit vitae ligula fermentum, sit amet feugiat mi
              varius. Fusce nec commodo urna. Curabitur dapibus nisl sed
              fermentum pharetra. Cras pharetra urna ac elit cursus, at
              ultricies augue scelerisque. Sed sit amet tellus sit amet mauris
              interdum elementum sit amet a lorem.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac
              lectus venenatis, facilisis orci id, vehicula ex. Mauris a dui
              quis nisi lacinia pulvinar. Integer vehicula enim orci, in sodales
              purus consectetur nec.
            </p> 
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Home;
