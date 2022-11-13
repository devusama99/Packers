import {
  Divider,
  Grid,
  Typography,
  Badge,
  Box,
  Container,
} from "@mui/material";
import { BsCalendar3, BsBell } from "react-icons/bs";

import { Outlet } from "react-router-dom";
import moment from "moment";
import SearchFeild from "../components/shared/SearchFeild";
import AccountMenu from "../components/navbar/ProfileMenu";
import DrawerList from "../components/drawer/DrawerList";
import DrawerCustom from "../components/drawer/Drawer";

export default function AdminTemplate() {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item md={2} className="d-none d-xl-block">
          <nav className="drawer shadow py-3 flex-column justify-content-between">
            <DrawerList />
          </nav>
        </Grid>
        <Grid item xs={12} lg={10} className="m-0">
          <Container maxWidth="xl" className="py-md-3 mb-5 mh-100vh ">
            <div
              className=" py-md-2 mt-2 nav-top"
              style={{
                position: "sticky",
                backgroundColor: "rgba(256,256,256,0.4)",
                top: 0,
                opacity: 1,
                zIndex: 10,
                backdropFilter: "blur(5px)",
              }}
            >
              <div className="d-flex align-items-center justify-content-between">
                <div
                  className="d-flex align-items-center w-100"
                  style={{ height: "60px" }}
                >
                  <div className="d-lg-none">
                    <DrawerCustom />
                  </div>
                  <div className=" d-none d-lg-flex align-items-center">
                    <BsCalendar3 size={25} />
                    <Typography className="mx-2">
                      {moment().format("DD MMM")}
                    </Typography>
                  </div>
                  <Divider
                    orientation="vertical"
                    variant="middle"
                    flexItem
                    sx={{ borderColor: "#aaa" }}
                    className="mx-4 d-none d-lg-block"
                  />
                  <div className="d-none d-lg-flex align-items-center">
                    <Typography className="mx-2">Hi Admin! 👋🏻</Typography>
                  </div>
                  <Divider
                    orientation="vertical"
                    variant="middle"
                    flexItem
                    sx={{ borderColor: "#aaa" }}
                    className="mx-4 d-none d-lg-block"
                  />
                  <div className="d-none d-lg-block">
                    <SearchFeild
                      placeholder="Search campaigns,users..."
                      sx={{ minWidth: "350px" }}
                    />
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <Box
                    sx={{
                      borderRadius: "50%",
                      border: "1px dotted #bbb",
                      padding: 1.2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    className={"mx-3"}
                  >
                    <Badge color="primary" variant="dot" invisible={false}>
                      <BsBell size={20} />
                    </Badge>
                  </Box>
                  <AccountMenu />
                </div>
              </div>
            </div>
            <Divider sx={{ borderColor: " #bbb" }} className="my-2 mb-md-4" />
            <Outlet />
          </Container>
        </Grid>
      </Grid>
    </>
  );
}
