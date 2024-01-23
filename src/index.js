import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Dolls from "./pages/Dolls";
import Clothes from "./pages/Clothes";
import Accessaries from "./pages/Accessaries";
import Wishlist from "./pages/Wishlist";
import Signin from "./auth/Signin";
import Signup from "./auth/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: "/", element: <Home /> },
      { path: "products", element: <Home /> },
      { path: "products/:keyword", element: <Home /> },
      { path: "signin", element: <Signin /> },
      { path: "signup", element: <Signup /> },
      { path: "/dolls", element: <Dolls /> },
      { path: "/dolls/:keyword", element: <Dolls /> },
      { path: "/clothes", element: <Clothes /> },
      { path: "/clothes/:keyword", element: <Clothes /> },
      { path: "/accessaries", element: <Accessaries /> },
      { path: "/accessaries/:keyword", element: <Accessaries /> },
      { path: "wishlist", element: <Wishlist /> },
    ],
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
