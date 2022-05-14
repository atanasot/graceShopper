import axios from "axios";

/**
 * ACTION TYPES
 */

const LOAD_ORDERS = "LOAD_ORDERS";
const ADMIN_LOAD_ORDERS = "ADMIN_LOAD_ORDERS";
/**
 * ACTION CREATORS
 */

const _fetchOrders = (orders) => ({ type: LOAD_ORDERS, orders });

/**
 * THUNK CREATORS
 */

export const fetchOrders = () => {
  return async (dispatch) => {
    const orders = (
      await axios.get("/api/orders", {
        headers: {
          authorization: window.localStorage.getItem("token"),
        },
      })
    ).data;
    dispatch(_fetchOrders(orders));
  };
};

export const adminFetchOrders = () => {
  return async (dispatch) => {
    const orders = await (
      await axios.get("/api/orders/admin", {
        headers: {
          authorization: window.localStorage.getItem("token"),
        },
      })
    ).data;
    dispatch({ type: ADMIN_LOAD_ORDERS, orders });
  };
};

export default function (state = [], action) {
  switch (action.type) {
    case LOAD_ORDERS:
      return action.orders;
    case ADMIN_LOAD_ORDERS:
      return action.orders;
    default:
      return state;
  }
}
