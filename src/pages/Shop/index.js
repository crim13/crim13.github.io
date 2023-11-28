import React, { useEffect, useState } from "react";

import axios from "axios";

import Header from "./Header";
import ProductPage from "./pages/ProductPage";
import CategoryPage from "./pages/CategoryPage";
import Checkout from "./pages/Checkout";

const Shop = () => {
  // CATEGORIES
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("laptops");
  // PRODUCTS
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState({});
  const [isProductPage, setIsProductPage] = useState(false);
  // CART
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState();
  // CHECKOUT
  const [isCheckoutPage, setIsCheckoutPage] = useState(false);

  // HELPERS
  const nextProduct = products.find(
    (product) => product.id === currentProduct.id + 1
  );
  const prevProduct = products.find(
    (product) => product.id === currentProduct.id - 1
  );
  const onCartDelete = (item) => () => {
    const cartCopy = cartItems.filter((prod) => prod.id !== item.id);
    setCartItems(cartCopy);
  };
  const onAddProductToCart = () => {
    if (cartItems.some((item) => item.id === currentProduct.id)) {
      const cartItem = cartItems.find((item) => item.id === currentProduct.id);
      if (currentProduct.quantity !== cartItem.quantity) {
        cartItem.quantity = currentProduct.quantity;
      }
    } else {
      setCartItems([...cartItems, currentProduct]);
    }
  };
  const onNextProduct = () => {
    if (prevProduct) {
      setCurrentProduct(prevProduct);
    } else {
      setIsProductPage(false);
    }
  };
  const onPrevProduct = () => {
    if (nextProduct) {
      setCurrentProduct(nextProduct);
    } else {
      setIsProductPage(false);
    }
  };
  const onProductQtyChange = (value) => {
    if (value === "add") {
      setQuantity(() => quantity + 1);
    } else {
      if (quantity > 1) {
        setQuantity(() => quantity - 1);
      }
    }
  };
  const onCartQtyUpdate = (operator, item) => {
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
  };

  // QUANTITY UPDATES
  useEffect(() => {
    setQuantity(1);
    const prodWithQuantity = { ...currentProduct, quantity: quantity };
    setCurrentProduct(prodWithQuantity);
  }, [currentProduct.id]);
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
        onCheckOutPage={(boolean) => setIsCheckoutPage(boolean)}
        onCartItemQty={(operator, item) => () => {
          onCartQtyUpdate(operator, item);
        }}
        onMenuClick={(category) => {
          setCurrentCategory(category);
          setIsProductPage(false);
        }}
      />
      {isCheckoutPage ? (
        <Checkout cartItems={cartItems} />
      ) : !isProductPage ? (
        <CategoryPage
          currCategory={currentCategory}
          currProducts={products}
          onProductPage={(currProduct) => {
            setCurrentProduct(currProduct);
            setIsProductPage(true);
          }}
        />
      ) : (
        <ProductPage
          currProduct={currentProduct}
          currCategory={currentCategory}
          quantity={quantity}
          onAddToCart={() => onAddProductToCart()}
          onPageNavigationBack={() => onNextProduct()}
          onPageNavigationNext={() => onPrevProduct()}
          onQtyChange={(value) => () => onProductQtyChange(value)}
        />
      )}
    </>
  );
};

export default Shop;
