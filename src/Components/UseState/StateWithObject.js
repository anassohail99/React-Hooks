import React, { useState } from "react";

const StateWithObject = () => {
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
  });

  return (
    <div>
      <form>
        <br />
        <br />
        <br />
        <label htmlFor="">First Name</label>
        <input
          onChange={(e) => {
            setName({
              ...name,
              firstName: e.target.value,
            });
          }}
          type="text"
          name="firstName"
          id=""
        />
        <br />
        <br />
        <br />
        <label htmlFor="">Last Name</label>
        <input
          onChange={(e) => {
            setName({
              ...name,
              lastName: e.target.value,
            });
          }}
          type="text"
          name="LastName"
          id=""
        />
        <h2>Your First Name is {name.firstName}</h2>
        <h2>Your last Name is {name.lastName}</h2>
        <h3>{JSON.stringify(name)}</h3>
      </form>
    </div>
  );
};

export default StateWithObject;
// https://www.youtube.com/watch?v=RZ5wKYbOM_I&list=PLC3y8-rFHvwisvxhZ135pogtX7_Oe3Q3A&index=5
