import * as React from "react";
import { AppBar } from "@mui/material";
import { Box } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { IconButton } from "@mui/material";
import logo from './../../assets/logo.jpeg'
import './Header.css'

const Header = ({ openModal }) => {
  const [visible, setIsVisible] = React.useState(false);
  return (
    <div id="header">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: "purple" }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <img className="image" src={logo} alt="a" style={{
                backgroundColor: '#ff7f7f',
                height: '35px'
              }} />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Doctor Finder
            </Typography>
            {!visible && (
              <Button variant="contained" color="primary" onClick={openModal}>
                Login
              </Button>
            )}
            {visible && (
              <Button variant="contained" color="secondary" onClick={() => setIsVisible(false)}>
                Logout
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Header;
