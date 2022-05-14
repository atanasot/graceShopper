import axios from "axios";

/**
 * ACTION TYPES
 */
const LOAD_WINES = "LOAD_WINES";
const ADMIN_ADD_WINE = "ADMIN_ADD_WINE";
const ADMIN_UPDATE_WINE = "ADMIN_UPDATE_WINE";

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
    dispatch(_fetchWines(wines));
  };
};
export const searchWines = (params) => {
  return async (dispatch) => {
    const wines = (await axios.get("/api/wines/search", { params })).data;
    dispatch(_fetchWines(wines));
  };
};
export const queryWines = (query) => {
  return async (dispatch) => {
    const wines = (await axios.get(`/api/wines/filter?query=${query}`)).data
    dispatch(_fetchWines(wines));
  };
};
export const adminAddWine = (_wine) => {
  return async (dispatch) => {
    const wine = (
      await axios.post("/api/wines", _wine, {
        headers: {
          authorization: window.localStorage.getItem("token"),
        },
      })
    ).data;
    dispatch({ type: ADMIN_ADD_WINE, wine });
  };
};

export const adminUpdateWine = (_wine) => {
  return async (dispatch) => {
    const wine = (
      await axios.put(`/api/wines/${_wine.wineId}`, _wine, {
        headers: {
          authorization: window.localStorage.getItem("token"),
        },
      })
    ).data;
    dispatch({ type: ADMIN_UPDATE_WINE, wine });
  };
};

/**
 * REDUCER
 */
export default function (state = [], action) {
  switch (action.type) {
    case LOAD_WINES:
      return action.wines;
    case ADMIN_ADD_WINE:
      return [...state, action.wine];
    case ADMIN_ADD_WINE:
      return [...state, action.wine];
    default:
      return state;
  }
}
