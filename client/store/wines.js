import axios from "axios";

/**
 * ACTION TYPES
 */
const LOAD_WINES = "LOAD_WINES";

/**
 * ACTION CREATORS
 */

const _fetchWines = (wines) => ({ type: LOAD_WINES, wines });

/**
 * THUNK CREATORS
 */

export const fetchWines = () => {
  return async (dispatch) => {
    const wines = (await axios.get("/api/wines")).data;
    //console.log("Loading wines");
    //console.log(wines.data);
    dispatch(_fetchWines(wines));
  };
};

/**
 * REDUCER
 */
export default function (state = [], action) {
  switch (action.type) {
    case LOAD_WINES:
      return action.wines;
    default:
      return state;
  }
}
