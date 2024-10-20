import { useEffect, useState } from "react";
import { Box, Button, ButtonGroup, CssBaseline, Typography } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import BarraLateral from "../components/sidebar/BarraLateral";
import DemandasAbertas from "../pages/demandas/DemandasAbertas";
import DemandasFechadas from "../pages/demandas/DemandasFechadas";
import Dashboard from "../pages/Dashboard";
import CriarDemandas from "../pages/demandas/criarDemandas/CriarDemandas";
import Escala from "../pages/Escala";
import Formularios from "../pages/Formularios";
import Parceiros from "../pages/Parceiros";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Demandas from "../pages/demandas/Demandas";
import Eventos from "../pages/eventos/Eventos";
import EventosAbertos from "../pages/eventos/EventosAbertos";
import EventosFechados from "../pages/eventos/EventosFechados";
import CriarEvento from "../pages/eventos/criarEventos/CriarEvento";
import Alerta from "../components/alerta/Alerta";
import CheckIcon from '@mui/icons-material/Check';
import RegistroEvento from "../pages/eventos/RegistroEvento";
import ConfirmDialog from "../components/dialogo/ConfirmDialog";

const Layout = () => {

    const [collapsed, setCollapsed] = useState(
        JSON.parse(localStorage.getItem('sidebarCollapsed')) || false
    );

    useEffect(() => {
        localStorage.setItem('sidebarCollapsed', JSON.stringify(collapsed));
    }, [collapsed]);

    const [titulo, setTitulo] = useState("");
    const [actions, setActions] = useState([]);

    const [alertaOpen, setAlertaOpen] = useState(false);
    const [alertaLabel, setAlertaLabel] = useState("");
    const [alertaSeverity, setAlertaSeverity] = useState("");
    const [alertaIcon, setAlertaIcon] = useState(null);

    const showToast = (label, severity='success', icon=<CheckIcon/>) => {
        setAlertaLabel(label);
        setAlertaIcon(icon);
        setAlertaSeverity(severity);
        setAlertaOpen(true);
    }

    
    const [openDialog, setOpenDialog] = useState(false);
    const [dialogContent, setDialogContent] = useState({});
    const [dialogAction, setDialogAction] = useState(null);

    const toggleDialog = () => {
        setOpenDialog(!openDialog);
    };

    const toggleSidebar = () => {   
        setCollapsed(!collapsed);
    };
    
    return (
        <Router>
            <Alerta setAlertaOpen={setAlertaOpen} severity={alertaSeverity} open={alertaOpen} label={alertaLabel} icon={alertaIcon}/>
            <ConfirmDialog action={dialogAction} content={dialogContent} open={openDialog} toggleDialog={toggleDialog}/>
            <Box sx={{ display: "flex", height: "100vh", flexDirection: "column" }}>
                <CssBaseline />
                <Navbar toggleSidebar={toggleSidebar} />
                <div className="app">
                    <BarraLateral collapsed={collapsed} />
                    <Box overflow={"scroll"} p={2} style={{ left: `${collapsed ? 80 : 260}px`, width: `calc(100% - ${collapsed ? 80 : 260}px)`, bgcolor: '#f0f0f0' }} className="content">
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
                            <Route path="/eventos" element={<Eventos setTitulo={setTitulo} setActions={setActions} />} />
                            <Route path="/eventos/:eventId" element={<RegistroEvento toggleDialog={toggleDialog} setDialogAction={setDialogAction} setDialogContent={setDialogContent} showToast={showToast} setTitulo={setTitulo} setActions={setActions} />} />
                            <Route path="/eventos/criar" element={<CriarEvento showToast={showToast} setTitulo={setTitulo} setActions={setActions} />} />
                            <Route path="/eventos-abertos" element={<EventosAbertos setTitulo={setTitulo} setActions={setActions} />} />
                            <Route path="/eventos-fechados" element={<EventosFechados setTitulo={setTitulo} setActions={setActions} />} />
                            <Route path="/demandas" element={<Demandas setTitulo={setTitulo} setActions={setActions} />} />
                            <Route path="/demandas/criar" element={<CriarDemandas setTitulo={setTitulo} setActions={setActions} />} />
                            <Route path="/demandas-abertas" element={<DemandasAbertas setTitulo={setTitulo} setActions={setActions} />} />
                            <Route path="/demandas-fechadas" element={<DemandasFechadas setTitulo={setTitulo} setActions={setActions} />} />
                            <Route path="/escala" element={<Escala setTitulo={setTitulo} setActions={setActions} />} />
                            <Route path="/formularios" element={<Formularios setTitulo={setTitulo} setActions={setActions} showToast={showToast} />} />
                            <Route path="/parceiros" element={<Parceiros setTitulo={setTitulo} setActions={setActions} />} />
                            <Route path="/login" element={<Login setTitulo={setTitulo} setActions={setActions} />} />
                            <Route path="*" element={<NotFound setTitulo={setTitulo} setActions={setActions} />} />
                        </Routes>
                    </Box>
                </div>
            </Box>
        </Router>
    );
};

export default Layout;
