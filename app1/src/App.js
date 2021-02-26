import React from 'react';
import 'myglobalcss/css/index.css';
import { GlobalProvider } from 'myglobalcontext';
import './styles.scss';
import Router from './router';

function App() {
  return (
    <GlobalProvider>
      <div>
        <div className="conatiner">connn</div>
        <Router />
      </div>
    </GlobalProvider>
  );
}

export default App;
