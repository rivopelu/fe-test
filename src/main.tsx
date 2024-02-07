import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/index.scss';
import { ThemeProvider } from '@mui/material';
import { themeConfig } from './config/ThemeConfig.ts';
import './config/i18Config.ts';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import storeRedux from './redux/store.ts';
import { SnackbarProvider } from 'notistack';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={storeRedux}>
        <ThemeProvider theme={themeConfig}>
          <SnackbarProvider maxSnack={3}>
            <App />
          </SnackbarProvider>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
