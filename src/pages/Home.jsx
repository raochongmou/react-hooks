import React, { memo, useEffect } from "react";

const Home = memo(() => {
  useEffect(() => {
    console.log("Home已挂载!");
    return () => {
      console.log("Home已卸载!");
    };
  }, []);
  return <div>Home</div>;
});

export default Home;
