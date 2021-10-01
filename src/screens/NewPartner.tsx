import { Button, Paper, Typography } from "@material-ui/core";
import { Box } from "@material-ui/system";
import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import PartnerInfo from "../components/new-partner/PartnerInfo";

export default function NewService() {
  return (
    <MainLayout>
      <Paper variant="outlined" sx={{ my: 1, p: { xs: 2, md: 2 } }}>
        <Typography component="h1" variant="h4" align="center">
          Новый партнёр
        </Typography>

        <PartnerInfo />

        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="contained" sx={{ mt: 3, ml: 1 }}>
            Завершить
          </Button>
        </Box>
      </Paper>
    </MainLayout>
  );
}
