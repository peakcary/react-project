import React from 'react';
import { useNavigate } from 'react-router-dom';

const InformationPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Information Page</h1>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default InformationPage;
