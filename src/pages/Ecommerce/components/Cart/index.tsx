import React, { useEffect } from "react";
import { useProductContext } from "../../data";
import $ from "./index.module.css";

interface CartProps {
  closeCart: () => void;
}

const Cart: React.FC<CartProps> = ({ closeCart }) => {
  const { updateCart, cart } = useProductContext();

  const onDeleteItem = (index: number) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    updateCart(updatedCart);
    console.log(cart);
  };
  return (
    <div className={$.Cart}>
      <div className={$.Header}>
        <h3>Shopping Cart ({cart.length})</h3>
        <span className={$.Close} onClick={closeCart}></span>
      </div>
      <div className={$.Products}>
        {cart.map((item: any, index) => (
          <div key={index} className={$.ProductCard}>
            <img src={item.image} alt={item.title} />
            <div className={$.Details}>
              <h4>{item.title}</h4>
              <span>${item.price}</span>
              <span className={$.Quantity}>
                <button>-</button>
                <p>1</p>
                <button>+</button>
              </span>
            </div>
            <span
              className={$.Delete}
              onClick={() => onDeleteItem(index)}
            ></span>
          </div>
        ))}
      </div>
      <div className={$.Subtotal}>
        <span>
          <h3>Subtotal</h3>
          <h3>$**</h3>
        </span>
        <span>
          <input type="checkbox" />I agree with Terms & Conditions
        </span>
        {/* <button>View Cart</button> */}
        <button>CheckOut</button>
      </div>
    </div>
  );
};

export default Cart;
