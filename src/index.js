import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeContext, TokenContext } from "./context";

const app = ReactDOM.createRoot(document.querySelector("#root"));
app.render(
  <ThemeContext.Provider value={{ color: "skyblue", fontSize: "40px" }}>
    <TokenContext.Provider value={"raochongmou"}>
      <App />
    </TokenContext.Provider>
  </ThemeContext.Provider>
);
