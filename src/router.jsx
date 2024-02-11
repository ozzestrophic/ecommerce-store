import App from "./App.jsx";
import GamePreview from "./pages/productPage/GamePreview.jsx";
import Home from "./pages/homePage/Home.jsx";

import { createBrowserRouter } from "react-router-dom";

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
    ],
  },
]);

export default router;
