import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector(state => {
    return state.counterReducer
  })
  const isLogged = useSelector(state => {
    return state.loggedReducer
  })
  return (
    <div className="App">
      Counter: {counter}
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged === true ? <div>other crap </div> : null}
    </div>
  );
}

export default App;
