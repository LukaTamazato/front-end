import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Botao from "../btn/Botao";

const Navbar = ({ toggleSidebar }) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={toggleSidebar}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Serenity
                </Typography>

                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Botao txt="Entrar" />
                    <Botao txt="Cadastrar" />
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;