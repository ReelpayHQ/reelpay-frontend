import { createBrowserRouter } from "react-router";
import Landingpage from "../pages/public/Landingpage";
import Authpage from "../pages/public/Authpage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Landingpage />,
  },
  {
    path: "/auth",
    element: <Authpage />,
  },
]);
