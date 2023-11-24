import React, { useEffect, useState } from "react";

import axios from "axios";

import Header from "./Header";
import ProductPage from "./pages/ProductPage";
import CategoryPage from "./pages/CategoryPage";

import "./index.css";
import ProductSlider from "./ProductSlider";

const Shop = () => {
  const [currentCategory, setCurrentCategory] = useState("laptops");
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState();
  const [productPage, setProductsPage] = useState(false);

  useEffect(() => {
    console.log("catpage currproduct changes to:" + currentProduct);
  }, [currentProduct]);
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/category/${currentCategory}`)
      .then((response) => {
        setProducts(response.data.products);
        // console.log(
        //   "response from dummyjson: products by category" +
        //     response.data.products
        // );
      });
  }, [currentCategory]);
  return (
    <>
      <Header onMenuClick={(category) => setCurrentCategory(category)} />
      {!productPage ? (
        <CategoryPage
          currCategory={currentCategory}
          currProducts={products}
          onProductPage={(currProduct) => {
            setCurrentProduct(currProduct);
            // setProductsPage(true);
          }}
        />
      ) : (
        <ProductPage products={currentProduct} category={currentCategory} />
      )}
    </>
  );
};

export default Shop;
