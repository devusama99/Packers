import { Typography, Box, IconButton, Button } from "@mui/material";
import { BsThreeDotsVertical, BsEyeFill } from "react-icons/bs";

const styles = {
  background: "#FFFFFF",
  boxShadow: "0px 4px 71px rgba(0, 0, 0, 0.04)",
  borderRadius: "15px",
  padding: 2,
};

export default function CampaignCard() {
  return (
    <Box sx={{ ...styles }}>
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <img
            src="https://i.pinimg.com/originals/f7/57/54/f757543c5a7ff5dbb7c1fa00f331a427.jpg"
            alt="company-logo"
            width={60}
            height={40}
            className="border rounded"
          />
          <div className="mx-2">
            <Typography className="p-0 m-0" sx={{ lineHeight: 1 }}>
              Company Name
            </Typography>
            <Typography
              variant="caption"
              className="text-muted p-0"
              sx={{ lineHeight: 1 }}
            >
              Company Type
            </Typography>
          </div>
        </div>
        <IconButton>
          <BsThreeDotsVertical size={18} />
        </IconButton>
      </div>
      <Typography
        variant="body2"
        className="my-3 text-muted text-justified"
        sx={{ lineHeight: 1.2 }}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In laborum
        alias.
      </Typography>
      <div className=" d-flex justify-content-end">
        <Button
          sx={{ padding: 0.3 }}
          className="text-capitalize d-flex align-items-center"
        >
          <BsEyeFill className="text-primary mx-1" />
          <Typography variant="caption">View</Typography>
        </Button>
      </div>
    </Box>
  );
}
