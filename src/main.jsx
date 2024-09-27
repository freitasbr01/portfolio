import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components';
import i18n from '../i18n';

import theme from './styles/theme';
import GlobalStyles from './styles/global';

import { Route } from './routes';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        <Route />
    </ThemeProvider>
  </React.StrictMode>,
)
