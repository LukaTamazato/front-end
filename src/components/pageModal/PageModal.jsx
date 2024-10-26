import { Box } from '@mui/material';
import React from 'react';

const PageModal = ({children}) => {

    const style = {
        pageModal: {
            bgcolor: "#FFFFFF", 
            p: 3, 
            minHeight: "100%", 
            boxShadow: 2, 
            borderRadius: 2, 
            display: "flex", 
            flexDirection: "column"
        }
    }

    return(
        <Box sx={style.pageModal}>
            {children}
        </Box>
    );
}

export default PageModal;