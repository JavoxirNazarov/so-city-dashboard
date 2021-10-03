import {
  //  Badge,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import {
  Menu as MenuIcon,
  // Notifications as NotificationsIcon,
} from "@material-ui/icons";

interface HeaderProps {
  open: boolean;
  toggleDrawer: () => void;
}

export default function Header({ open, toggleDrawer }: HeaderProps) {
  return (
    <Toolbar
      sx={{
        background: (theme) => theme.palette.text.secondary,
        pr: "24px",
      }}
    >
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer}
        sx={{
          marginRight: "36px",
          ...(open && { display: "none" }),
        }}
      >
        <MenuIcon />
      </IconButton>
      <Typography
        component="h1"
        variant="h6"
        color="white"
        noWrap
        sx={{ flexGrow: 1 }}
      >
        So City
      </Typography>
      {/* <IconButton color="inherit">
        <Badge badgeContent={4} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton> */}
    </Toolbar>
  );
}
