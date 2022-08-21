import React from 'react';
import Calculator from '../components/Calculator';
import '../styles/Mathematics.css';

function Mathematics() {
  return (
    <div className="math-page">
      <div>
        <h2>Let&apos;s do some math!</h2>
        <div className="math-decos">
          <p>3√a</p>
          <p>10 ≠ 6</p>
          <p>Ø Σ </p>
        </div>
      </div>
      <Calculator />
    </div>
  );
}

export default Mathematics;
