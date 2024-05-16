import { Outlet } from "react-router-dom";
// import React, { useEffect } from "react";

import NavBar from "./Pages/NavBar";
import Footer from "./Pages/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Works from "./Pages/Works";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";

export const routes = [
  {
    path: "/techteam/",
    element: <Home />,
  },
  {
    path: `/techteam/about`,
    element: <About />,
  },
  {
    path: "works/",
    element: <Works />,
  },
  {
    path: `blog/`,
    element: <Blog />,
  },
  {
    path: `contact/`,
    element: <Contact />,
  },
];

const TechTeam = () => {
  // Need solution
  // useEffect(() => {
  //   window.scrollTo({ top: 1, behavior: "smooth" });
  // }, [window.location.pathname]);
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default TechTeam;
