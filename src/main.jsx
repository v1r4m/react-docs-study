import React from "react";
import ReactDOM from "react-dom/client";
import Week2 from "./2week/Week2";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Week2 />
    </BrowserRouter>
  </React.StrictMode>
);
