import { Button, Paper } from "@material-ui/core";
import { Box } from "@material-ui/system";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import PartnerInfo from "../components/partner/PartnerInfo";
import PaymentForm from "../components/partner/PaymentForm";

export default function Partner() {
  const { id } = useParams<{ id: string }>();
  const [activeStep, setActiveStep] = useState("partner");

  // const creating = id === "new";

  const handleNext = () => {
    setActiveStep("services");
  };

  const handleBack = () => {
    setActiveStep("partner");
  };

  return (
    <MainLayout>
      <Paper variant="outlined" sx={{ my: 1, p: { xs: 2, md: 2 } }}>
        {/* <Typography component="h1" variant="h4" align="center">
          {creating ? "Новый партнёр" : id}
        </Typography> */}

        {activeStep === "partner" ? (
          <PartnerInfo partnerID={id} />
        ) : (
          <PaymentForm />
        )}

        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          {activeStep !== "partner" && (
            <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
              Назад
            </Button>
          )}

          <Button
            variant="contained"
            onClick={handleNext}
            sx={{ mt: 3, ml: 1 }}
          >
            Услуги
          </Button>

          <Button variant="contained" sx={{ mt: 3, ml: 1 }}>
            Завершить
          </Button>
        </Box>
      </Paper>
    </MainLayout>
  );
}
