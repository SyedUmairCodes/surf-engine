import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {ResultContextProvider} from "./Contexts/ResultContextProvider.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <ResultContextProvider>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </ResultContextProvider>
  </React.StrictMode>
);
