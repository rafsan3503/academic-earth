import { createBrowserRouter } from "react-router-dom";
import Main from '../Layouts/Main'
import Home from "../Pages/Home";
import Login from '../Pages/Auth/Login';
import SignUp from '../Pages/Auth/SignUp';
import Blog from '../Pages/Blog';
import Faq from "../Pages/Faq";
import Courses from "../Pages/Courses/Courses";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
        element: <Main />,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
        },
        {
            path: "/login",
            element: <Login/>
        },
        {
            path: '/signup',
            element: <SignUp/>
        },
        {
            path: '/blogs',
            element: <Blog/>
        },
        {
            path: '/faq',
            element: <Faq/>
        },
        {
            path: '/courses',
            element: <Courses/>
        }
    ],
  },
]);

export default router;