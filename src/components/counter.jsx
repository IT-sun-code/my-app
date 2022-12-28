import React, { useState } from "react";
const Counter = (props) => {
  const { value } = props;

  const formatValue = () => {
    return value === 0 ? "empty" : value;
  };
  const getBageClasses = () => {
    let classes = "badge m-2 ";
    classes += value === 0 ? "bg-warning" : "bg-primary";
    return classes;
  };

  const handleIncrement = () => {
    props.onIncrement(props.id);
    console.log("handle increment");
    // setValue((prevState) => prevState + 1);    onIncrement onDecrement
  };
  const handleDecrement = () => {
    props.onDecrement(props.id);
    console.log("handle decrement");
    // setValue((prevState) => prevState - 1);
  };

  return (
    <div>
      <span> {props.name}</span>
      <span className={getBageClasses()}>{formatValue()}</span>
      <button className="btn btn-primary btn-sm m-2" onClick={handleIncrement}>
        +
      </button>
      <button className="btn btn-primary btn-sm m-2" onClick={handleDecrement}>
        -
      </button>
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => props.onDelete(props.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Counter;
