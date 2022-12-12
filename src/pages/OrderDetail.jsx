import { Email, FlightTakeoff, Phone, PinDrop } from "@mui/icons-material";
import { Chip, Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import moment from "moment/moment";
import { AiOutlineDollar } from "react-icons/ai";
import { BsCalendar2, BsCurrencyDollar } from "react-icons/bs";

export default function OrderDetail() {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div className="d-flex align-items-center">
            <Typography variant="h5">Order Details</Typography>
            <Chip
              className="mx-2 px-3"
              label="In-Progress"
              color="warning"
              size="small"
            />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="d-flex align-items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEO2XAm5iqp93uhaOFjtoOstSpBbDRlvBUuuWt9GZd5gy27yb5xZeveE8A_DjbIaGL7cQ&usqp=CAU"
              alt=""
              style={{ borderRadius: "10px", height: "160px", width: "160px" }}
            />
            <div className="mx-3 d-flex flex-column justify-content-between h-100">
              <div className="d-flex align-items-center mb-2">
                <Typography variant="h6">Huzaifa Saleem</Typography>
                <Chip
                  color="info"
                  label="Receipent"
                  className="mx-4 px-3"
                  sx={{ borderRadius: "5px" }}
                />
              </div>
              <div className="d-flex align-items-center mb-3">
                <Email color="info" />
                <Typography className="text-muted mx-2">
                  Huzi@gmail.com
                </Typography>
              </div>
              <div className="d-flex align-items-center mb-3">
                <Phone color="info" />
                <Typography className="text-muted mx-2">923344556</Typography>
              </div>
              <div className="d-flex align-items-center mb-3">
                <PinDrop color="info" />
                <Typography className="text-muted mx-2">New Jersey</Typography>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="d-flex align-items-center justify-content-end">
            <div className="mx-3 d-flex flex-column justify-content-between h-100">
              <div className="d-flex align-items-center mb-2">
                <Chip
                  color="info"
                  label="Sender"
                  className="mx-4 px-3"
                  sx={{ borderRadius: "5px" }}
                />
                <Typography variant="h6">Huzaifa Saleem</Typography>
              </div>
              <div className="d-flex align-items-center justify-content-end mb-3">
                <Typography className="text-muted mx-2">
                  Huzi@gmail.com
                </Typography>
                <Email color="info" />
              </div>
              <div className="d-flex align-items-center justify-content-end mb-3">
                <Typography className="text-muted mx-2">923344556</Typography>
                <Phone color="info" />
              </div>
              <div className="d-flex align-items-center justify-content-end mb-3">
                <Typography className="text-muted mx-2">New Jersey</Typography>
                <PinDrop color="info" />
              </div>
            </div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEO2XAm5iqp93uhaOFjtoOstSpBbDRlvBUuuWt9GZd5gy27yb5xZeveE8A_DjbIaGL7cQ&usqp=CAU"
              alt=""
              style={{ borderRadius: "10px", height: "160px", width: "160px" }}
            />
          </div>
        </Grid>

        <Grid item xs={12} md={10}>
          <Typography variant="h5">More Details</Typography>
          <Typography className="mt-3 text-muted" sx={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            at, harum ad molestias consectetur quisquam incidunt illum et
            architecto ipsa accusantium veniam qui dolor? Eius ad soluta minus
            cum quos excepturi harum reiciendis libero cumque iste, corrupti
            quam. In quisquam distinctio laudantium quod cupiditate quas unde
            fuga vero dolorum ut itaque magnam similique neque consequatur.
          </Typography>
        </Grid>
        <Grid item xs={12} md={8}>
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
                  style={{
                    flex: 1,
                    border: "2px  dashed #444",
                  }}
                ></Divider>
                <FlightTakeoff className="mx-2 " style={{ color: "#777" }} />
                <Divider
                  textAlign="center"
                  className="w-100 m-0"
                  style={{
                    flex: 1,
                    border: "2px dashed #444",
                  }}
                ></Divider>
              </div>
              <div className="d-flex justify-content-center mt-2">
                <Typography
                  variant="caption"
                  style={{ fontWeight: "bold", color: "#444" }}
                >
                  {moment().format("DD MMM YYYY")}
                </Typography>
              </div>
            </div>
            <div>
              <Typography className="text-success">ISB</Typography>
              <Typography variant="caption">PK</Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={5}>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <div className="d-flex align-items-center">
                <Box
                  className="p-3"
                  sx={{
                    background: "#FFFFFF",
                    boxShadow: " 0px 13px 36px rgba(0, 0, 0, 0.03)",
                    borderRadius: "10px",
                  }}
                >
                  <BsCurrencyDollar size={25} className="text-info" />
                </Box>
                <div className="mx-2">
                  <Typography variant="caption" className="text-muted">
                    Total Payment
                  </Typography>
                  <Typography>$23</Typography>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center mx-3">
              <div className="d-flex align-items-center">
                <Box
                  className="p-3"
                  sx={{
                    background: "#FFFFFF",
                    boxShadow: " 0px 13px 36px rgba(0, 0, 0, 0.03)",
                    borderRadius: "10px",
                  }}
                >
                  <BsCalendar2 size={25} className="text-info" />
                </Box>
                <div className="mx-2">
                  <Typography variant="caption" className="text-muted">
                    Delivery Date
                  </Typography>
                  <Typography>30 Dec 2022</Typography>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
