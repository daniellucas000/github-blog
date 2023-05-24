import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';

import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';

import moment from 'moment';
import 'moment/dist/locale/pt-br';

moment.locale('pt-br');

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
