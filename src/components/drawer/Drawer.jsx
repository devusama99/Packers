import { Drawer, IconButton } from "@mui/material";
import { Menu } from "@mui/icons-material";
import DrawerList from "./DrawerList";
import React from "react";

export default function DrawerCustom() {
  const [state, setState] = React.useState(false);

  const toggleDrawer = () => setState(!state);
  return (
    <div>
      <React.Fragment>
        <IconButton onClick={() => toggleDrawer()}>
          <Menu color="dark" />
        </IconButton>
        <Drawer anchor={"left"} open={state} onClose={toggleDrawer}>
          <div onClick={() => console.log(state)}>
            <DrawerList />
          </div>
        </Drawer>
      </React.Fragment>
    </div>
  );
}
