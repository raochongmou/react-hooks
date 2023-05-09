import React, { memo, useMemo, useRef, useState } from "react";

let obj = {};
const App = () => {
  const getDom = () => {
    console.log("dom", ref.current);
    inputRef.current.focus();
  };
  const [counter, setCounter] = useState(0);
  const ref = useRef();
  const inputRef = useRef();
  const a = {};
  console.log(obj === a);
  obj = a;
  return (
    <div>
      <h2 ref={ref}>
        dom---{counter}
      </h2>
      <input ref={inputRef} />
      <button onClick={getDom}>获取dom</button>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
      {/* <Home res={res} info={info} /> */}
    </div>
  );
};

export default memo(App);
