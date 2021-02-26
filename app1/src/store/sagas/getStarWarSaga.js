import { call, put, take } from "redux-saga/effects";
import axios from "axios";

const get = (url, params, headers) =>
  new Promise((resolve) => {
    axios
      .get(url, { params, headers })
      .then((response) => resolve(response))
      .catch((error) => resolve(error.response));
  });

export default function* getStarwars() {
  while (true) {
    try {
      yield take("GET_STAR_WARS_FILMS");

      const response = yield call(get, "https://swapi.dev/api/films");

      if (response.status >= 400) {
        console.log("Error GET_STAR_WARS_FILMS");
      } else {
        yield put({
          type: "GET_STAR_WARS_FILMS_SUCCESS",
          payload: response.data.results,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
}
