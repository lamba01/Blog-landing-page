import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material';
// to override theme
const theme = createTheme({
  // color palette
  palette: {
    primary: {
      main: "#CCC",
    },
  },
  // typography
  typography: {
    fontFamily: [
      'Overpass',
      'Ubuntu',
      'sans-serif',
    ].join(','),
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    myvariant: {
      color: 'hsl(208, 49%, 24%)',
      fontSize: '1rem'
    },
  },
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>
);


