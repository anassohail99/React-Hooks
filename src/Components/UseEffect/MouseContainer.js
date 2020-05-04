import React, { useState } from "react";
import HooksMouse from "./HooksMouse";

const MouseContainer = () => {
  const [display, setDisplay] = useState();
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
      {display && <HooksMouse />}
    </div>
  );
};

export default MouseContainer;
