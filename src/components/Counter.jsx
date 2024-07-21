import React from "react";
import { useSelector } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state); // useSelector is a hook that takes a selector function and returns the selected part of the state
  return (
    <div>
      <h2>Count is {count}</h2>
    </div>
  );
};

export default Counter;
