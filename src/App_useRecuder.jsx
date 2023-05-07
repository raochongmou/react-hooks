import React, { memo, useReducer, useState } from "react";

function reducer(state, actions) {
  switch (actions.type) {
    case "addCount":
      return { ...state, counter: state.counter + actions.payload };
    case "subCount":
      return { ...state, counter: state.counter - actions.payload };
    default:
      return state;
  }
}

const App = () => {
  // const [counter, setCounter] = useState(0);
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  return (
    <div>
      <h2>
        计数器：{state.counter}
      </h2>
      <button onClick={e => dispatch({ type: "addCount", payload: 1 })}>
        +1
      </button>
      <button onClick={e => dispatch({ type: "subCount", payload: 1 })}>
        -1
      </button>
      <button onClick={e => dispatch({ type: "addCount", payload: 5 })}>
        +5
      </button>
      <button onClick={e => dispatch({ type: "subCount", payload: 5 })}>
        -5
      </button>
      <button onClick={e => dispatch({ type: "addCount", payload: 100 })}>
        +100
      </button>
      {/* <h2>
        计数器：{counter}
      </h2>
      <button onClick={e => setCounter(counter + 1)}>+1</button>
      <button onClick={e => setCounter(counter - 1)}>-1</button>
      <button onClick={e => setCounter(counter + 5)}>+5</button>
      <button onClick={e => setCounter(counter - 5)}>-5</button>
      <button onClick={e => setCounter(counter + 100)}>+100</button> */}
    </div>
  );
};

export default memo(App);
