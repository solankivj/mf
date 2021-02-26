import { fork } from 'redux-saga/effects';
import getStarwars from './getStarWarSaga';

export default function* root() {
  yield fork(getStarwars);
}
