import React, {useState} from "react";
import { Sidebar, Menu, sidebarClasses } from 'react-pro-sidebar';
import { useTheme } from '@mui/material/styles';
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import CelebrationOutlinedIcon from '@mui/icons-material/CelebrationOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import DisabledByDefaultOutlinedIcon from '@mui/icons-material/DisabledByDefaultOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import GroupIcon from '@mui/icons-material/Group';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Item from "./items/Item";
import CustomSubMenu from "./items/SubMenu";

const BarraLateral = ({ collapsed }) => {
    const theme = useTheme();

    const [activeItem, setActiveItem] = useState(null);

    const handleMenuItemClick = (item) => {
        setActiveItem(item);
    };

    return (
            <Sidebar
                collapsed={collapsed}
                rootStyles={{
                    [`.${sidebarClasses.container}`]: {
                        backgroundColor: theme.palette.primary.main,
                        color: "white",
                    },
                }}
            >
                <Menu closeOnClick menuItemStyles={{
                    button: ({ active }) => {
                        return {
                            backgroundColor: active ? theme.palette.primary.light : theme.palette.primary.main,
                            '&:hover': {
                                backgroundColor: active ? theme.palette.primary.light : theme.palette.primary.dark,
                            },
                        }
                    }
                }}
                >
                    <Item onClick={() => handleMenuItemClick('i6')} active={activeItem === 'i6'} icon={<DashboardIcon />} linkTo="/dashboard" text="Dashboard" />
                    <CustomSubMenu icon={<CelebrationOutlinedIcon />}>
                        <Item onClick={() => handleMenuItemClick('i0')} active={activeItem === 'i0'} theme={theme.palette.primary.lighter} linkTo="/eventos-abertos" icon={<CheckBoxOutlinedIcon />} text="Eventos abertos" />
                        <Item onClick={() => handleMenuItemClick('i1')} active={activeItem === 'i1'} theme={theme.palette.primary.lighter} linkTo="/eventos-fechados" icon={<DisabledByDefaultOutlinedIcon />} text="Eventos fechados" />
                        <Item onClick={() => handleMenuItemClick('i2')} active={activeItem === 'i2'} theme={theme.palette.primary.lighter} linkTo="/eventos" icon={<AddBoxOutlinedIcon />} text="Criar eventos" />
                    </CustomSubMenu>
                    <CustomSubMenu icon={<GroupIcon />}>
                        <Item onClick={() => handleMenuItemClick('i3')} active={activeItem === 'i3'} theme={theme.palette.primary.lighter} linkTo="/escala" icon={<EditCalendarOutlinedIcon />} text="Escala" />
                        <Item onClick={() => handleMenuItemClick('i4')} active={activeItem === 'i4'} theme={theme.palette.primary.lighter} linkTo="/formularios" icon={<ArticleOutlinedIcon />} text="Formulários" />
                        <Item onClick={() => handleMenuItemClick('i5')} active={activeItem === 'i5'} theme={theme.palette.primary.lighter} linkTo="/parceiros" icon={<ContactsOutlinedIcon />} text="Parceiros" />
                    </CustomSubMenu>
                </Menu>
            </Sidebar>
    );
};

export default BarraLateral;
