import React, { memo, useState, useEffect, useLayoutEffect } from "react";

const App = () => {
  const [counter, setCounter] = useState(100);
  // 页面加载顺序===render()==>useLayoutEffect==>useEffect
  // 页面会闪烁
  // useEffect(() => {
  //   if (counter === 0) {
  //     setCounter(Math.random() + 99);
  //   }
  // });
  // 页面不会闪烁 一般用于频繁更新dom
  useLayoutEffect(() => {
    if (counter === 0) {
      setCounter(Math.random() + 99);
    }
  });
  return (
    <div>
      <h2>
        当前计数：{counter}
      </h2>
      <button onClick={e => setCounter(0)}>获取dom</button>
    </div>
  );
};

export default memo(App);
