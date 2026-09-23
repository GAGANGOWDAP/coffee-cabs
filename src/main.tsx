import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./app/App.tsx";
import "./styles/index.css";

const rawBase = import.meta.env.BASE_URL || "/";
const basename = rawBase.length > 1 && rawBase.endsWith("/") ? rawBase.slice(0, -1) : rawBase;

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename={basename}>
    <App />
  </BrowserRouter>
);