import React from 'react'
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components'

import Global from 'styles/global'
import { mainTheme } from 'themes/main';

import store from 'store';

const RouterWrapper: React.FC = ({ children }) => (
  <ThemeProvider theme={mainTheme}>
    <Provider store={store}>
      {children}
    </Provider>
    <Global />
  </ThemeProvider>
)

export default RouterWrapper;

