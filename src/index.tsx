import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";
import Portfolio from "./pages/Portfolio";
import TaskList from "./pages/TaskList";
import Shop from "./pages/Shop";
import ErrorPage from "./pages/NotFound";
import TechTeam, { routes as techRoutes } from "./pages/TechTeam";
import QuizGame from "./pages/QuizGame";
import Ecommerce, { routes as eCommRoutes } from "./pages/Ecommerce";

import PlayGround from "./pages/PlayGround";

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
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/techteam",
    element: <TechTeam />,
    children: techRoutes,
  },
  {
    path: "/quizgame",
    element: <QuizGame />,
    // children: quizRoutes,
  },
  {
    path: "/ecommerce",
    element: <Ecommerce />,
    children: eCommRoutes,
  },
  {
    path: "/playground",
    element: <PlayGround />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
