import React, { memo, useEffect, useState } from "react";
import axios from "axios";
import Home from "./pages/Home";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [showHome, setShowHome] = useState(true);
  useEffect(
    () => {
      console.log("componentDidMount");

      axios.get("/static/data.json").then(res => {
        console.log("res", res);
      });
      return () => {
        // console.log("componentWillUnmount");
        console.log("componentDidUpdate");
      };
    },
    [showHome, counter]
  );
  const removeHome = () => {
    setShowHome(!showHome);
  };
  return (
    <div>
      <h2>
        计数器：{counter}
      </h2>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
      <button onClick={removeHome}>移除</button>
      {showHome ? <Home /> : <h2>已卸载</h2>}
    </div>
  );
};

export default memo(App);
