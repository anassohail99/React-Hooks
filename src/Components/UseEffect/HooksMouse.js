import React, { useState, useEffect } from "react";

const HooksMouse = () => {
  const [X, setX] = useState(0);
  const [Y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("Mouse Event");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("useEffect Called");
    window.addEventListener("mousemove", logMousePosition);
    return () => {
      console.log("Component Unmounting Code");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  return (
    <div>
      Hooks X-{X} Y-{Y}
    </div>
  );
};

export default HooksMouse;
