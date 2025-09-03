import { createBrowserRouter } from "react-router";
import Landingpage from "../pages/public/Landingpage";
import Login from "../pages/public/Auth/Login";
import Signup from "../pages/public/Auth/Signup";
import AuthWrapper from "../pages/public/Auth/AuthWrapper";
import Resetpassword from "../pages/public/Auth/Resetpassword";
import Onboarding from "../pages/public/Auth/Onboarding";
import DashboardWrapper from "../pages/private/DashboardWrapper";
import DiscoverCreators from "../pages/private/DiscoverCreators";
import Campaign from "../pages/private/Campaign";
import Dashboard from "../pages/private/Dashboard";
import CreateBrief from "../pages/private/CreateBrief";

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
  {
    path: "/onboarding",
    element: <Onboarding />,
  },

  {
    path:'createbrief',
    element:<CreateBrief/>
  },
  {
    element: <DashboardWrapper />,
    children: [
      {
        path: "/home",
        element: <Dashboard />,
      },
      {
        path: "/campaign",
        element: <Campaign />,
      },
      {
        path: "/discovercreators",
        element: <DiscoverCreators />,
      },
    ],
  },
]);
