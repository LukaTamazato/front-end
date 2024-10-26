import { useTheme } from "@emotion/react";
import React from "react";
import { SubMenu, menuClasses } from "react-pro-sidebar";

const CustomSubMenu = ({ children, icon, label }) => {
  const theme = useTheme();

  return (
    <SubMenu
      defaultOpen
      rootStyles={{
        ["." + menuClasses.subMenuContent]: {
          width: "auto",
          backgroundColor: theme.palette.primary.main,
        },
      }}
      label={label}
      icon={icon}
    >
      {children}
    </SubMenu>
  );
};

export default CustomSubMenu;
