import axios from "axios";

// make a backend route /api/lineItems

/**
 * ACTION TYPES
 */
const ADD_QTY = "ADD_QTY";
const ADD_WINE_QTY = "ADD_WINE_QTY";
const DELETE_BEER = "DELETE_BEER";

/**
 * ACTION CREATORS
 */

const _addBeer = (beer) => ({ type: ADD_QTY, beer });
const _addWine = (wine) => ({ type: ADD_WINE_QTY, wine });
const _deleteBeer = (beer) => ({ type: DELETE_BEER, beer });

/**
 * THUNK CREATORS
 */

// beer here represented as {id : quantity}
export const addBeer = (beer) => {
  return async (dispatch) => {
    const response = await axios.post("/api/lineItems", beer);
    dispatch(_addBeer(response.data));
  };
};

export const addWine = (wine) => {
  return async (dispatch) => {
    const response = await axios.post("/api/lineItems", wine);
    dispatch(_addWine(response.data));
  };
};

export default function (state = [], action) {
  switch (action.type) {
    case ADD_QTY:
      return [...state, action.beer];
    case ADD_WINE_QTY:
      return [...state, action.wine];
    default:
      return state;
  }
}

// need to add more cases
// add wines as well
// lineItem -- {id : 14, quantity: 2}
