import React, { useState,useEffect } from 'react';
import Odometer from 'react-odometerjs';
import 'odometer/themes/odometer-theme-default.css';

import ThreeDigitOdometer from '../../components/ThreeDigitOdometer'
 

const Tab3 = () => {
  const [value, setValue] = useState(1234);

  useEffect(() => {
      const timeoutId = setTimeout(() => setValue(4321), 2000);
      return () => {
          clearTimeout(timeoutId);
      };
  }, []);

  return (
    <div className="flex items-center justify-center h-full">
     <Odometer value={value} format="(.ddd),dd" />
     <ThreeDigitOdometer></ThreeDigitOdometer>
    </div>
  );
};

export default Tab3;
