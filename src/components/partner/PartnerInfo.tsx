import {
  FormControl,
  Grid,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import api from "../../utils/api";
import { defCategories } from "../../utils/constants";
import { IPartner } from "../../utils/interfaces";

interface IProps {
  partnerID: string;
}

export default function PartnerInfo({ partnerID }: IProps) {
  const [partnerInfo, setPartnerInfo] = useState({
    name: "new test partner",
    title: "test title",
    phone: "+7123123412",
    start_workday: "0",
    end_workday: "86400",
    work_unit_interval: "3600",
    workdays: "0123456",
    tg_bot: "no",
    render_type: "regular",
    category: "common",
    shop_code: "520262",
  });

  // useEffect(() => {
  //   api
  //     .get<IPartner>(`/partners/${partnerID}`)
  //     .then((response) => {
  //       console.log(response);
  //       // setPartnerInfo()
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // onNew

  // name: 'new test partner',
  // title: 'test title',
  // phone: '+7123123412',
  // start_workday: 0,
  // end_workday: 86400,
  // work_unit_interval: 3600,
  // workdays: '0123456',
  // tg_bot: 'no',
  // render_type: 'regular' | '"with_images" | 'cleaning',
  // category: 'common',
  // shop_code: 520262

  // withId

  // "id": 0,
  // "name": "string",
  // "type_of": "string",
  // "phone": "string",
  // "start_workday": "string",
  // "end_workday": "string",
  // "work_unit_interval": "string",
  // "orders_at_wui": 0,
  // "workdays": "string",
  // "tg_bot": "string",
  // "is_active": true,
  // "category": "string",
  // "shop_code": "string",
  // "partner_title": "string",
  // "svc_categories": {},
  // "render_order": 0,
  // "img_url": "string",
  // "cell_render_type": "string"

  // Changing

  // "name": "string",
  // "type_of": "string",
  // "phone": "string",
  // "start_workday": "string",
  // "end_workday": "string",
  // "work_unit_interval": "string",
  // "orders_at_wui": 0,
  // "workdays": "string",
  // "tg_bot": "string",
  // "is_active": true,
  // "category": "string",
  // "shop_code": "string",
  // "partner_title": "string",
  // "svc_categories": {},
  // "render_order": 0,
  // "img_url": "string",
  // "cell_render_type": "string",
  // "partner_render_type": "string"

  return (
    <>
      <Typography component="h1" variant="h4" align="center">
        {/* {creating ? "Новый партнёр" : id} */}
        Новый партнёр
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="name"
            label="Название"
            fullWidth
            autoComplete="name"
            variant="standard"
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            required
            name="title"
            label="Телефон"
            fullWidth
            variant="standard"
            autoComplete="title"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            name="phone"
            label="Телефон"
            fullWidth
            variant="standard"
            autoComplete="phone"
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-multiple-checkbox-label">Категория</InputLabel>
            <Select
              label="Категория"
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              value={"common"}
              // onChange={changeCategories}
            >
              {defCategories.map((c, idx) => (
                <MenuItem value={c}>
                  <ListItemText primary={c} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          {}
        </Grid>
      </Grid>
    </>
  );
}
