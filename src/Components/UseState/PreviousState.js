import React, { useState } from "react";

const PreviousState = () => {
  const initialState = 0;
  const [count, setCount] = useState(initialState);
  return (
    <div>
      count : {count}
      <button onClick={() => setCount(initialState)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount((prevCount) => prevCount + 5)}>
        inc 5
      </button>
    </div>
  );
};

export default PreviousState;
