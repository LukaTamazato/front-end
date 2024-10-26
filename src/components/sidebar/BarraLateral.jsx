import React, { useState } from "react";
import { Sidebar, Menu, sidebarClasses } from "react-pro-sidebar";
import { useTheme } from "@mui/material/styles";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import CelebrationOutlinedIcon from "@mui/icons-material/CelebrationOutlined";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import DisabledByDefaultOutlinedIcon from "@mui/icons-material/DisabledByDefaultOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import GroupIcon from "@mui/icons-material/Group";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Item from "./items/Item";
import CustomSubMenu from "./items/SubMenu";
import HomeIcon from "@mui/icons-material/Home";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MailIcon from "@mui/icons-material/Mail";
import SearchIcon from "@mui/icons-material/Search";
import { useUser } from "../../context/UserContext";
import { useCollapsed } from "../../context/CollapsedContext";

const BarraLateral = () => {
  const theme = useTheme();
  const { tipoUsuario } = useUser();

  const [activeItem, setActiveItem] = useState(null);

  const handleActivateItem = (item) => {
    setActiveItem(item);
  };

  const { collapsed } = useCollapsed();

  return (
    <Sidebar
      collapsed={collapsed}
      rootStyles={{
        [`.${sidebarClasses.container}`]: {
          backgroundColor: theme.palette.primary.main,
          color: "white",
          width: collapsed ? "80px" : "260px",
          transition: "300ms",
          zIndex: 9999,
        },
      }}
    >
      <Menu
        closeOnClick
        menuItemStyles={{
          button: ({ active }) => {
            return {
              backgroundColor: active
                ? theme.palette.primary.light
                : theme.palette.primary.main,
              "&:hover": {
                backgroundColor: active
                  ? theme.palette.primary.light
                  : theme.palette.primary.dark,
              },
            };
          },
        }}
      >
        {/* TODO: Verificar se está ativo pela url e não pelo activeItem
                        Motivo: Destacar itens de acordo com página atual ainda que não tenha sido por meio da barra lateral */}
        {tipoUsuario === "parceiro" && (
          <>
            <Item
              sx={{ mt: 2 }}
              smallText={false}
              onClick={() => handleActivateItem("i0")}
              active={activeItem === "i0"}
              icon={<HomeIcon />}
              linkTo="/"
              text="Home"
            />
            <Item
              smallText={false}
              onClick={() => handleActivateItem("i1")}
              active={activeItem === "i1"}
              icon={<DashboardIcon />}
              linkTo="/dashboard"
              text="Dashboard"
            />
            <CustomSubMenu
              label="Eventos"
              icon={<ConfirmationNumberOutlinedIcon />}
            >
              <Item
                onClick={() => handleActivateItem("i2")}
                active={activeItem === "i2"}
                theme={theme.palette.primary.lighter}
                linkTo="/eventos"
                icon={<AddBoxOutlinedIcon />}
                text="Eventos totais"
              />
              <Item
                onClick={() => handleActivateItem("i3")}
                active={activeItem === "i3"}
                theme={theme.palette.primary.lighter}
                linkTo="/eventos-abertos"
                icon={<CheckBoxOutlinedIcon />}
                text="Eventos abertos"
              />
            </CustomSubMenu>
            <CustomSubMenu label="Demandas" icon={<CelebrationOutlinedIcon />}>
              <Item
                onClick={() => handleActivateItem("i5")}
                active={activeItem === "i5"}
                theme={theme.palette.primary.lighter}
                linkTo="/demandas"
                icon={<AddBoxOutlinedIcon />}
                text="Demandas totais"
              />
              <Item
                onClick={() => handleActivateItem("i6")}
                active={activeItem === "i6"}
                theme={theme.palette.primary.lighter}
                linkTo="/demandas-abertas"
                icon={<CheckBoxOutlinedIcon />}
                text="Demandas abertas"
              />
            </CustomSubMenu>
            <CustomSubMenu label="Equipe" icon={<GroupIcon />}>
              {/* <Item onClick={() => handleActivateItem('i8')} active={activeItem === 'i8'} theme={theme.palette.primary.lighter} linkTo="/escala" icon={<EditCalendarOutlinedIcon />} text="Escala" /> */}
              <Item
                onClick={() => handleActivateItem("i9")}
                active={activeItem === "i9"}
                theme={theme.palette.primary.lighter}
                linkTo="/formularios"
                icon={<ArticleOutlinedIcon />}
                text="Formulários"
              />
              <Item
                onClick={() => handleActivateItem("i10")}
                active={activeItem === "i10"}
                theme={theme.palette.primary.lighter}
                linkTo="/parceiros"
                icon={<ContactsOutlinedIcon />}
                text="Colaboradores"
              />
            </CustomSubMenu>
          </>
        )}

        {tipoUsuario === "colaborador" && (
          <>
            <Item
              sx={{ mt: 2 }}
              smallText={false}
              onClick={() => handleActivateItem("i0")}
              active={activeItem === "i0"}
              icon={<HomeIcon />}
              linkTo="/"
              text="Home"
            />
            <Item
              onClick={() => handleActivateItem("i2")}
              active={activeItem === "i2"}
              theme={theme.palette.primary.lighter}
              linkTo="/eventos-confirmados"
              icon={<CheckBoxOutlinedIcon />}
              text="Eventos confirmados"
            />
            <Item
              onClick={() => handleActivateItem("i3")}
              active={activeItem === "i3"}
              theme={theme.palette.primary.lighter}
              linkTo="/eventos-pendentes"
              icon={<AccessTimeIcon />}
              text="Eventos pendentes"
            />
            <Item
              onClick={() => handleActivateItem("i4")}
              active={activeItem === "i4"}
              theme={theme.palette.primary.lighter}
              linkTo="/eventos/buscar"
              icon={<SearchIcon />}
              text="Buscar"
            />
            <Item
              onClick={() => handleActivateItem("i5")}
              active={activeItem === "i5"}
              theme={theme.palette.primary.lighter}
              linkTo="/convites"
              icon={<MailIcon />}
              text="Convites"
            />
          </>
        )}
      </Menu>
    </Sidebar>
  );
};

export default BarraLateral;
