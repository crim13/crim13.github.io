import React, { useEffect } from "react";
import { useProductContext } from "../../data";

import $ from "./index.module.css";
interface ProductCardProps {
  property: any;
  addToFav?: (prod: any) => void;
  seeProduct?: (prod: any) => void;
  cardType?: string;
}

const ProductCard = (props: ProductCardProps) => {
  const { property, addToFav, seeProduct, cardType } = props;

  const { updateCart, cart } = useProductContext();

  const addToCart = (product: any) => {
    const newCart = [...cart, product];
    updateCart(newCart);
    console.log(newCart);
  };
  return (
    <div className={`${$.CardWrapper} ${cardType === "ls" ? $.ListCard : ""}`}>
      <div className={$.CardRow1}>
        {cardType === "grid" ? (
          <div className={$.ProductButtons}>
            <button>
              <span
                className={$.Like}
                onClick={() => addToFav && addToFav(property)}
              ></span>
            </button>
            <button>
              <span
                className={$.See}
                onClick={() => seeProduct && seeProduct(property)}
              ></span>
            </button>
            <button>
              <span
                className={$.Add}
                onClick={() => addToCart(property)}
              ></span>
            </button>
          </div>
        ) : (
          ""
        )}
        <img className={$.Image} src={property.image}></img>
      </div>
      <div className={$.CardRow2}>
        <span className={$.Title}>{property.title}</span>
        <span className={$.Rating}>
          {property.rating.rate} <span className={$.Star}></span> (
          {property.rating.count}reviews)
        </span>
        <span className={$.Price}>£{property.price}</span>
        {cardType === "ls" ? (
          <>
            <span className={$.Description}>{property.description}</span>

            <div className={$.ProductButtons}>
              <button onClick={() => addToCart(property)}>
                <span className={$.Add}>ADD TO CART</span>
              </button>
              <button className={$.Like}>
                <span onClick={() => addToFav && addToFav(property)}></span>
              </button>
              {/* <button>
              <span
              className={$.See}
              onClick={() => seeProduct && seeProduct(property)}
              ></span>
            </button> */}
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default ProductCard;
