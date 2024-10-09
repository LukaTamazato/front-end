import { InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";

const Picklist = ({items, handleChange, value, name, label}) => {
    return (
        <>
        <InputLabel id={`${name}-select`}>{label}</InputLabel>
        <Select
        // onChange={(event) => params.api.setEditCellValue({ id: params.id, field: 'function', value: event.target.value })}
        onChange={((e) => handleChange(e, name))}
        fullWidth
        name={name}
        label={label}
        value={value}
        labelId={`${name}-select`}
        >
            {
                items && (
                    items.map((item, index) => {
                        return (
                            <MenuItem key={index} value={item.value}>{item.value}</MenuItem>
                        )
                    })
                )
            }
        </Select>
        </>
    );
}

export default Picklist;