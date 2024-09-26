import React, { useState } from "react";
import { Box } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SYNavbar from "../components/navbar/SYNavbar";
import SYSidebar from "../components/sidebar/SYSidebar";
import EventosAbertos from "../pages/eventos/EventosAbertos";
import EventosFechados from "../pages/eventos/EventosFechados";
import DashboardPage from "../pages/dashboard/DashboardPage";
import CriarEventos from "../pages/eventos/CriarEventos";
import Escala from "../pages/equipe/Escala";
import Formularios from "../pages/equipe/Formularios";
import Parceiros from "../pages/equipe/Parceiros";

const SYLayout = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };

    return (
        <Box sx={{ display: "flex", height: "100vh", flexDirection: "column" }}>
            <SYNavbar toggleSidebar={toggleSidebar} />
            <Box sx={{ display: "flex", flexGrow: 1 }}>
                <SYSidebar collapsed={collapsed} />
                <Box sx={{ flexGrow: 1, p: 2 }}>
                    <Routes>
                        <Route path="/dashboard" element={<DashboardPage />} />
                        <Route path="/eventos-abertos" element={<EventosAbertos />} />
                        <Route path="/eventos-fechados" element={<EventosFechados />} />
                        <Route path="/eventos" element={<CriarEventos />} />
                        <Route path="/escala" element={<Escala />} />
                        <Route path="/formularios" element={<Formularios />} />
                        <Route path="/parceiros" element={<Parceiros />} />
                    </Routes>
                </Box>
            </Box>
        </Box>
    );
};

export default SYLayout;
