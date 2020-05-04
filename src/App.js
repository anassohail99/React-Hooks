import React from "react";
import "./App.css";
// import HooksCounter from "./Components/UseState/HooksCounter";
// import PreviousState from "./Components/UseState/PreviousState";
import StateWithArrays from "./Components/UseState/StateWithArrays";
import ClassCounterOne from "./Components/UseEffect/ClassCounterOne";
import ClassCounterOneHooks from "./Components/UseEffect/ClassCounterOne(Hooks)";
import ConditionRunEffect from "./Components/UseEffect/ConditionRunEffect";
import ClassMouse from "./Components/UseEffect/ClassMouse";
import MouseContainer from "./Components/UseEffect/MouseContainer";
import IntervalClassCounter from "./Components/UseEffect/IntervalClassCounter";
import IntervalHooksCounter from "./Components/UseEffect/IntervalHooksCounter";
import FetchingDataWithuseEffect from "./Components/UseEffect/Fetching Data/FetchingDataWithuseEffect";

function App() {
  return (
    <div className="App">
      {/* <HooksCounter /> */}
      {/* <PreviousState /> */}
      {/* <StateWithArrays /> */}
      {/* <ClassCounterOne /> */}
      {/* <ClassCounterOneHooks /> */}
      {/* <ConditionRunEffect /> */}
      {/* <ClassMouse /> */}
      {/* <HooksMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalClassCounter />
      <IntervalHooksCounter /> */}
      <FetchingDataWithuseEffect />
    </div>
  );
}

export default App;
