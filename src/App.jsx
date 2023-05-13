import React, { memo, useEffect, useState } from "react";
import { useStorage } from "./hooks/useStorage";

const App = () => {
  // const [token, setToken] = useState(localStorage.getItem("token"));
  // useEffect(
  //   () => {
  //     localStorage.setItem("token", token);
  //   },
  //   [token]
  // );
  // const [avator, setAvator] = useState(localStorage.getItem("avator"));
  // useEffect(
  //   () => {
  //     localStorage.setItem("avator", avator);
  //   },
  //   [avator]
  // );
  const [token, setToken] = useStorage("token");
  const [avator, setAvator] = useStorage("avator");

  return (
    <div>
      <h2>
        token: {token}
      </h2>
      <h2>
        avator: {avator}
      </h2>
      <button onClick={() => setToken("rao")}>设置token</button>
      <button onClick={() => setAvator("wwww.baidu.png")}>设置头像</button>
    </div>
  );
};

export default memo(App);
