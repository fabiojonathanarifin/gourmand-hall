import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);

serviceWorker.unregister();
