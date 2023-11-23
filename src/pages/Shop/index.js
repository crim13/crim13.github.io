import React, { useEffect, useState } from "react";

import Home from "./pages/Home";
import Header from "./Header";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import ProductPage from "./pages/ProductPage";

import "./index.css";

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(-3);
  return (
    <>
      <Header />
      {currentPage === -1 ? <Home /> : null}
      {currentPage === -2 ? <AboutUs /> : null}
      {currentPage === -3 ? <Contact /> : null}
      {currentPage === -4 ? <AboutUs /> : null}
      {currentPage === -5 ? <ProductPage /> : null}
    </>
  );
};

export default Shop;
