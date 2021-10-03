import {
  Checkbox,
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  Switch,
  TextField,
} from "@material-ui/core";
import { TimePicker } from "@material-ui/lab";
import moment from "moment";
import React, { ChangeEvent, Dispatch, Fragment, SetStateAction } from "react";
import { defCategories, defRenders, weekDays } from "../../utils/constants";
import { IPartner } from "../../utils/interfaces";

interface IProps {
  partnerInfo: Partial<IPartner>;
  setPartnerInfo: Dispatch<SetStateAction<Partial<IPartner>>>;
}

export default function PartnerInfo({ partnerInfo, setPartnerInfo }: IProps) {
  const handleText = (e: ChangeEvent<HTMLInputElement>) => {
    setPartnerInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const secondsToTime = (seconds: string | undefined) => {
    if (!seconds) return new Date();

    var duration = moment
      .duration(Number(seconds), "seconds")
      // @ts-ignore
      .format("hh:mm:ss");

    let strFormat = "ss";

    if (duration.length > 2) strFormat = "mm:ss";
    if (duration.length > 5) strFormat = "hh:mm:ss";

    return moment(duration, strFormat).toDate();
  };

  const workDaysArr = partnerInfo?.workdays?.split("");

  return partnerInfo?.name ? (
    <Grid container spacing={3} mt={2}>
      <Grid item xs={12}>
        <img src={partnerInfo?.img_url} alt="Картинка" width={80} height={80} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          name="name"
          label="Название"
          fullWidth
          autoComplete="name"
          variant="standard"
          value={partnerInfo?.name}
          onChange={handleText}
        />
      </Grid>

      <Grid item xs={6}>
        <TextField
          required
          name="partner_title"
          label="title"
          fullWidth
          variant="standard"
          autoComplete="title"
          value={partnerInfo?.partner_title}
          onChange={handleText}
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
          value={partnerInfo?.phone}
          onChange={handleText}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          required
          name="shop_code"
          label="shop_code"
          fullWidth
          variant="standard"
          autoComplete="shop_code"
          value={partnerInfo?.shop_code}
          onChange={handleText}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          required
          name="tg_bot"
          label="tg_bot"
          fullWidth
          variant="standard"
          autoComplete="tg_bot"
          value={partnerInfo?.tg_bot}
          onChange={handleText}
        />
      </Grid>
      <Grid
        item
        xs={6}
        container
        alignItems="center"
        justifyContent="space-between"
      >
        <TimePicker
          label="начало работы"
          value={secondsToTime(partnerInfo?.start_workday)}
          ampm={false}
          onChange={(newValue) => {
            if (newValue) {
              const hours = newValue?.getHours();
              const minutes = newValue?.getMinutes();

              if (hours >= 0 || minutes >= 0) {
                const seconds = 3600 * hours + minutes * 60;
                setPartnerInfo((prev) => ({
                  ...prev,
                  end_workday: String(seconds),
                }));
              }
            }
          }}
          renderInput={(params) => <TextField {...params} />}
        />

        <TimePicker
          label="конец работы"
          value={secondsToTime(partnerInfo?.end_workday)}
          ampm={false}
          onChange={(newValue) => {
            if (newValue) {
              const hours = newValue?.getHours();
              const minutes = newValue?.getMinutes();

              if (hours >= 0 || minutes >= 0) {
                const seconds = 3600 * hours + minutes * 60;
                setPartnerInfo((prev) => ({
                  ...prev,
                  end_workday: String(seconds),
                }));
              }

              if (hours === 0 && minutes === 0) {
                setPartnerInfo((prev) => ({
                  ...prev,
                  end_workday: "86400",
                }));
              }
            }
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel id="demo-multiple-checkbox-label">Категория</InputLabel>
          <Select
            label="Категория"
            id="demo-multiple-checkbox"
            name="category"
            value={partnerInfo?.category}
            onChange={handleText as any}
          >
            {defCategories.map((c, idx) => (
              <MenuItem value={c} key={idx}>
                <ListItemText primary={c} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel id="demo-multiple-checkbox-label">Тип</InputLabel>
          <Select
            label="Тип"
            name="render_type"
            id="demo-multiple-checkbox"
            value={partnerInfo?.partner_render_type}
            onChange={handleText as any}
          >
            {defRenders.map((c, idx) => (
              <MenuItem value={c} key={idx}>
                <ListItemText primary={c} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6} container alignItems="center">
        {workDaysArr?.map((e, index) => (
          <Fragment key={index}>
            {weekDays[index]}
            <Checkbox
              checked={partnerInfo?.workdays?.includes(index.toString())}
              onClick={() => {
                let workdays = [...workDaysArr];

                workdays[index] = partnerInfo?.workdays?.includes(
                  index.toString(),
                )
                  ? " "
                  : index.toString();

                setPartnerInfo((prev) => ({
                  ...prev,
                  workdays: workdays.join(""),
                }));
              }}
            />
          </Fragment>
        ))}
      </Grid>
      <Grid item xs={6}>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={partnerInfo?.is_active}
                onChange={(e) => {
                  setPartnerInfo((prev) => ({
                    ...prev,
                    is_active: e.target.checked,
                  }));
                }}
              />
            }
            label="Активный"
          />
        </FormGroup>
      </Grid>
    </Grid>
  ) : (
    <div
      style={{
        padding: "50px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <CircularProgress />
    </div>
  );
}
