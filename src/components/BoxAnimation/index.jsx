import React, { useState } from 'react';
import { useSprings, animated, config } from '@react-spring/web';

const BoxAnimation = () => {
  const [selectedBox, setSelectedBox] = useState(null); // 当前选中的方块
  const [isAnimating, setIsAnimating] = useState(false);
  const [showCoins, setShowCoins] = useState(false); // 控制撒金币显示

  const boxes = [0, 1, 2, 3, 4, 5]; // 6个方块的索引
  const targetBox = 4; // 假设目标方块是第4个（索引为4）

  // 撒金币的数量
  const coins = Array.from({ length: 30 });

  // 使用 useSprings 为所有方块生成动画数组
  const [springs, api] = useSprings(boxes.length, index => ({
    transform: 'translateY(0px) scale(1)',
    config: config.stiff,
  }));

  // 撒金币动画
  const [coinSprings, coinApi] = useSprings(coins.length, () => ({
    from: { opacity: 0, transform: `translate3d(${Math.random() * 100 - 50}px, -50px, 0)` },
    to: { opacity: 1, transform: `translate3d(${Math.random() * 500 - 250}px, 500px, 0) rotate(${Math.random() * 360}deg)` },
    config: config.slow,
    reset: true,
  }));

  const startAnimation = () => {
    if (isAnimating) return; // 防止动画进行时重复点击
    setIsAnimating(true);
    setShowCoins(false); // 重置撒金币状态

    let currentIndex = 0;
    const totalRounds = 3; // 循环的轮数
    const totalSteps = totalRounds * boxes.length + targetBox; // 总共的步数

    const animate = (step) => {
      if (step >= totalSteps) {
        setSelectedBox(targetBox); // 最终定位到目标方块
        setIsAnimating(false);
        setTimeout(() => setShowCoins(true), 500); // 500ms后触发撒金币效果
        return;
      }

      setSelectedBox(currentIndex);

      // 更新动画状态，使得当前方块跳跃并缩放
      api.start(index => {
        if (index === currentIndex) {
          return { transform: 'translateY(-20px) scale(1.2)' };
        }
        return { transform: 'translateY(0px) scale(1)' };
      });

      currentIndex = (currentIndex + 1) % boxes.length;

      // 动画速度逐渐减慢
      setTimeout(() => {
        animate(step + 1);
      }, 100 + step * 10); // 逐步增加延迟时间以模拟减速效果
    };

    animate(0);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        {springs.map((style, index) => (
          <animated.div
            key={index}
            style={{
              width: '50px',
              height: '50px',
              margin: '0 10px',
              backgroundColor: selectedBox === index ? 'orange' : 'gray', // 当前选中方块高亮显示
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
              fontSize: '18px',
              ...style, // 应用该方块的 spring 动画属性
            }}
          >
            {index + 1}
          </animated.div>
        ))}
      </div>
      <button
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
        }}
        onClick={startAnimation}
        disabled={isAnimating} // 动画进行中禁用按钮
      >
        开始动画
      </button>

      {showCoins && (
        <div style={{ position: 'relative', width: '100%', height: '500px', overflow: 'hidden' }}>
          {coinSprings.map((style, index) => (
            <animated.div
              key={index}
              style={{
                position: 'absolute',
                width: '20px',
                height: '20px',
                backgroundColor: 'gold',
                borderRadius: '50%',
                ...style, // 应用撒金币的 spring 动画属性
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BoxAnimation;
