import React from "react";

// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./Create";
import Read from "./Read";
import Update from "./Update";
export default function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Create />} />
          <Route path="/read" element={<Read />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
