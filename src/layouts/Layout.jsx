import React, { useState } from "react";
import { Box, CssBaseline, Typography } from "@mui/material";
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

const Layout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [titulo, setTitulo] = useState("");

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
                            <Typography variant="h4" component="h4">
                                {titulo}
                            </Typography>
                            <Breadcrumb/>
                        </Box>)}
                        <Routes>
                            <Route path="/" element={<Home setTitulo={setTitulo} />} />
                            <Route path="/dashboard" element={<Dashboard setTitulo={setTitulo} />} />
                            <Route path="/eventos-abertos" element={<EventosAbertos setTitulo={setTitulo} />} />
                            <Route path="/eventos-fechados" element={<EventosFechados setTitulo={setTitulo} />} />
                            <Route path="/eventos" element={<CriarEventos setTitulo={setTitulo} />} />
                            <Route path="/escala" element={<Escala setTitulo={setTitulo} />} />
                            <Route path="/formularios" element={<Formularios setTitulo={setTitulo} />} />
                            <Route path="/parceiros" element={<Parceiros setTitulo={setTitulo} />} />
                            <Route path="*" element={<NotFound setTitulo={setTitulo} />} />
                        </Routes>
                    </Box>
                </div>
            </Box>
        </Router>
    );
};

export default Layout;
