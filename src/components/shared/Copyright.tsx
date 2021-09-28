import React from "react";
import { Typography, Link } from "@material-ui/core";

export default function Copyright() {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      sx={{ pt: 4 }}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        So City
      </Link>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
}
