import { Box } from "@mui/material";
import React from "react";
import { MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";

const Item = ({
  active,
  theme,
  color = "white",
  linkTo,
  icon,
  text,
  onClick,
  smallText = true,
  sx,
}) => {
  return (
    <Box sx={sx}>
      <MenuItem
        onClick={onClick}
        active={active}
        rootStyles={{
          span: {
            color: theme,
            fontSize: smallText ? "14px" : "16px",
          },
          "*": {
            fontSize: smallText ? "18px" : null,
          },
        }}
        color={color}
        component={<Link to={linkTo} />}
        icon={icon}
      >
        <span>{text}</span>
      </MenuItem>
    </Box>
  );
};

export default Item;
