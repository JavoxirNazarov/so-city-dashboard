import {
  FormControl,
  Grid,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import { defCategories } from "../../utils/constants";

export default function PartnerInfo() {
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

  return (
    <>
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
