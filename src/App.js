import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Container/Home/Home";
import Login from "./Container/Login";
import Products from "./Container/Product";
import ProductDetail from "./Container/ProductDetail";
import NormalRoute from "./Layout/NormalRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NormalRoute Component={Home} />}>
          <Route path="/login" element={<Login />} />
          <Route path="products" element={<Products />} />
          <Route path="product" element={<ProductDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
