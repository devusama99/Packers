import { createBrowserRouter } from "react-router-dom";
import AdminTemplate from "../page-templates/AdminTemplate";
import Campaign from "../pages/Campaign";
import FundsProcessing from "../pages/FundsProcessing";
import Home from "../pages/Login";
import Overview from "../pages/Overview";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import Users from "../pages/Users";
import Wallet from "../pages/Wallet";
import Warnings from "../pages/Warnings";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/admin",
    element: <AdminTemplate />,
    children: [
      {
        path: "",
        element: <Overview />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "campaigns",
        element: <Campaign />,
      },
      {
        path: "wallet",
        element: <Wallet />,
      },
      {
        path: "funds-processing",
        element: <FundsProcessing />,
      },
      {
        path: "warnings",
        element: <Warnings />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);
