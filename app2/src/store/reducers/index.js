import { combineReducers } from 'redux';
import starWarReducers from './starWarReducer';

const reducers = combineReducers({
  starWar: starWarReducers,
});

export default reducers;
