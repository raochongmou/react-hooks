import React, { memo, useCallback, useState } from "react";

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
  // const increament = useCallback(
  //   () => {
  //     setCounter(counter + 1);
  //   },
  //   [counter]
  // );
  const increament = () => {
    setCounter(counter + 1);
  };
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
