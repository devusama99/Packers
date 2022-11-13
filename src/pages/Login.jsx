import { Button, Container, Typography } from "@mui/material";
import { Link, ScrollRestoration } from "react-router-dom";
import Footer from "../components/shared/Footer";
import TextFeildCustom from "../components/shared/TextFeild";

export default function Login() {
  return (
    <>
      <ScrollRestoration />
      <div className="mh-100vh d-flex align-items-center login-page">
        <Container
          maxWidth="xs"
          className="d-flex flex-column justify-content-center align-items-center "
        >
          <Typography variant="h3">👋🏻</Typography>
          <Typography variant="h4">Welcome Admin</Typography>
          <Typography className="text-muted">
            Please login to continue
          </Typography>
          <form className="w-100 mt-4">
            <TextFeildCustom label="Email" variant="filled" fullWidth />
            <TextFeildCustom label="Password" variant="filled" fullWidth />
            <Link to={"/admin"} className="text-decoration-none">
              <Button
                variant="contained"
                color="primary"
                sx={{ padding: 2 }}
                className="text-capitalize my-2"
                fullWidth
                disableElevation
              >
                Login
              </Button>
            </Link>
            <Typography className="my-2 text-center ">
              <Link className="text-decoration-none text-dark" to={""}>
                Forget Password?
              </Link>
            </Typography>
          </form>
        </Container>
        <div
          style={{ position: "absolute", bottom: 0, right: 0 }}
          className="d-none d-md-block"
        >
          <div style={{ position: "relative" }}>
            <img
              style={{
                position: "absolute",
                right: 0,
                top: "50%",
                transform: "translateY(-58%)",
              }}
              src={require("../assets/login-circle-1.png")}
              alt=""
              className="login-circle-1"
            />
            <img
              src={require("../assets/login-circle-2.png")}
              alt=""
              className="login-circle-2"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
