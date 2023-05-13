import React, { memo, useRef, forwardRef, useImperativeHandle } from "react";

const Home = memo(
  forwardRef((props, ref) => {
    const homeRef = useRef();
    useImperativeHandle(ref, () => ({
      focus1: () => {
        console.log("home focus");
        homeRef.current.focus();
      }
    }));
    return (
      <div>
        <input ref={homeRef} />
      </div>
    );
  })
);

const App = () => {
  const getDom = () => {
    inputRef.current.focus1();
  };
  const inputRef = useRef();
  return (
    <div>
      <button onClick={getDom}>获取dom</button>
      <Home ref={inputRef} />
    </div>
  );
};

export default memo(App);
