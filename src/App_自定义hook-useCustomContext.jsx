import React, { memo } from "react";
import { useCustomContext } from "./hooks/useCustomContext";
import Wrapper from "./style";

const Home = memo(() => {
  const [theme, token] = useCustomContext();
  return (
    <h2>
      home: {theme.color}---{theme.fontSize}---{token}
    </h2>
  );
});

const About = memo(() => {
  return <h2>about</h2>;
});

const App = () => {
  const [theme] = useCustomContext();
  return (
    <Wrapper theme={theme}>
      <h2>App</h2>
      <Home />
      <About />
    </Wrapper>
  );
};

export default memo(App);
