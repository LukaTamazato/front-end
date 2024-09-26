import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Button, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SYButton from "../btn/SYButton";

const SYNavbar = ({ toggleSidebar }) => {
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
                    <SYButton txt="Entrar" />
                    <SYButton txt="Cadastrar" />
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default SYNavbar;
