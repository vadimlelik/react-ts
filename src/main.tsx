import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// import "./shared/i18n/i18n.ts";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./entities/store.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
