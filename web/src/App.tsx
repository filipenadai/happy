import React from 'react';

import 'leaflet/dist/leaflet.css';
import GlobalStyle from './styles/global';

import Routes from './routes';

const App: React.FC = () => (
  <>
    <Routes />
    <GlobalStyle />
  </>
);

export default App;
