import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);

  const handleClick = () => {
    setCount(count + 1);
    console.log(count);
  };

  return (
    <div>
      <h3>Count:{count}</h3>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Counter;
