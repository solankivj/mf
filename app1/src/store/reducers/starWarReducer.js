import starWarActions from '../actions/starWarActions';

export default function starWarReducer(state = { films: [] }, action) {
  switch (action.type) {
    case starWarActions.GET_STAR_WARS_FILMS_SUCCESS:
      return {
        ...state,
        films: action.payload,
      };
    default:
      return state;
  }
}
