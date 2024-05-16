import { useNavigate } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";

import $ from "./index.module.css";

const NavBar = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const navigate = useNavigate();

  const onMenuClick = () => {
    const menu = menuRef.current;
    // const toggle = menuRef.current;

    setShowMenu(!showMenu);

    if (menu) {
      if (showMenu) {
        menu.style.bottom = "100vh";
        // menu.style.left = "100vw";
        // menu.style.opacity = "0";
        menu.style.borderRadius = "0 0 50% 50%";
      } else {
        menu.style.bottom = "0";
        // menu.style.left = "0";
        // menu.style.opacity = "1";
        menu.style.borderRadius = "0";
      }
    }
  };

  return (
    <div className={$.TNavBarWrapper}>
      <span className={$.Logo} onClick={() => navigate("/techteam/")}></span>
      <div
        className={`${showMenu && $.Active} ${$.MenuButton}`}
        onClick={onMenuClick}
      >
        <div className={$.Mobile}></div>
      </div>
      <div
        className={$.Menu}
        ref={menuRef}
        onClick={() => {
          onMenuClick();
          // document.documentElement.scrollTop = 0;
          // setShowMenu(false);
        }}
      >
        <span onClick={() => navigate("/techteam/")}>Home</span>
        <span onClick={() => navigate("/techteam/about")}>About</span>
        <span onClick={() => navigate("/techteam/works")}>Works</span>
        <span onClick={() => navigate("/techteam/blog")}>Blog</span>
        <span onClick={() => navigate("/techteam/contact")}>Contact</span>
      </div>
    </div>
  );
};
export default NavBar;
