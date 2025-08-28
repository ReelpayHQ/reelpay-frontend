import { createBrowserRouter } from "react-router";
import Landingpage from "../pages/public/Landingpage";
import Login from "../pages/public/Auth/Login";
import Signup from "../pages/public/Auth/Signup";
import AuthWrapper from "../pages/public/Auth/AuthWrapper";
import Resetpassword from "../pages/public/Auth/Resetpassword";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Landingpage />,
  },
  {
    element: <AuthWrapper />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "/reset-password",
    element: <Resetpassword />,
  },
]);
