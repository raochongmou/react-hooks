import React, { memo, useEffect } from "react";
import Wrapper from "./style/scroll";
import { useScroll } from "./hooks/useScroll";

const App = () => {
  // function handleOnScroll() {
  //   console.log(window.scrollX, window.scrollY);
  // }
  // useEffect(() => {
  //   window.addEventListener("scroll", handleOnScroll);
  // });
  const [scrollY] = useScroll();
  return (
    <Wrapper scrollY={scrollY}>
      App: {scrollY}
    </Wrapper>
  );
};

export default memo(App);
