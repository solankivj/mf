import React from 'react';
import Router from './router';
import { GlobalProvider } from 'myglobalcontext';

import 'myglobalcss/css/index.css';
import './styles.scss';

function App() {
  return (
    <GlobalProvider>
      <Router />
    </GlobalProvider>
  );
}

export default App;
