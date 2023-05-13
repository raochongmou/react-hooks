import { useEffect } from "react";

export function useLog(name) {
  useEffect(() => {
    console.log(name);
  }, []);
}
