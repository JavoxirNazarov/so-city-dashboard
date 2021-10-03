import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  // Link,
  // Switch,
  // Grid,
  // Checkbox,
  // TextField,
  // InputLabel,
  // Select,
  // MenuItem,
  // FormControl,
  // ListItemText,
  // SelectChangeEvent,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import api from "../../utils/api";
// import { defCategories } from "../../utils/constants";
import { IServices } from "../../utils/interfaces";
import Title from "../Title";
import { Link as RouterLink, useParams } from "react-router-dom";

export default function List() {
  const { partnerID } = useParams<{ partnerID: string }>();
  const [services, setServices] = useState<IServices[]>([]);
  // const [actives, setActives] = useState(true);
  // const [all, setAll] = useState(false);
  // const [searchName, setSearchName] = useState("");
  // const [phone, setPhone] = useState("");
  // const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    api
      .get(`/services/list?partner_id=${partnerID}`)
      .then((serviceResponse) => {
        setServices(serviceResponse.data?.services);
      })
      .catch((err) => console.log(err));
  }, [partnerID]);

  // const filterdPartners = useMemo(() => {
  //   let result = partners;

  //   if (!all) {
  //     result = result.filter((el) => el.is_active === actives);
  //   }

  //   if (searchName) {
  //     result = result.filter(
  //       (el) =>
  //         el?.name?.toLowerCase()?.includes(searchName.toLocaleLowerCase()) ||
  //         el?.name_ru?.toLowerCase()?.includes(searchName.toLocaleLowerCase()),
  //     );
  //   }

  //   if (phone) {
  //     result = result.filter((el) => el.phone.includes(phone));
  //   }

  //   if (categories.length) {
  //     result = result.filter((el) => categories.includes(el.category));
  //   }

  //   return result;
  // }, [partners, actives, all, searchName, phone, categories]);

  // const changeCategories = (event: SelectChangeEvent<typeof categories>) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   setCategories(typeof value === "string" ? value.split(",") : value);
  // };

  return (
    <React.Fragment>
      <Title>Сервисы</Title>
      {/* 
      <Grid container spacing={3} mb={2} alignItems="center">
        <Grid
          item
          xs={3}
          container
          justifyContent="space-between"
          alignItems="center"
        >
          Активные
          <Switch
            checked={actives}
            onChange={(e) => setActives(e.target.checked)}
          />
          Все
          <Checkbox checked={all} onChange={(e) => setAll(e.target.checked)} />
        </Grid>
        <Grid item xs={3}>
          <TextField
            fullWidth
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            label="название"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            fullWidth
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            label="Телефон но."
            variant="outlined"
          />
        </Grid>
        <Grid item xs={3}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Категории</InputLabel>
            <Select
              multiple
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={categories}
              label="Категории"
              renderValue={(selected) => selected.join(", ")}
              onChange={changeCategories}
            >
              {defCategories.map((c, idx) => (
                <MenuItem value={c} key={idx}>
                  <Checkbox checked={categories.includes(c)} />
                  <ListItemText primary={c} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
       */}
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Картинка</TableCell>
            <TableCell>Название</TableCell>
            <TableCell>Название RU</TableCell>
            <TableCell>description_of_svc</TableCell>
            <TableCell>price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {services?.map((service, i) => (
            <TableRow
              key={i}
              component={RouterLink}
              to={`/services/${partnerID}/${service.id}`}
              style={{ textDecoration: "none" }}
            >
              <TableCell>
                <img
                  src={service.image_url}
                  alt="Картинка"
                  width={30}
                  height={30}
                />
              </TableCell>
              <TableCell>{service?.name_of_svc}</TableCell>
              <TableCell>{service.name_of_svc_ru}</TableCell>
              <TableCell>{service.description_of_svc}</TableCell>
              <TableCell>{service.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <Link
        color="primary"
        to="new-partner"
        component={RouterLink}
        sx={{ mt: 3 }}
      >
        Создать
      </Link> */}
    </React.Fragment>
  );
}
