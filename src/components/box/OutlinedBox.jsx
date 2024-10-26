import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";

const OutlinedBox = ({children, sx}) => {

    const theme = useTheme();

    return (
        <Box sx={{...sx, borderColor: theme.palette.paper.dark, p: 3, borderRadius: 4}} border={1}>
            {children}
        </Box>
    );
}

export default OutlinedBox;