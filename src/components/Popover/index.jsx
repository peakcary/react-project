import React, { useState, useRef } from 'react';

const Popover = ({ content, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const popoverRef = useRef(null);

  const handleClickOutside = (event) => {
    if (popoverRef.current && !popoverRef.current.contains(event.target)) {
      setIsVisible(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block" ref={popoverRef}>
      <div onClick={() => setIsVisible(!isVisible)}>
        {children}
      </div>
      {isVisible && (
        <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 max-w-full w-auto bg-white border border-gray-300 shadow-lg rounded-lg">
          <div className="p-4 w-auto">
            {content}卅发撒撒撒撒短发啊疯狂加撒的丽萨克拉三等奖拉萨空间啊烦死了空间看了撒娇刻录机
          </div>
        </div>
      )}
    </div>
  );
};

export default Popover;
