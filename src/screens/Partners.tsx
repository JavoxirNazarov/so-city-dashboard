import { Grid, Paper } from "@material-ui/core";
import React from "react";
import List from "../components/partners/List";
import MainLayout from "../components/layouts/MainLayout";

export default function Partners() {
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
