import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.svg";

const drawerWidth = 240;

function DrawerAppBar(props) {
  const { window } = props;
  const navigate = useNavigate();

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <Box onClick={props.handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box sx={{ py: 2 }}>
        <img src={Logo} alt="Logo" height={50} width={50} />
      </Box>
      <Divider />
      <List>
        {props.pages.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => {
                navigate(item.route);
              }}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer
      container={container}
      variant="temporary"
      open={props.mobileOpen}
      onClose={props.handleDrawerToggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: { xs: "block", sm: "none" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: drawerWidth,
          backgroundColor: "#f1e8db",
        },
      }}
    >
      {drawer}
    </Drawer>
  );
}

export default DrawerAppBar;
