import React, { useEffect, useState } from "react";

import axios from "axios";

import Header from "./Header";
import ProductPage from "./pages/ProductPage";
import CategoryPage from "./pages/CategoryPage";

import "./index.css";

const Shop = () => {
  const [currentCategory, setCurrentCategory] = useState("laptops");
  const [products, setProducts] = useState([]);
  // const [currentProduct, setCurrentProduct] = useState("");
  const [currentProduct, setCurrentProduct] = useState("1");

  // useEffect(() => {
  //   setCurrentProduct(products[0]);
  // }, []);
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/category/${currentCategory}`)
      .then((response) => {
        setProducts(response.data.products);
        // console.log(response.data.products);
      });
  }, [currentCategory]);
  return (
    <>
      <Header onMenuClick={(category) => setCurrentCategory(category)} />
      {currentCategory !== "" ? (
        <CategoryPage
          currProducts={products}
          currCategory={currentCategory}
          onProductClick={(currProduct) => setCurrentProduct(currProduct)}
        />
      ) : (
        <ProductPage products={currentProduct} category={currentCategory} />
      )}
    </>
  );
};

export default Shop;
