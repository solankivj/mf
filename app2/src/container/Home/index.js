import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useGlobalState } from 'myglobalcontext';
import './style.scss';

const Home = ({ starWar, dispatch }) => {
  useEffect(() => {
    dispatch({ type: 'GET_STAR_WARS_FILMS' });
  }, [dispatch]);

  const {
    state: { rtl },
  } = useGlobalState();

  return (
    <div
      style={{
        width: '100%',
        textAlign: rtl ? 'right' : 'left',
        marginTop: '100px',
      }}
    >
      {starWar.films.map((film) => (
        <h4 key={film.title}>{film.title}</h4>
      ))}
    </div>
  );
};

export default connect((state) => state)(Home);
