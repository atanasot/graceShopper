import axios from "axios";
import { fetchOrders } from "./orders";
/**
 * ACTION TYPES
 */

const LOAD_CART = "LOAD_CART";
const UPDATE_LINEITEM = "UPDATE_LINEITEM";
const LOAD_ORDER_ITEMS = "LOAD_ORDER_ITEMS";
const DELETE_ITEM = "DELETE_ITEM";

/**
 * ACTION CREATORS
 */

const _fetchLineItemsFromCart = (lineItems) => ({ type: LOAD_CART, lineItems });

const _fetchLineItemsByOrder = (lineItems) => ({
  type: LOAD_ORDER_ITEMS,
  lineItems,
});

// const _deleteItem = (item) => {
//   return {
//     type: DELETE_ITEM,
//     item,
//   };
// };

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
    await dispatch(fetchOrders());
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

export const addToCart = (lineItem) => {
  return async (dispatch) => {
    const response = await axios.post("/api/lineItems", lineItem, {
      headers: {
        authorization: window.localStorage.getItem("token"),
      },
    });
    dispatch(_fetchLineItemsFromCart(response.data));
    await dispatch(fetchOrders());
  };
};

export const deleteItem = (item) => {
  return async (dispatch) => {
    await axios.delete(`/api/lineItems/${item.id}`);
    dispatch(_deleteItem(item));
  };
};

export const updateItemQty = (lineItemId, orderId, quantity) => {
  return async (dispatch) => {
    const response = await axios.put(
      "/api/lineItems",
      { lineItemId, quantity, orderId },
      {
        headers: {
          authorization: window.localStorage.getItem("token"),
        },
      }
    );
    dispatch(_fetchLineItemsFromCart(response.data));
    await dispatch(fetchOrders());
  };
};

// fix order items
export default function (state = [], action) {
  switch (action.type) {
    case LOAD_CART:
      return action.lineItems;
    case LOAD_ORDER_ITEMS:
      return action.lineItems;
    case DELETE_ITEM:
      return [...state.filter((item) => item.id !== action.item.id)];
    default:
      return state;
  }
}
