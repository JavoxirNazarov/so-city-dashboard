import { Button, Paper } from "@material-ui/core";
import { Box } from "@material-ui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import PartnerInfo from "../components/partner/PartnerInfo";
// import PaymentForm from "../components/partner/PaymentForm";
import api from "../utils/api";
import { IPartner } from "../utils/interfaces";
import { showToast } from "../utils/toast";
import { useHistory } from "react-router-dom";
import Title from "../components/Title";

export default function Partner() {
  const history = useHistory();
  const { ID } = useParams<{ ID: string }>();
  const [partnerInfo, setPartnerInfo] = useState<Partial<IPartner>>({});
  // const [services, setServices] = useState<any[]>([]);

  useEffect(() => {
    api
      .get<{ partner: IPartner }>(`/partners/${ID}`)
      .then((partnerResponse) => {
        setPartnerInfo(partnerResponse?.data?.partner);
      })
      .catch((err) => console.log(err));
  }, [ID]);

  const changePartner = () => {
    const body = {
      ...partnerInfo,
      workdays: partnerInfo?.workdays?.replaceAll(" ", ""),
    };

    api
      .patch(`/partners/${ID}`, body)
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
        <Title>{partnerInfo?.name}</Title>
        <PartnerInfo
          partnerInfo={partnerInfo}
          setPartnerInfo={setPartnerInfo}
        />

        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            onClick={() => {
              history.push(`/services/${ID}`);
            }}
            sx={{ mt: 3, ml: 1 }}
          >
            Сервисы
          </Button>

          <Button
            variant="contained"
            sx={{ mt: 3, ml: 1 }}
            onClick={changePartner}
          >
            Завершить
          </Button>
        </Box>
      </Paper>
    </MainLayout>
  );
}
