import * as React from "react";
import * as ReactDOM from "react-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Header from "../components/Header";

import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Register from "../pages/Register";
import Content from "../pages/Content";
import Recipe from "../pages/Recipe";
import AboutUs from "../pages/AboutUs";
import Admin from "../pages/Admin";
import { useAuth } from "../contexts/AuthContext";

export default function Router() {
  const { user } = useAuth();
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Outlet />
        </>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "login",
          // element: <Login />,
          element: user ? <Navigate to="/Recipe" /> : <Login />,
        },
        {
          path: "register",
          // element: <Register />,
          element: user ? <Navigate to="/Recipe" /> : <Register />,
        },
        {
          path: "aboutus",
          element: <AboutUs />,
        },
        {
          path: "recipe",
          // element: <Recipe />,
          element: user ? <Recipe /> : <Home />,
        },
        {
          path: "content/:id",
          element: <Content />,
        },
        {
          path: "admin",
          element: <Admin />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
