import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import ReviewAndMessage from "./components/ReviewAndMessage";
import Navbar from "./components/Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <React.StrictMode>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='comment/:id' element={<ReviewAndMessage />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </React.StrictMode>
);
