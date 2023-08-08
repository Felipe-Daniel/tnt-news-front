import { createBrowserRouter } from "react-router-dom";

// importing element pages
import Home from "./pages/Home";

export const Router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    }
]);  