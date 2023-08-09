import { createBrowserRouter } from "react-router-dom";

// importing element pages
import Main from "./pages/Main";
import News from "./pages/News";
import Auth from "./pages/Auth";
import CreateNews from "./pages/CreateNews";

export const Router = createBrowserRouter([
    {
      path: '/',
      element: <Main />
    },
    {
      path: '/news/:newsId',
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