import axios from "axios";

/**
 * ACTION TYPES
 */

const LOAD_ORDERS = "LOAD_ORDERS";
const ADD_BEER = "ADD_BEER";
const ADD_WINE = "ADD_WINE";

/**
 * ACTION CREATORS
 */

// const _addBeer = (beer) => ({ type: ADD_BEER, beer });

// const _addWine = (wine) => ({ type: ADD_WINE, wine });

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

// export const addBeerToOrders = (beer) => {
//   return async (dispatch) => {
//     const response = await axios.post("/api/orders", beer, {
//       headers: {
//         authorization: window.localStorage.getItem("token"),
//       },
//     });
//     dispatch(_addBeer(response.data));
//   };
// };

// export const addWineToOrders = (wine) => {
//   return async (dispatch) => {
//     const response = await axios.post("/api/orders", wine, {
//       headers: {
//         authorization: window.localStorage.getItem("token"),
//       },
//     });
//     dispatch(_addWine(response.data));
//   };
// };

export default function (state = [], action) {
  switch (action.type) {
    case LOAD_ORDERS:
      return action.orders;
    case ADD_BEER:
      return [...state, action.beer];
    case ADD_WINE:
      return [...state, action.wine];
    default:
      return state;
  }
}
