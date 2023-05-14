import React, { Fragment, memo } from "react";
import { addCounterAction, changeMessageAction } from "./feature/counter";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

const Home = memo(() => {
  // 这里如果要处理性能优化  需要传入第二个参数 shallowEqual 进行浅层比较
  const { message } = useSelector(
    state => ({
      message: state.counter.message
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  console.log("Home Render");
  return (
    <Fragment>
      <h2>
        {message}
      </h2>
      <button onClick={() => dispatch(changeMessageAction("hello React!"))}>
        改变文本
      </button>
    </Fragment>
  );
});

const App = memo(() => {
  const { counter } = useSelector(
    state => ({
      counter: state.counter.featureCounter
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  console.log("App Render");
  return (
    <div>
      <h2>
        当前计数: {counter}
      </h2>
      <button onClick={() => dispatch(addCounterAction(1))}>+1</button>
      <Home />
    </div>
  );
});

export default App;
