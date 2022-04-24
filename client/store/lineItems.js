import axios from "axios";

// make a backend route /api/lineItems

/**
 * ACTION TYPES
 */
const ADD_QTY = "ADD_QTY";
//const ADD_WINE_QTY = "ADD_WINE_QTY";
const DELETE_BEER = "DELETE_BEER";
const LOAD_CART = "LOAD_CART"
const ADD_BEER = "ADD_BEER";
const ADD_WINE = "ADD_WINE";

/**
 * ACTION CREATORS
 */

const _addBeer = (beer) => ({ type: ADD_BEER, beer });
const _addWine = (wine) => ({ type: ADD_WINE, wine });

//const _addBeerToLocalStorage = (beer) => ({ type: ADD_BEER, beer });

const _fetchLineItemsFromCart = (lineItems) => ({type: LOAD_CART, lineItems})
 
const _deleteBeer = (beer) => ({ type: DELETE_BEER, beer });

/**
 * THUNK CREATORS
 */

// use this thunk to load products from cart? 
export const fetchLineItemsFromCart = () => {
  return async(dispatch) => {
    const lineItems = (await axios.get('/api/lineItems', {
      headers: {
        authorization: window.localStorage.getItem('token')
      }
    })).data
    dispatch(_fetchLineItemsFromCart(lineItems))
  }
}





// export const addBeer1 = (beer) => {
//   return async (dispatch) => {
//     const response = await axios.post("/api/lineItems", beer);
//     dispatch(_addBeer(response.data));
//   };
// };

export const addBeer = (beer) => {
  return async (dispatch) => {
    const response = await axios.post("/api/lineItems", beer, {
      headers: {
        authorization: window.localStorage.getItem('token')
      }
    });
    dispatch(_addBeer(response.data));
  };
};

export const addWine = (wine) => {
  return async (dispatch) => {
    const response = await axios.post("/api/lineItems", wine, {
      headers: {
        authorization: window.localStorage.getItem('token')
      }
    });
    dispatch(_addWine(response.data));
  };
};

// export const addWine1 = (wine) => {
//   return async (dispatch) => {
//     const response = await axios.post("/api/lineItems", wine);
//     dispatch(_addWine(response.data));
//   };
// };
// export const addBeerLocalStorage = (beer) => {
//   return (dispatch) => {
//     // to do
//     dispatch(_addBeerToLocalStorage(beer));
//   };
// };

export default function (state = [], action) {
  switch (action.type) {
    case LOAD_CART:
      return action.lineItems
    case ADD_BEER:
      return [...state, action.beer];
    case ADD_WINE:
      return [...state, action.wine];
    default:
      return state;
  }
}

// need to add more cases
// add wines as well
// lineItem -- {id : 14, quantity: 2}
