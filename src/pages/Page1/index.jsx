import React from 'react';
import { useNavigate } from 'react-router-dom';

const Page1 = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Page 1</h1>
      <button onClick={() => navigate('/info')}>Go to Info Page</button>
    </div>
  );
};

export default Page1;

// Repeat similar structure for Page2 and Page3
