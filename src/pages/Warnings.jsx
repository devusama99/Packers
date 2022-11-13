import { Grid, Typography } from "@mui/material";
import WarningAccount from "../components/warnings/WarningAccount";
import { ScrollRestoration } from "react-router-dom";

export default function Warnings() {
  return (
    <>
      <ScrollRestoration />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6">Warnings</Typography>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <WarningAccount />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <WarningAccount />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <WarningAccount />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <WarningAccount />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <WarningAccount />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <WarningAccount />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <WarningAccount />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <WarningAccount />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <WarningAccount />
        </Grid>
      </Grid>
    </>
  );
}
