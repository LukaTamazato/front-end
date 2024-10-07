import React, { useState } from "react";
import { Box, Button, ButtonGroup, CssBaseline, Typography } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import BarraLateral from "../components/sidebar/BarraLateral";
import EventosAbertos from "../pages/EventosAbertos";
import EventosFechados from "../pages/EventosFechados";
import Dashboard from "../pages/Dashboard";
import CriarEventos from "../pages/CriarEventos";
import Escala from "../pages/Escala";
import Formularios from "../pages/Formularios";
import Parceiros from "../pages/Parceiros";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Botao from "../components/btn/Botao";

const Layout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [titulo, setTitulo] = useState("");
    const [actions, setActions] = useState([]);

    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };
    

    return (
        <Router>
            <Box sx={{ display: "flex", height: "100vh", flexDirection: "column" }}>
                <CssBaseline />
                <Navbar toggleSidebar={toggleSidebar} />
                <div className="app">
                    <BarraLateral collapsed={collapsed} />
                    <Box style={{ left: `${collapsed ? 80 : 250}px`, width: `calc(100% - ${collapsed ? 80 : 250}px)`, bgcolor: '#f0f0f0', padding: '32px' }} className="content">
                        {(titulo !== "" &&
                            <Box mb={4}>
                            <Box display={"flex"} justifyContent={"space-between"} alignItems={"flex-end"}>
                            <Typography variant="h4" component="h4">
                                {titulo}
                            </Typography>
                            <ButtonGroup variant="contained" color="secondary">
                                 {(actions &&
                                    actions.map((action, index) => {
                                        return (
                                            <Button startIcon={action.icon} key={index} onClick={action.handleClick}>{action.label}</Button>
                                        )
                                    })
                                 )}
                            </ButtonGroup>
                            </Box>
                            <Breadcrumb/>
                        </Box>)}
                        <Routes>
                            <Route path="/" element={<Home setTitulo={setTitulo} setActions={setActions} />} />
                            <Route path="/dashboard" element={<Dashboard setTitulo={setTitulo} setActions={setActions} />} />
                            <Route path="/eventos-abertos" element={<EventosAbertos setTitulo={setTitulo} setActions={setActions} />} />
                            <Route path="/eventos-fechados" element={<EventosFechados setTitulo={setTitulo} setActions={setActions} />} />
                            <Route path="/eventos/criar" element={<CriarEventos setTitulo={setTitulo} setActions={setActions} />} />
                            <Route path="/escala" element={<Escala setTitulo={setTitulo} setActions={setActions} />} />
                            <Route path="/formularios" element={<Formularios setTitulo={setTitulo} setActions={setActions} />} />
                            <Route path="/parceiros" element={<Parceiros setTitulo={setTitulo} setActions={setActions} />} />
                            <Route path="*" element={<NotFound setTitulo={setTitulo} setActions={setActions} />} />
                        </Routes>
                    </Box>
                </div>
            </Box>
        </Router>
    );
};

export default Layout;
