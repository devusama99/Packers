import { createBrowserRouter } from "react-router-dom";
import AdminTemplate from "../page-templates/AdminTemplate";
import FundsProcessing from "../pages/FundsProcessing";
import Home from "../pages/Login";
import Overview from "../pages/Overview";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import Users from "../pages/Users";
import Wallet from "../pages/Wallet";
import Warnings from "../pages/Verifications";
import Orders from "../pages/Orders";
import OrderDetail from "../pages/OrderDetail";
import Verifications from "../pages/Verifications";

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
        path: "orders",
        element: <Orders />,
      },
      {
        path: "orders/:id",
        element: <OrderDetail />,
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
        path: "verifications",
        element: <Verifications />,
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
