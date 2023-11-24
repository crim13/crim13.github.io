import React, { useEffect, useState } from "react";

import axios from "axios";

import Header from "./Header";
import ProductPage from "./pages/ProductPage";
import CategoryPage from "./pages/CategoryPage";

import "./index.css";

const Shop = () => {
  const [categories, setCategories] = useState("");
  const [currentCategory, setCurrentCategory] = useState("laptops");

  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState();

  const [productPage, setProductsPage] = useState(false);

  useEffect(() => {
    console.log("Shop currproduct changes to:");
    console.log(currentProduct);
  }, [currentProduct]);

  // GETS THE CATEGORIES FROM THE API
  useEffect(() => {
    axios.get("https://dummyjson.com/products/categories").then((response) => {
      setCategories(response.data.splice(0, 6));
    });
  }, []);
  // GETS THE PRODUCTS OF SELECTED CATEGORY
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/category/${currentCategory}`)
      .then((response) => {
        setProducts(response.data.products);
      });
  }, [currentCategory]);

  return (
    <>
      <Header
        categories={categories}
        currentCategory={currentCategory}
        onMenuClick={(category) => setCurrentCategory(category)}
      />
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
