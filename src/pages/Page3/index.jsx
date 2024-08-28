import React from 'react';
import { useNavigate } from 'react-router-dom';

const Page2 = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Page 3</h1>
      <button onClick={() => navigate('/info')}>Go to Info Page</button>
    </div>
  );
};

export default Page2;

// Repeat similar structure for Page2 and Page3
