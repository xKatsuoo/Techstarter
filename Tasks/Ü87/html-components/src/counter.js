import React, { useState } from 'react';
import './style.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseCounter = () => {
    setCount((prevCount) => prevCount + 2);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increaseCounter}>Erhöhen um 2</button>
    </div>
  );
};

export default Counter;
