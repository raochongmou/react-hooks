import { ThemeContext, TokenContext } from "../context";
import { useContext } from "react";

export function useCustomContext() {
  const theme = useContext(ThemeContext);
  const token = useContext(TokenContext);
  return [theme, token];
}
