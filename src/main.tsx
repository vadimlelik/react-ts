import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./shared/i18n/i18n.ts";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);
