import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import SoCityImage from "../assets/img/SoCity.png";
import Copyright from "../components/shared/Copyright";
import { logIn } from "../redux/thunks/auth-thunks";

export default function Auth() {
  const development = process.env.NODE_ENV === "development";
  const dispatch = useDispatch();
  const [name, setName] = useState(development ? "moder" : "");
  const [password, setPassword] = useState(
    development ? '."[(4@&b&jjD^v)[^Dm(Sh$~h2z<PS' : "",
  );

  const handleSubmit = () => dispatch(logIn(name, password));

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img src={SoCityImage} alt="" width={30} height={30} />
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box sx={{ mt: 1 }}>
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
            required
            fullWidth
            id="name"
            label="Email Address"
            name="name"
            autoComplete="name"
            autoFocus
          />
          <TextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            fullWidth
            variant="contained"
            onClick={handleSubmit}
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
      <Copyright />
    </Container>
  );
}
