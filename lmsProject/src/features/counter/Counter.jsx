import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset } from "./counterSlice";

export function Counter() {
  const count = useSelector((state) => state.counterSlice.value);
  console.log(count);
  
  // const secondNames = useSelector((state) => state.counter.secondName);
  const dispatch = useDispatch();

  function handleAdd() {
    dispatch(increment());
  }

  function handleSub() {
    dispatch(decrement());
  }

  function handleReset() {
    dispatch(reset());
  }

  return (
    <>
      <h3>{count}</h3>
      <input type="number" />

      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSub}>Sub</button>
      <button onClick={handleReset}>Reset</button>

      {/* <h2>{secondNames}</h2> */}
    </>
  );
}
