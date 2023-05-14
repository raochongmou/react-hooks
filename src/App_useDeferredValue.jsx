import React, { memo, useState, useDeferredValue } from "react";
import { fakerData } from "./data";

const App = () => {
  const [list, setList] = useState(fakerData);
  // 得到副本
  const copyList = useDeferredValue(list);
  function inputChange(e) {
    const keyword = e.target.value;
    const filterData = fakerData.filter(item => item.includes(keyword));

    setList(filterData);
  }
  return (
    <div>
      <input onInput={inputChange} />
      <h2>用户列表:</h2>
      {copyList.map((item, index) => {
        return (
          <li key={index}>
            {item}
          </li>
        );
      })}
    </div>
  );
};

export default memo(App);
