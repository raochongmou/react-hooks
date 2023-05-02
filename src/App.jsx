import React, { memo, useEffect, useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  useEffect(
    () => {
      console.log("componentDidMount");
      return () => {
        console.log("componentWillUnmount");
      };
    },
    [counter]
  );
  return (
    <div>
      <h2>
        计数器：{counter}
      </h2>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
    </div>
  );
};

export default memo(App);
