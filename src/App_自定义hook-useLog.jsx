import React, {
  memo
  // useEffect
} from "react";
import { useLog } from "./hooks/useLog";

const Home = memo(() => {
  useLog("home");
  // useEffect(() => {
  //   console.log("Home");
  // }, []);
  return <h2>home</h2>;
});

const About = memo(() => {
  useLog("about");
  // useEffect(() => {
  //   console.log("About");
  // }, []);
  return <h2>about</h2>;
});

const App = () => {
  return (
    <div>
      <h2>App</h2>
      <Home />
      <About />
    </div>
  );
};

export default memo(App);
