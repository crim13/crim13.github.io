import React, { useEffect, useState } from "react";

import axios from "axios";

import Header from "./Header";
import ProductPage from "./pages/ProductPage";
import CategoryPage from "./pages/CategoryPage";

import "./index.css";

const Shop = () => {
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("laptops");

  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState({});

  const [productPage, setProductPage] = useState(false);

  const [currentProductId, setCurrentProductId] = useState(0);

  const nextProduct = products.find(
    (product) => product.id === currentProductId + 1
  );
  const prevProduct = products.find(
    (product) => product.id === currentProductId - 1
  );

  const onNextPage = () => {};

  useEffect(() => {
    setCurrentProductId(currentProduct.id);
    console.log("Shop currproduct changes to:");
    console.log(currentProduct.title);
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
        onMenuClick={(category) => {
          setCurrentCategory(category);
          setProductPage(false);
        }}
      />
      {!productPage ? (
        <CategoryPage
          currCategory={currentCategory}
          currProducts={products}
          onProductPage={(currProduct) => {
            setCurrentProduct(currProduct);
            setProductPage(true);
          }}
        />
      ) : (
        <ProductPage
          currProduct={currentProduct}
          currCategory={currentCategory}
          products={products}
          onPageNavigationBack={() => {
            setCurrentProductId(currentProduct.id);
            if (prevProduct) {
              setCurrentProduct(prevProduct);
            } else {
              setProductPage(false);
            }
          }}
          onPageNavigationNext={() => {
            setCurrentProductId(currentProduct.id);
            if (nextProduct) {
              setCurrentProduct(nextProduct);
            } else {
              setProductPage(false);
            }
          }}
        />
      )}
    </>
  );
};

export default Shop;
