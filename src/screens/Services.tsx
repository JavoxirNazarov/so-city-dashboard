import { Grid, Paper } from "@material-ui/core";
import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import List from "../components/services/List";

export default function Services() {
  return (
    <MainLayout>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <List />
        </Paper>
      </Grid>
    </MainLayout>
  );
}
