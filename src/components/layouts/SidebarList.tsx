import * as React from "react";
import {
  ListItemIcon,
  ListItemText,
  List,
  ListItemButton,
} from "@material-ui/core";
import { Group, ExitToApp } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../redux";
import { logOut } from "../../redux/thunks/auth-thunks";

export const SidebarList = () => {
  const dispatch = useAppDispatch();

  return (
    <List>
      <ListItemButton component={Link} to="/">
        <ListItemIcon>
          <Group />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      {/* <ListItemButton component={Link} to="/new-service">
        <ListItemIcon>
          <Create />
        </ListItemIcon>
        <ListItemText primary="Create" />
      </ListItemButton> */}
      <ListItemButton onClick={() => dispatch(logOut())}>
        <ListItemIcon>
          <ExitToApp />
        </ListItemIcon>
        <ListItemText primary="exit" />
      </ListItemButton>
    </List>
  );
};
