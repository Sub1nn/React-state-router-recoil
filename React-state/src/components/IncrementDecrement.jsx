import React, { useState } from "react";

const IncrementDecrement = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    let newCount = count + 1;
    setCount(newCount);
  };

  const decreaseCount = () => {
    let newDecreasedCount = count - 1;
    setCount(newDecreasedCount);
  };

  return (
    <div>
      <center>
        <h3>Count: {count}</h3>
        <button onClick={increaseCount}>+</button>
        <button onClick={decreaseCount}>-</button>
      </center>
    </div>
  );
};

export default IncrementDecrement;
