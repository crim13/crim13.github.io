import React, { useEffect, useState } from "react";

import axios from "axios";

import Header from "./Header";
import ProductPage from "./pages/ProductPage";
import CategoryPage from "./pages/CategoryPage";

import "./index.css";

const Shop = () => {
  // CATEGORIES
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("laptops");
  // PRODUCTS
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState({});
  const [currentProductId, setCurrentProductId] = useState(0);
  const [productPage, setProductPage] = useState(false);
  // CART
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState();

  // HELPERS
  const nextProduct = products.find(
    (product) => product.id === currentProductId + 1
  );
  const prevProduct = products.find(
    (product) => product.id === currentProductId - 1
  );
  const onCartDelete = (item) => () => {
    const cartCopy = cartItems.filter((prod) => prod.id !== item.id);
    setCartItems(cartCopy);
  };

  // USE EFFECT
  useEffect(() => {
    setCurrentProductId(currentProduct.id);
  }, [currentProduct]);
  // QUANTITY
  useEffect(() => {
    setQuantity(1);
    const prodWithQuantity = { ...currentProduct, quantity: quantity };
    setCurrentProduct(prodWithQuantity);
  }, [currentProductId]);
  useEffect(() => {
    const prodWithQuantity = { ...currentProduct, quantity: quantity };
    setCurrentProduct(prodWithQuantity);
  }, [quantity]);
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
        cartItems={cartItems}
        onCartItemDelete={(item) => onCartDelete(item)}
        onMenuClick={(category) => {
          setCurrentCategory(category);
          setProductPage(false);
        }}
        onCartItemQty={(operator, item) => () => {
          const copyCart = cartItems.map((product) => {
            if (product === item) {
              return {
                ...product,
                quantity:
                  operator === "add"
                    ? product.quantity + 1
                    : product.quantity > 1
                    ? product.quantity - 1
                    : 1,
              };
            }
            return product;
          });
          setCartItems(copyCart);
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
          quantity={quantity}
          // add to cart button status [Add to cart, Update cart, Inactive]
          onAddToCart={() => {
            if (cartItems.some((item) => item.id === currentProduct.id)) {
              // currentProduct in cart
              const cartItem = cartItems.find(
                (item) => item.id === currentProduct.id
              );
              // check if quantity is different
              if (currentProduct.quantity !== cartItem.quantity) {
                // update cart item quantity
                cartItem.quantity = currentProduct.quantity;
              }
              // else if product not in cart
            } else {
              setCartItems([...cartItems, currentProduct]);
            }
          }}
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
          onQtyChange={(value) => () => {
            if (value === "add") {
              setQuantity(() => quantity + 1);
            } else {
              if (quantity > 1) {
                setQuantity(() => quantity - 1);
              }
            }
          }}
        />
      )}
    </>
  );
};

export default Shop;
