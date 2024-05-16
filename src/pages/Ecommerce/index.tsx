import React, { useState } from "react";
import { Outlet } from "react-router";

import Home from "./pages/Home";
import Header from "./components/Header";
import Category from "./pages/Category";

import $ from "./index.module.css";
import { ProductProvider } from "./data";

export const routes = [
  {
    path: "/ecommerce",
    element: <Home />,
  },
  {
    path: "/ecommerce/categories",
    element: <Category />,
  },
];

const Ecommerce = () => {
  return (
    <ProductProvider>
      <div className={$.MainWrapper}>
        <Header />
        <Outlet />
      </div>
    </ProductProvider>
  );
};

export default Ecommerce;
