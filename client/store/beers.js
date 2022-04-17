import axios from "axios";

/**
 * ACTION TYPES
 */
const LOAD_BEERS = "LOAD_BEERS";

/**
 * ACTION CREATORS
 */

const _fetchBeers = (beers) => ({ type: LOAD_BEERS, beers });

/**
 * THUNK CREATORS
 */

export const fetchBeers = () => {
  return async (dispatch) => {
    const beers = await axios.get("/api/beers").data;
    dispatch(_fetchBeers(beers));
  };
};

/**
 * REDUCER
 */
export default function (state = [], action) {
  switch (action.type) {
    case LOAD_BEERS:
      return action.beers;
    default:
      return state;
  }
}
