import { Grid, Paper } from "@material-ui/core";
import React from "react";
import Services from "../components/dashboard/Services";
import MainLayout from "../components/layouts/MainLayout";

export default function Dashboard() {
  return (
    <MainLayout>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <Services />
        </Paper>
      </Grid>
    </MainLayout>
  );
}
