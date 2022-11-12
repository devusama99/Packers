import { Divider, List, ListItem, Typography } from "@mui/material";
import { AppLogo } from "../../assets/icons";
import {
  BsGrid,
  BsFillGridFill,
  BsPerson,
  BsPersonFill,
  BsMegaphone,
  BsMegaphoneFill,
  BsExclamationTriangleFill,
  BsExclamationTriangle,
  BsPeople,
  BsPeopleFill,
  BsGear,
  BsGearFill,
  BsBoxArrowRight,
} from "react-icons/bs";
import { IoWalletOutline, IoWallet } from "react-icons/io5";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { HiCurrencyDollar } from "react-icons/hi2";
import { Link, useLocation } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { theme } from "../../styles/MUItheme";
import SearchFeild from "../shared/SearchFeild";

export default function DrawerList() {
  const { pathname } = useLocation();
  const [activeLink, setActiveLink] = useState("overview");

  const checkURL = useCallback(() => {
    if (pathname === "/admin") setActiveLink("overview");
    else if (pathname === "/admin/users") setActiveLink("users");
    else if (pathname === "/admin/campaigns") setActiveLink("campaigns");
    else if (pathname === "/admin/wallet") setActiveLink("wallet");
    else if (pathname === "/admin/funds-processing")
      setActiveLink("funds-processing");
    else if (pathname === "/admin/warnings") setActiveLink("warnings");
    else if (pathname === "/admin/settings") setActiveLink("settings");
    else if (pathname === "/admin/profile") setActiveLink("profile");
  }, [pathname]);

  useEffect(() => {
    checkURL();
  }, [checkURL]);

  return (
    <div>
      <div>
        <Link to={"/admin"} className="d-flex justify-content-center">
          <div className="d-none d-md-block">
            <AppLogo />
          </div>
          <img
            src={require("../../assets/app-logo.png")}
            alt="app-logo"
            className="d-block d-md-none"
          />
        </Link>
        <List
          sx={{
            [theme.breakpoints.up("md")]: {
              paddingRight: 2,
            },
          }}
        >
          <ListItem className="d-lg-none">
            <SearchFeild
              placeholder="Search campaigns,users..."
              // sx={{ minWidth: "280px" }}
            />
          </ListItem>
          <Link to={"/admin"} className="text-decoration-none text-dark">
            {" "}
            <ListItem
              className={`p-3 px-4 nav-item ${
                activeLink === "overview" ? "nav-item-active " : ""
              }`}
            >
              <div style={{ width: "50px" }}>
                {activeLink !== "overview" ? (
                  <BsGrid size={25} />
                ) : (
                  <BsFillGridFill size={25} />
                )}
              </div>
              <Typography>Overview</Typography>
            </ListItem>
          </Link>
          <Link to={"/admin/users"} className="text-decoration-none text-dark">
            {" "}
            <ListItem
              className={`p-3 px-4 nav-item ${
                activeLink === "users" ? "nav-item-active" : ""
              }`}
            >
              <div style={{ width: "50px" }}>
                {activeLink !== "users" ? (
                  <BsPeople size={25} />
                ) : (
                  <BsPeopleFill size={25} />
                )}
              </div>
              <Typography>Users</Typography>
            </ListItem>
          </Link>
          <Link
            to={"/admin/campaigns"}
            className="text-decoration-none text-dark"
          >
            {" "}
            <ListItem
              className={`p-3 px-4 nav-item ${
                activeLink === "campaigns" ? "nav-item-active" : ""
              }`}
            >
              <div style={{ width: "50px" }}>
                {activeLink !== "campaigns" ? (
                  <BsMegaphone size={20} />
                ) : (
                  <BsMegaphoneFill size={20} />
                )}
              </div>
              <Typography>Campaign</Typography>
            </ListItem>
          </Link>
          <Link to={"/admin/wallet"} className="text-decoration-none text-dark">
            {" "}
            <ListItem
              className={`p-3 px-4 nav-item ${
                activeLink === "wallet" ? "nav-item-active" : ""
              }`}
            >
              <div style={{ width: "50px" }}>
                {activeLink !== "wallet" ? (
                  <IoWalletOutline size={25} />
                ) : (
                  <IoWallet size={25} />
                )}
              </div>
              <Typography>Wallet</Typography>
            </ListItem>
          </Link>
          <Link
            to={"/admin/funds-processing"}
            className="text-decoration-none text-dark"
          >
            {" "}
            <ListItem
              className={`p-3 px-4 nav-item ${
                activeLink === "funds-processing" ? "nav-item-active" : ""
              }`}
            >
              <div style={{ width: "50px" }}>
                {activeLink !== "funds-processing" ? (
                  <AiOutlineDollarCircle size={25} />
                ) : (
                  <HiCurrencyDollar size={25} />
                )}
              </div>
              <Typography>Funds Processing</Typography>
            </ListItem>
          </Link>
          <Link
            to={"/admin/warnings"}
            className="text-decoration-none text-dark"
          >
            {" "}
            <ListItem
              className={`p-3 px-4 nav-item ${
                activeLink === "warnings" ? "nav-item-active" : ""
              }`}
            >
              <div style={{ width: "50px" }}>
                {activeLink !== "warnings" ? (
                  <BsExclamationTriangle size={20} />
                ) : (
                  <BsExclamationTriangleFill size={20} />
                )}
              </div>
              <Typography>Warnings</Typography>
            </ListItem>
          </Link>
        </List>
        <Divider className="m-2 mx-4" sx={{ border: "1px solid #ccc" }} />
        <List sx={{ paddingRight: 5 }}>
          <Link
            to={"/admin/settings"}
            className="text-decoration-none text-dark"
          >
            {" "}
            <ListItem
              className={`p-3 px-4 nav-item ${
                activeLink === "settings" ? "nav-item-active" : ""
              }`}
            >
              <div style={{ width: "50px" }}>
                {activeLink !== "settings" ? (
                  <BsGear size={20} />
                ) : (
                  <BsGearFill size={20} />
                )}
              </div>
              <Typography>Settings</Typography>
            </ListItem>
          </Link>
          <Link
            to={"/admin/profile"}
            className="text-decoration-none text-dark"
          >
            {" "}
            <ListItem
              className={`p-3 px-4 nav-item ${
                activeLink === "profile" ? "nav-item-active" : ""
              }`}
            >
              <div style={{ width: "50px" }}>
                {activeLink !== "profile" ? (
                  <BsPerson size={25} />
                ) : (
                  <BsPersonFill size={25} />
                )}
              </div>
              <Typography>Profile</Typography>
            </ListItem>
          </Link>
        </List>
      </div>
      <List sx={{ paddingRight: 3 }}>
        <Link to={""} className="text-decoration-none text-dark">
          {" "}
          <ListItem className={`p-3 px-4 mr-3 nav-item `}>
            <div style={{ width: "50px" }}>
              <BsBoxArrowRight size={23} />
            </div>
            <Typography>Signout</Typography>
          </ListItem>
        </Link>
      </List>
    </div>
  );
}
