import React, { useState, useEffect } from "react";

const ConditionRunEffect = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("Updating document title");
    document.title = `you clicked ${count} times`;
  }, []);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
  );
};

export default ConditionRunEffect;
