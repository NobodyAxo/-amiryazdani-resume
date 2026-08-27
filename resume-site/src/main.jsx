import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import IpLookup from "./tools/IpLookup.jsx";
import PortScanner from "./tools/PortScanner.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/tools/ip-lookup" element={<IpLookup />} />
        <Route path="/tools/port-scanner" element={<PortScanner />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
