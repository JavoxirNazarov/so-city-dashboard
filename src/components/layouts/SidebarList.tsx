import * as React from "react";
import {
  ListItemIcon,
  ListItemText,
  List,
  ListItemButton,
} from "@material-ui/core";
import { Dashboard, Create, ExitToApp } from "@material-ui/icons";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

export const SidebarList = () => {
  const { logOut } = React.useContext(AuthContext);

  return (
    <List>
      <ListItemButton component={Link} to="/">
        <ListItemIcon>
          <Dashboard />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <ListItemButton component={Link} to="/new-service">
        <ListItemIcon>
          <Create />
        </ListItemIcon>
        <ListItemText primary="Create" />
      </ListItemButton>
      <ListItemButton onClick={logOut}>
        <ListItemIcon>
          <ExitToApp />
        </ListItemIcon>
        <ListItemText primary="exit" />
      </ListItemButton>
    </List>
  );
};
