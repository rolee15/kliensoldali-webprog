import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CssBaseline } from "@mui/material";
import { AuthProvider } from "./authContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <CssBaseline></CssBaseline>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
