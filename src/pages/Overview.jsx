import { Grid, IconButton, MenuItem, Typography } from "@mui/material";
import { useState } from "react";
import { BsFilter } from "react-icons/bs";
import { Link, ScrollRestoration } from "react-router-dom";
import CandleStickChart from "../components/shared/ApexChartCandle";
import CampaignCard from "../components/shared/CampaignCard";
import CampaignCardApproval from "../components/shared/CampaignCardApprove";
import CustomizedSelect from "../components/shared/Select";

export default function Overview() {
  const [month, setMonth] = useState("january");
  return (
    <>
      <ScrollRestoration />
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          className="d-flex align-items-center justify-content-between"
        >
          <Typography variant="h6">Recent Campaigns</Typography>
          <div className="d-flex align-items-center">
            <Typography variant="caption">Most Funded</Typography>
            <IconButton>
              <BsFilter size={20} />
            </IconButton>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CampaignCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CampaignCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CampaignCard />
        </Grid>
        <Grid item xs={12} lg={6}>
          <div className="d-flex align-items-center justify-content-between my-2">
            <Typography variant="h6">Earnings</Typography>
            <CustomizedSelect
              onChange={(e) => setMonth(e.target.value)}
              value={month}
            >
              {[
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ].map((item, i) => (
                <MenuItem value={item.toLowerCase()} key={"month" - i}>
                  {item}
                </MenuItem>
              ))}
            </CustomizedSelect>
          </div>
          <CandleStickChart />
        </Grid>
        <Grid item xs={12} lg={6}>
          <div className="d-flex align-items-center justify-content-between my-2">
            <Typography variant="h6">New Campaigns</Typography>
            <Link to={"/campaigns"} className="text-primary">
              <Typography variant="caption">View More</Typography>
            </Link>
          </div>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <CampaignCardApproval />
            </Grid>
            <Grid item xs={12} md={6}>
              <CampaignCardApproval />
            </Grid>
            <Grid item xs={12} md={6}>
              <CampaignCardApproval />
            </Grid>
            <Grid item xs={12} md={6}>
              <CampaignCardApproval />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
