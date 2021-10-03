import { Button, Paper } from "@material-ui/core";
import { Box } from "@material-ui/system";
import React, { useState } from "react";
import { useHistory } from "react-router";
import MainLayout from "../components/layouts/MainLayout";
import PartnerInfo from "../components/new-partner/PartnerInfo";
import Title from "../components/Title";
import api from "../utils/api";
import { showToast } from "../utils/toast";

export default function NewService() {
  const history = useHistory();

  const [partnerInfo, setPartnerInfo] = useState({
    name: "new test partner",
    title: "test title",
    phone: "+7123123412",
    start_workday: "0",
    end_workday: "86400",
    work_unit_interval: 3600,
    workdays: "0123456",
    tg_bot: "no",
    render_type: "regular",
    category: "common",
    shop_code: "520262",
  });

  const createPartner = () => {
    const body = {
      ...partnerInfo,
      workdays: partnerInfo.workdays.replaceAll(" ", ""),
    };

    api
      .post("/partners/new", body)
      .then((response) => {
        showToast("success", "Успешно!");
        history.push("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <MainLayout>
      <Paper variant="outlined" sx={{ my: 1, p: { xs: 2, md: 2 } }}>
        <Title>Новый партнёр</Title>

        <PartnerInfo
          partnerInfo={partnerInfo}
          setPartnerInfo={setPartnerInfo}
        />
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            onClick={createPartner}
            sx={{ mt: 3, ml: 1 }}
          >
            Завершить
          </Button>
        </Box>
      </Paper>
    </MainLayout>
  );
}
