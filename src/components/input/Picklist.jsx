import { InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";

const Picklist = ({items, handleChange, value, name}) => {
    return (
        <>
        <InputLabel id={`${name}-select`}>Função</InputLabel>
        <Select
        // onChange={(event) => params.api.setEditCellValue({ id: params.id, field: 'function', value: event.target.value })}
        onChange={((e) => handleChange(e, name))}
        fullWidth
        name={name}
        label="Função"
        value={value}
        labelId={`${name}-select`}
        >
            {
                items && (
                    items.map((item, index) => {
                        return (
                            <MenuItem key={index} value={item.valor}>{item.valor}</MenuItem>
                        )
                    })
                )
            }
        </Select>
        </>
    );
}

export default Picklist;