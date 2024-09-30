import React, { useState } from "react";
import { Box, CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import BarraLateral from "../components/sidebar/BarraLateral";
import EventosAbertos from "../pages/eventos/EventosAbertos";
import EventosFechados from "../pages/eventos/EventosFechados";
import Dashboard from "../pages/dashboard/Dashboard";
import CriarEventos from "../pages/eventos/CriarEventos";
import Escala from "../pages/equipe/Escala";
import Formularios from "../pages/equipe/Formularios";
import Parceiros from "../pages/equipe/Parceiros";

const Layout = () => {
    const [collapsed, setCollapsed] = useState(false);

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
                        <Routes>
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/eventos-abertos" element={<EventosAbertos />} />
                            <Route path="/eventos-fechados" element={<EventosFechados />} />
                            <Route path="/eventos" element={<CriarEventos />} />
                            <Route path="/escala" element={<Escala />} />
                            <Route path="/formularios" element={<Formularios />} />
                            <Route path="/parceiros" element={<Parceiros />} />
                        </Routes>
                    </Box>
                </div>
            </Box>
        </Router>
    );
};

export default Layout;
