import axios from "axios";

/**
 * ACTION TYPES
 */

const DELETE_BEER = "DELETE_BEER";
const LOAD_CART = "LOAD_CART";
const UPDATE_LINEITEM = "UPDATE_LINEITEM";
const LOAD_ORDER_ITEMS = "LOAD_ORDER_ITEMS";

/**
 * ACTION CREATORS
 */

const _fetchLineItemsFromCart = (lineItems) => ({ type: LOAD_CART, lineItems });

const _deleteBeer = (beer) => ({ type: DELETE_BEER, beer });

const _fetchLineItemsByOrder = (lineItems) => ({
  type: LOAD_ORDER_ITEMS,
  lineItems,
});

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

export const fetchLineItemsByOrder = (orderId) => {
  return async (dispatch) => {
    const lineItems = (
      await axios.get(`/api/lineItems/order/${orderId}`, {
        headers: {
          authorization: window.localStorage.getItem("token"),
        },
      })
    ).data;
    dispatch(_fetchLineItemsByOrder(lineItems));
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
    case LOAD_ORDER_ITEMS:
      return action.lineItems;
    default:
      return state;
  }
}
