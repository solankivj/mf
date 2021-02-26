import React, { Suspense } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import withGlobalStateErrorBoundary from '../store/withGlobalState';
import Home from '../container/Home';
import { useGlobalState } from 'myglobalcontext';

// MF Imports
const RemoteApp = withGlobalStateErrorBoundary(
  'Remote App',
  React.lazy(() => import('newapp/Home'))
);

const Router = () => {
  const {
    state: { rtl },
    action: { setRtl },
  } = useGlobalState();

  return (
    <div>
      <BrowserRouter>
        <nav
          className="navbar"
          style={{
            flexDirection: rtl ? 'row-reverse' : 'row',
            alignItems: 'center',
          }}
        >
          <div>
            <Link style={{ fontSize: '2rem' }} to="/">
              Go to Home
            </Link>
            &nbsp; - &nbsp;
            <Link style={{ fontSize: '2rem' }} to="/yap">
              Go to Remote App
            </Link>
          </div>
          <div>
            <button onClick={() => setRtl((rtl) => !rtl)}>
              {rtl ? 'LTR' : 'RTL'}
            </button>
          </div>
        </nav>
        <Switch>
          <Suspense fallback={null}>
            <Route exact path="/" component={Home} />
            <Route path="/yap" component={RemoteApp} />
          </Suspense>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Router;
