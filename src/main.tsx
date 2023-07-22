import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './styles/reset.css';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';

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
    h3: {
      fontSize: 26,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
