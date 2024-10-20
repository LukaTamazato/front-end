import { FormControl, Grid2, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";

const Picklist = ({items, handleChange, value, name, label, size={ sm: 12, md: 6 }, disabled=false, itemParam='value', variant="outlined"}) => {
    return (
        <Grid2 size={size}>
            <FormControl sx={{width: "100%", mt: 2}}>
                <InputLabel id={`${name}-select`}>{label}</InputLabel>
                <Select
                // onChange={(event) => params.api.setEditCellValue({ id: params.id, field: 'function', value: event.target.value })}
                onChange={((e) => handleChange(e, name))}
                fullWidth
                name={name}
                label={label}
                value={value}
                labelId={`${name}-select`}
                disabled={disabled}
                variant={variant}
                >
                { items && (
                    items.map((item ) => {
                        return (
                            <MenuItem key={item.id} value={item.id}>{item[itemParam]}</MenuItem>
                        )
                    })
                )
                }
                </Select>
            </FormControl>
        </Grid2>
    );
}

export default Picklist;