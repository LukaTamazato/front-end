import React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useTheme } from "@emotion/react";
import { ptBR as dataGridPtBR } from "@mui/x-data-grid/locales";

const Tabela = ({ columns, rows }) => {
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <DataGrid
        localeText={dataGridPtBR.components.MuiDataGrid.defaultProps.localeText}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 20,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnResize
      />
    </Box>
  );
};

export default Tabela;
