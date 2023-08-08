import { createBrowserRouter } from "react-router-dom";

// importing element pages
import Home from "./pages/Main";
import News from "./pages/News";
import Auth from "./pages/Auth";
import CreateNews from "./pages/CreateNews";

export const Router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/news/:news-id',
      element: <News />
    },
    {
      path: '/auth',
      element: <Auth />,
    },
    {
      path: '/create-news',
      element: <CreateNews />,
    }
]);  