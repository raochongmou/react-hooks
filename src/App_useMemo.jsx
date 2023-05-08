import React, { memo, useMemo, useState } from "react";

const Home = memo(props => {
  console.log("Home被执行");
  const { res, info } = props;
  return (
    <div>
      <h3>
        {res}---{info.name}---{info.age}
      </h3>
    </div>
  );
});

function computeTotal(counter) {
  console.log("computeTotal被执行!");
  let total = 0;
  for (let i = 0; i <= counter; i++) {
    total += i;
  }
  return total;
}

const App = () => {
  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState("helloReact");
  // const res = computeTotal(100);
  const res = useMemo(() => computeTotal(100), []);
  // const res = useMemo(() => computeTotal(counter * 2), [counter]);
  const increament = () => {
    setCounter(counter + 1);
  };
  // const info = {
  //   name: "rao",
  //   age: 18
  // };
  const info = useMemo(() => ({ name: "rao", age: 18 }), []);
  return (
    <div>
      <h2>
        计数器：{res}-{counter}
      </h2>
      <button onClick={increament}>+1</button>
      <h1>
        {message}
      </h1>
      <button onClick={e => setMessage(Math.random() * 1000)}>改变message</button>
      {/* 如果传入的是一个基础数据的值，它将不会被重新渲染 */}
      {/* 相反的如果传入的是一个引用数据类型的对象，每次其它状态变化，它将被重新渲染 */}
      <Home res={res} info={info} />
    </div>
  );
};

export default memo(App);
