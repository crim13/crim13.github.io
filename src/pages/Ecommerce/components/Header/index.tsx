import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { useProductContext } from "../../data";
import Cart from "../Cart";

import $ from "./index.module.css";
import ProductCard from "../ProductCard";
const Header = () => {
  const { cart, products } = useProductContext();
  const [showCart, setShowCart] = useState<boolean>(false);
  const [showFavorites, setShowFavorites] = useState<boolean>(false);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");
  const [searchResult, setSearchResult] = useState<any[]>([]);

  const navigate = useNavigate();
  const onShowFavs = () => {
    setShowFavorites(!showFavorites);
  };
  const onShowCart = () => {
    setShowSearch(false);
    setShowCart(!showCart);
  };
  const onShowSearch = () => {
    setShowCart(false);
    setShowSearch(!showSearch);
  };

  useEffect(() => {
    const filtered = products.filter(
      (element) =>
        element.title.toLowerCase().includes(searchText.toLowerCase()) ||
        element.description.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchResult(filtered);
  }, [searchText]);

  return (
    <div className={$.Header}>
      <div className={$.Row1}>
        <div>
          <span>+222-1800</span>
          <span> | </span>
          <span>contact@gifty.com</span>
        </div>
        <div>
          <span>Free delivery and 20% off your first order.</span>
        </div>
      </div>
      <div className={$.Row2}>
        {/* <div className={$.MobileMenu}>
          <span className={$.MenuIcon}></span>
          <div className={$.MenuWrapper}>
            <span onClick={() => navigate("/ecommerce/")}>Home</span>
            <span onClick={() => navigate("/")}>Shop</span>
            <span onClick={() => navigate("/")}>About</span>
            <span onClick={() => navigate("/")}>Contact</span>
          </div>
        </div>
        <div className={$.DesktopMenu}>
          <span onClick={() => navigate("/ecommerce/")}>Home</span>
          <span onClick={() => navigate("/")}>Shop</span>
          <span onClick={() => navigate("/")}>About</span>
          <span onClick={() => navigate("/")}>Contact</span>
          <div className={$.SecondMenu}></div>
        </div> */}
        <div className={$.Logo}>
          <img alt="logo" />
        </div>
        <div className={$.FunctionButtons}>
          <span className={$.SearchIcon} onClick={() => onShowSearch()}></span>
          <span className={$.CartIcon} onClick={() => onShowCart()}>
            <span>{cart.length}</span>
          </span>
          <span className={$.FavIcon} onClick={() => onShowFavs()}></span>
        </div>
      </div>
      <div className={`${showCart ? $.ShowCart : ""} ${$.CartWrapper}`}>
        <Cart closeCart={() => onShowCart()} />
      </div>
      <div
        className={`${showFavorites ? $.ShowFav : ""} ${$.FavWrapper}`}
      ></div>
      <div className={`${showSearch ? $.ShowSearch : ""} ${$.SearchWrapper}`}>
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        {searchResult.length === 0 ? (
          searchText.length > 0 ? (
            <div> Sorry, there are no results for: "{searchText}" </div>
          ) : null
        ) : (
          <div className={$.SearchResult}>
            {searchResult.map((result) => (
              <div className={$.ResultCard}>
                <ProductCard property={result} />
              </div>
            ))}
          </div>
        )}
      </div>
      <div
        onClick={() => {
          setShowCart(false);
          setShowSearch(false);
        }}
        className={`${$.Overlay} ${showSearch || showCart ? $.On : ""}`}
      ></div>
    </div>
  );
};
export default Header;
