import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GamePreview from "./pages/productPage/GamePreview.jsx";
import Home from "./pages/homePage/Home.jsx";
import { loaderCarousel } from "./pages/homePage/Carousel.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: loaderCarousel,
      },
      {
        path: "game/:id",
        element: <GamePreview />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
