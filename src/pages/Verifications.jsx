import { Chip, Grid, Typography } from "@mui/material";
import WarningAccount from "../components/warnings/WarningAccount";
import { ScrollRestoration } from "react-router-dom";
import SearchFeild from "../components/shared/SearchFeild";

export default function Verifications() {
  return (
    <>
      <ScrollRestoration />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h5">
            Verification Center{" "}
            <Chip color="success" label="4" className="mx-2" />
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <SearchFeild placeholder="Search customers" />
        </Grid>
        <Grid item xs={12} md={8}>
          <div className="bg-white w-100" style={{ minHeight: "100vh" }}>
            <WarningAccount />
          </div>
        </Grid>
      </Grid>
    </>
  );
}
