import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Routes from './routes';
import Menu from './components/Menu';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <GlobalStyle />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
