import { Grid, Typography } from "@mui/material";
import { ScrollRestoration } from "react-router-dom";
import CampaignCard from "../components/shared/CampaignCard";

export default function Campaign() {
  return (
    <>
      <ScrollRestoration />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6">Campaign</Typography>
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
        <Grid item xs={12} sm={6} md={4}>
          <CampaignCard />
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
        <Grid item xs={12} sm={6} md={4}>
          <CampaignCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CampaignCard />
        </Grid>
      </Grid>
    </>
  );
}
