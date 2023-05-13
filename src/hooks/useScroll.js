import { useEffect, useLayoutEffect, useState } from "react";

export function useScroll() {
  const [scrollY, setScrollY] = useState(0);
  useLayoutEffect(
    () => {
      function handleOnScroll() {
        setScrollY(window.scrollY);
      }
      window.addEventListener("scroll", handleOnScroll);
      return () => {
        window.removeEventListener("scroll", handleOnScroll);
      };
    },
    [scrollY]
  );
  // useEffect(
  //   () => {
  //     function handleOnScroll() {
  //       setScrollY(window.scrollY);
  //     }
  //     window.addEventListener("scroll", handleOnScroll);
  //     return () => {
  //       window.removeEventListener("scroll", handleOnScroll);
  //     };
  //   },
  //   [scrollY]
  // );
  return [scrollY];
}
