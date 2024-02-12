import App from "./App.jsx";
import GamePreview from "./pages/productPage/GamePreview.jsx";
import Home from "./pages/homePage/Home.jsx";

import { createBrowserRouter } from "react-router-dom";
import Cart from "./pages/cartPage/Cart.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "game/:id",
        element: <GamePreview />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

export default router;
