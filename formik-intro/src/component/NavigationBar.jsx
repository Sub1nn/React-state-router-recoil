import React, { useState } from "react";
import {
  AppBar,
  Button,
  Toolbar,
  useMediaQuery,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logoImage from "../assets/logo.png";

const NavigationBar = () => {
  const isMobile = useMediaQuery("(max-width:700px)");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navigationItems = ["Home", "Docs", "About", "Blog"];

  return (
    <AppBar
      position="static"
      style={{ marginBottom: "40px", maxWidth: "100%" }}
    >
      <Toolbar style={{ justifyContent: "space-between" }}>
        <img src={logoImage} alt="Logo" />

        {isMobile ? (
          <>
            <IconButton edge="end" color="inherit" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="bottom"
              open={drawerOpen}
              onClose={handleDrawerToggle}
              PaperProps={{ style: { backgroundColor: "lightgreen" } }}
            >
              <List>
                {navigationItems.map((item, index) => (
                  <ListItem key={index} component={ListItemButton}>
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          <div>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Docs</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Blog</Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
