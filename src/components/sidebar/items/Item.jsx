import React from "react";
import { MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";

const Item = ({active, theme, color="white", linkTo, icon, text, onClick}) => {
    return (
        <MenuItem
            onClick={onClick}
            active={active}
            rootStyles={{
                '*': {
                    color: theme,
                    fontSize: '16px'
                }
            }} 
            color={color} 
            component={<Link to={linkTo} />} 
            icon={icon}>
                {text}
        </MenuItem>
    )
}

export default Item;