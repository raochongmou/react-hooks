import { useEffect, useState } from "react";

export function useStorage(key) {
  const [data, setData] = useState(localStorage.getItem(key));
  useEffect(
    () => {
      localStorage.setItem(key, data);
    },
    [data]
  );
  return [data, setData];
}
