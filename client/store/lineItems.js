import axios from "axios";

// make a backend route /api/lineItems

/**
 * ACTION TYPES
 */
const ADD_QTY = "ADD_QTY";
const ADD_WINE_QTY = "ADD_WINE_QTY";
const DELETE_BEER = "DELETE_BEER";

const ADD_BEER = "ADD_BEER";

/**
 * ACTION CREATORS
 */

const _addBeer = (beer) => ({ type: ADD_QTY, beer });
const _addWine = (wine) => ({ type: ADD_QTY, wine });

const _addBeerToLocalStorage = (beer) => ({ type: ADD_BEER, beer });

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
export const addBeerLocalStorage = (beer) => {
  return (dispatch) => {
    // to do
    dispatch(_addBeerToLocalStorage(beer));
  };
};

export default function (state = [], action) {
  switch (action.type) {
    case ADD_QTY:
      return [...state, action.beer];
    case ADD_QTY:
      return [...state, action.wine];
    case ADD_BEER:
      return [...state, action.beer];
    default:
      return state;
  }
}

// need to add more cases
// add wines as well
// lineItem -- {id : 14, quantity: 2}
