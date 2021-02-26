import React from 'react';
import { connect } from 'react-redux';
import { useGlobalState } from 'myglobalcontext';
import './style.scss';

const Home = () => {
  const {
    state: { rtl },
  } = useGlobalState();

  return (
    <div
      style={{
        textAlign: rtl ? 'right' : 'left',
      }}
    >
      <h2 className="app1-home-heading">App1 Home Component</h2>
    </div>
  );
};

export default connect((state) => state)(Home);
