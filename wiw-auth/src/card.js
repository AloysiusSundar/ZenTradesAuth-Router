import React from 'react';

function Card({ metric, value, color = 'black' }) {
  return (
    <div className="card">
      <p>{metric}</p>
      <span style={{ color }}>{value}</span>
    </div>
  );
}

export default Card;
