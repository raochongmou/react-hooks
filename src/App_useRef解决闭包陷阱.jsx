import React, { memo, useCallback, useState, useRef } from "react";

const Home = memo(props => {
  const { increament } = props;
  console.log("Home");
  return (
    <div>
      <button onClick={increament}>home + 1</button>
    </div>
  );
});

const App = () => {
  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState(0);
  // useRef特点：值不变
  const countRef = useRef();
  countRef.current = counter;
  const increament = useCallback(() => {
    setCounter(countRef.current + 1);
  }, []);
  return (
    <div>
      <h2>
        计数器：{counter}
      </h2>
      <button onClick={increament}>+1</button>
      <h1>
        {message}
      </h1>
      <button onClick={e => setMessage(Math.random() * 1000)}>改变message</button>
      <Home increament={increament} />
    </div>
  );
};

export default memo(App);
