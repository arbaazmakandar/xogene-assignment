import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "./Header.css";

const Header = () => {
  return (
    <Box className="navbar-container">
      <AppBar position="static" className="navbar">
        <Toolbar variant="dense">
          <Typography variant="h6" component="div">
            XOGENE LOGO
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
