// components/Detail.js
import React from 'react';

const Detail = ({ exerciseDetail }) => {
  return (
    <div>
      <h1>{exerciseDetail.name}</h1>
      {/* Render other details here */}
    </div>
  );
};

export default Detail;
