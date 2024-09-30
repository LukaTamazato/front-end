import { MenuItem, Select } from "@mui/material";
import React from "react";

const Picklist = ({params, items}) => {
    return (
        <Select
        value={params.value}
        onChange={(event) => params.api.setEditCellValue({ id: params.id, field: 'function', value: event.target.value })}
        fullWidth
        >
            {
                items && (
                    items.map((item, index) => {
                        return (
                            <MenuItem key={index} value={item}>{item}</MenuItem>
                        )
                    })
                )
            }
        </Select>
    );
}

export default Picklist;