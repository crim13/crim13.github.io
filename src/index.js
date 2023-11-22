import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";
import Portfolio from "./pages/Portfolio";
import TaskList from "./pages/TaskList";
// import Shop from "./pages/Shop";
import ErrorPage from "./pages/NotFound";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Portfolio />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/tasklist",
    element: <TaskList />,
  },
  {
    path: "/addtocart",
    // element: <Shop />,
  },
  {
    path: "/store",
    // element: <Shop />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
