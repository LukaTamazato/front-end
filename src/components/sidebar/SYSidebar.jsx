import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import CelebrationOutlinedIcon from '@mui/icons-material/CelebrationOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import DisabledByDefaultOutlinedIcon from '@mui/icons-material/DisabledByDefaultOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import GroupIcon from '@mui/icons-material/Group';
import DashboardIcon from '@mui/icons-material/Dashboard';

const SYSidebar = ({ collapsed }) => {
    return (
        <Box sx={{ display: 'flex', height: '100vh' }}>
            <Sidebar collapsed={collapsed}>
                <Menu>
                    <MenuItem icon={<DashboardIcon />} component={<Link to="/dashboard" />}>Dashboard</MenuItem>
                    <SubMenu label="Eventos" icon={<CelebrationOutlinedIcon />}>
                        <MenuItem component={<Link to="/eventos-abertos" />} icon={<CheckBoxOutlinedIcon />}>Eventos abertos</MenuItem>
                        <MenuItem component={<Link to="/eventos-fechados" />} icon={<DisabledByDefaultOutlinedIcon />}>Eventos fechados</MenuItem>
                        <MenuItem component={<Link to="/eventos" />} icon={<AddBoxOutlinedIcon />}>Criar eventos</MenuItem>
                    </SubMenu>
                    <SubMenu label="Equipe" icon={<GroupIcon />}>
                        <MenuItem component={<Link to="/escala" />} icon={<EditCalendarOutlinedIcon />}>Escala</MenuItem>
                        <MenuItem component={<Link to="/formularios" />} icon={<ArticleOutlinedIcon />}>Formulários</MenuItem>
                        <MenuItem component={<Link to="/parceiros" />} icon={<ContactsOutlinedIcon />}>Parceiros</MenuItem>
                    </SubMenu>
                </Menu>
            </Sidebar>
        </Box>
    );
};

export default SYSidebar;
