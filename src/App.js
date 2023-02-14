import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddCategory from "./Container/Admin/AddCategory";
import Dashboard from "./Container/Admin/Dashboard";
import ViewCategory from "./Container/Admin/ViewCategory";
import Home from "./Container/Home/Home";
import Login from "./Container/Login";
import Products from "./Container/Product";
import ProductDetail from "./Container/ProductDetail";
import AdminRoutes from "./Layout/AdminRoute";
import NormalRoute from "./Layout/NormalRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Admin Route */}
        <Route
          path="/admin-dashboard"
          element={<AdminRoutes Component={Dashboard} />}
        >
          <Route path="manage-category" element={<ViewCategory />} />
          <Route path="add-category" element={<AddCategory />} />
        </Route>

        {/* user route */}
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
