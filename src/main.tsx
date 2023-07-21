import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ThemeProvider, createTheme } from '@mui/material';
import './styles/reset.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#8b00ff',
    },
    secondary: {
      main: '#ffb6c1',
    },
  },
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
    fontSize: 16,
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
