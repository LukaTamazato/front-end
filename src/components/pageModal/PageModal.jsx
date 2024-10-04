import { Box } from '@mui/material';
import React from 'react';

const PageModal = ({children}) => {
    return(
        <Box sx={{bgcolor: "#FFFFFF", p: 3, minHeight: "100%", boxShadow: 2, borderRadius: 2, display: "flex", flexDirection: "column"}}>
            {children}
        </Box>
    );
}

export default PageModal;