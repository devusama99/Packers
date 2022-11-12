import { Typography, Box, Button, Avatar } from "@mui/material";
import { BsExclamationTriangleFill } from "react-icons/bs";

const styles = {
  background: "#FFFFFF",
  boxShadow: "0px 4px 71px rgba(0, 0, 0, 0.06)",
  borderRadius: "15px",
  padding: 2,
};

export default function WarningAccount() {
  const warnings = Math.floor(Math.random() * 4) + 1;
  return (
    <Box sx={{ ...styles }}>
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <Avatar src="https://i.pravatar.cc/300" />
          <div className="mx-2">
            <Typography className="p-0 m-0" sx={{ lineHeight: 1 }}>
              Shaheer
            </Typography>
            <Typography
              variant="caption"
              className="text-muted p-0"
              sx={{ lineHeight: 1 }}
            >
              Shaheer@gmail.com
            </Typography>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <BsExclamationTriangleFill className="text-danger mx-1" />
          <Typography variant="body2">{warnings}</Typography>
        </div>
      </div>
      <Typography
        variant="body2"
        className="my-3 text-muted text-justified"
        sx={{ lineHeight: 1.2 }}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In laborum
        alias.
      </Typography>
      <div className=" d-flex justify-content-between">
        <Button
          size="small"
          className="text-capitalize"
          variant="contained"
          disableElevation
          disabled={warnings < 2}
        >
          Remove User
        </Button>
        <div className="d-flex align-items-start">
          <img
            src={require("../../assets/motomobile.png")}
            width="20"
            alt="company-logo"
            className="mx-2"
          />
          <div className="d-flex flex-column align-items-end">
            <Typography variant="body2">Moto Mobile</Typography>
            <Typography variant="caption" className="text-muted">
              warned by
            </Typography>
          </div>
        </div>
      </div>
    </Box>
  );
}
