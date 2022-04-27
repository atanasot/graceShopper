import axios from "axios";

/**
 * ACTION TYPES
 */

const DELETE_BEER = "DELETE_BEER";
const LOAD_CART = "LOAD_CART";
const ADD_BEER = "ADD_BEER";
const ADD_WINE = "ADD_WINE";
const UPDATE_LINEITEM = "UPDATE_LINEITEM";

/**
 * ACTION CREATORS
 */

const _addBeer = (beer) => ({ type: ADD_BEER, beer });

const _addWine = (wine) => ({ type: ADD_WINE, wine });

const _fetchLineItemsFromCart = (lineItems) => ({ type: LOAD_CART, lineItems });

const _deleteBeer = (beer) => ({ type: DELETE_BEER, beer });

// combine _addBeer and _addWine into one if using

/**
 * THUNK CREATORS
 */

// use this thunk to load products from cart -- loggedIn user
export const fetchLineItemsFromCart = () => {
  return async (dispatch) => {
    const lineItems = (
      await axios.get("/api/lineItems", {
        headers: {
          authorization: window.localStorage.getItem("token"),
        },
      })
    ).data;
    dispatch(_fetchLineItemsFromCart(lineItems));
  };
};

export const addBeer = (beer) => {
  return async (dispatch) => {
    const response = await axios.post("/api/lineItems", beer, {
      headers: {
        authorization: window.localStorage.getItem("token"),
      },
    });
    dispatch(_fetchLineItemsFromCart(response.data));
  };
};

export const addWine = (wine) => {
  return async (dispatch) => {
    const response = await axios.post("/api/lineItems", wine, {
      headers: {
        authorization: window.localStorage.getItem("token"),
      },
    });
    dispatch(_fetchLineItemsFromCart(response.data));
  };
};

export default function (state = [], action) {
  switch (action.type) {
    case LOAD_CART:
      return action.lineItems;
    case ADD_BEER:
      return [...state, action.beer];
    case ADD_WINE:
      return [...state, action.wine];
    default:
      return state;
  }
}
