import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contact, Home, Success } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/success" element={<Success />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
