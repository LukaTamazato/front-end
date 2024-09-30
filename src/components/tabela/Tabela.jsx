import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const Tabela = ({columns, rows}) => {
    return (
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
                disableColumnResize
                sx={{
                    '& .MuiDataGrid-topContainer': {
                      backgroundColor: '#fafafa',
                    },
                  }}
            />
        </Box>
    );
}

export default Tabela;