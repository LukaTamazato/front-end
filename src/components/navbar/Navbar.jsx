import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Box, Avatar, ButtonBase, Menu, MenuItem, Divider } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Botao from "../btn/Botao";
import { ArrowDropDown } from "@mui/icons-material";
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import logo from '/logo.png';

const Navbar = ({ toggleSidebar }) => {

    return (
        <AppBar position="static">
            <Toolbar display="flex" sx={{justifyContent: "space-between"}}>
                <Box display="flex" alignItems={"center"}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={toggleSidebar}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box component={"img"} src={logo} height={"48px"} />
                </Box>

                <MenuPerfil/>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;

const MenuPerfil = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = (e) => {
        console.log(e.target.id);
        setAnchorEl(null);
    };

    return (
        <Box sx={{ display: 'flex', gap: 0, alignItems: "flex-end" }}>
            <ButtonBase centerRipple onClick={handleClick} sx={{borderRadius: "50%"}}>
                <Avatar>L</Avatar>
            </ButtonBase>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem id="item1" onClick={handleClose}><Avatar sx={{width: 25, height: 25}}>L</Avatar> <Typography ml={1} mr={2}>Letícia P. </Typography></MenuItem>
                <Divider/>
                <MenuItem id="item2" onClick={handleClose}><Avatar sx={{width: 25, height: 25}}></Avatar> <Typography ml={1} mr={2}>Coisa 1</Typography></MenuItem>
                <MenuItem id="item3" onClick={handleClose}><Avatar sx={{width: 25, height: 25}}></Avatar> <Typography ml={1} mr={2}>Coisa 2</Typography></MenuItem>
                <MenuItem id="item4" onClick={handleClose}><Avatar sx={{width: 25, height: 25}}></Avatar> <Typography ml={1} mr={2}>Coisa 3</Typography></MenuItem>
                <MenuItem id="item5" onClick={handleClose}><Avatar sx={{width: 25, height: 25}}></Avatar> <Typography ml={1} mr={2}>Coisa 4</Typography></MenuItem>
                <MenuItem id="item6" onClick={handleClose}><SettingsIcon sx={{fontSize: 20}}/><Typography ml={1} mr={2}>Configurações</Typography></MenuItem>
                <Divider/>
                <MenuItem id="item7" onClick={handleClose}><LogoutIcon sx={{fontSize: 20}}/><Typography ml={1} mr={2}>Sair</Typography></MenuItem>
            </Menu>
        </Box>
    );
}