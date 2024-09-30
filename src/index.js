import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Box, createTheme, ThemeProvider } from '@mui/material';
import '@fontsource/montserrat';
import './index.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#182F4E',
      lighter: '#d8e4f3'
    },
    secondary: {
      main: '#ef6c00',
    },
    white: {
      main: '#f7f7f7'
    },
    paper: {
      main: '#f0f0f0'
    }
  },
  typography: {
    fontFamily: 'Montserrat, Arial, sans-serif',
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'white',
          color: 'black',
        },
      },
    },
  },
  mixins: {
    MuiDataGrid: {
      pinnedBackground: '#00000000',
      containerBackground: '#00000000',
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: 'paper.main' }}>
        <App />
      </Box>
    </ThemeProvider>
  </React.StrictMode>
);
