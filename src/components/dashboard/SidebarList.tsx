import * as React from "react";
import {
  ListItemIcon,
  ListItemText,
  List,
  ListItemButton,
} from "@material-ui/core";
import { Dashboard, Create, ExitToApp } from "@material-ui/icons";
import { Link } from "react-router-dom";

export const SidebarList = () => (
  <List>
    <ListItemButton>
      <ListItemIcon>
        <Dashboard />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <Create />
      </ListItemIcon>
      <ListItemText primary="Create" />
    </ListItemButton>
    <ListItemButton component={Link} to="/auth">
      <ListItemIcon>
        <ExitToApp />
      </ListItemIcon>
      <ListItemText primary="exit" />
    </ListItemButton>
  </List>
);
