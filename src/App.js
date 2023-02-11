import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Container/Home/Home";
import NormalRoute from "./Layout/NormalRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NormalRoute Component={Home} />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
