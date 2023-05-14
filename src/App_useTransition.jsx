import React, { memo, useState, useTransition } from "react";
import { fakerData } from "./data";

const App = () => {
  const [list, setList] = useState(fakerData);
  const [pending, startTransition] = useTransition();
  function inputChange(e) {
    const keyword = e.target.value;
    const filterData = fakerData.filter(item => item.includes(keyword));
    startTransition(() => {
      setList(filterData);
    });
  }
  return (
    <div>
      <input onInput={inputChange} />
      <h2>
        用户列表:{pending && "loading......"}{" "}
      </h2>
      {list.map((item, index) => {
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
