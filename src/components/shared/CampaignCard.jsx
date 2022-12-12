import {
  ChevronRight,
  FlightTakeoff,
  Inventory,
  KeyboardDoubleArrowRight,
} from "@mui/icons-material";
import {
  Typography,
  Box,
  IconButton,
  Button,
  Divider,
  Avatar,
  Chip,
} from "@mui/material";
import moment from "moment";
import { BsThreeDotsVertical, BsEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const styles = {
  background: "#FFFFFF",
  boxShadow: "0px 4px 71px rgba(0, 0, 0, 0.04)",
  borderRadius: "15px",
  padding: 2,
  width: "100%",
};

export default function CampaignCard() {
  return (
    <Box sx={{ ...styles }}>
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <Typography className="text-info">LON</Typography>
          <Typography variant="caption">UK</Typography>
        </div>
        <div style={{ flex: 1 }} className="mx-3">
          <div className="d-flex align-items-center w-100">
            <Divider
              textAlign="center"
              className="w-100 m-0"
              style={{ flex: 1, borderColor: "#777", borderStyle: "dashed" }}
            ></Divider>
            <FlightTakeoff className="mx-2 " style={{ color: "#777" }} />
            <Divider
              textAlign="center"
              className="w-100 m-0"
              style={{ flex: 1, borderColor: "#777", borderStyle: "dashed" }}
            ></Divider>
          </div>
          <div className="d-flex justify-content-center mt-2">
            <Typography
              variant="caption"
              style={{ fontWeight: "bold", color: "#444" }}
            >
              {moment().format("DD MMM")}
            </Typography>
          </div>
        </div>
        <div>
          <Typography className="text-success">ISB</Typography>
          <Typography variant="caption">PK</Typography>
        </div>
      </div>
      <Typography className="my-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Typography>
      <div className="d-flex align-items-center justify-content-between my-4">
        <div className="d-flex">
          <Avatar
            src="https://cdna.artstation.com/p/users/avatars/001/902/902/large/0d7466b3c86d1d8e22e52c64ecfdad1c.jpg?1586201939"
            sx={{ width: 24, height: 24 }}
          ></Avatar>
          <div className="mx-1">
            <Typography sx={{ fontSize: "14px" }}>John Doe</Typography>
            <Typography className="text-muted" sx={{ fontSize: "12px" }}>
              Reciepent
            </Typography>
          </div>
        </div>
        <div className="d-flex">
          <Avatar
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVV7493YAF6xA2g50M-5WjJ9xnrh7f0bmsZA&usqp=CAU"
            sx={{ width: 24, height: 24 }}
          ></Avatar>
          <div className="mx-1">
            <Typography sx={{ fontSize: "14px" }}>John Doe</Typography>
            <Typography className="text-muted" sx={{ fontSize: "12px" }}>
              Sender
            </Typography>
          </div>
        </div>
        <div>
          <Chip label="In-progress" color="warning"></Chip>
        </div>
      </div>
      <div className="mt-4 d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <Inventory className="text-info" />
          <Typography className="mx-2">5KG</Typography>
        </div>
        <Link className="text-decoration-none text-dark" to={"1234"}>
          <Typography variant="caption" className="cursor-pointer">
            More Details <KeyboardDoubleArrowRight />
          </Typography>
        </Link>
      </div>
    </Box>
  );
}
