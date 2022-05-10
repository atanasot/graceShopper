import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import auth from "./auth";
import wines from "./wines";
import beers from "./beers";
import lineItems from "./lineItems";
import orders from "./orders";
import customers from "./customers";
import cartNumber from "./cartNumber";

const reducer = combineReducers({
  auth,
  wines,
  beers,
  lineItems,
  orders,
  customers,
  cartNumber
});
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from "./auth";
export * from "./beers";
export * from "./wines";
export * from "./lineItems";
export * from "./orders";
export * from "./customers";
export * from "./cartNumber"
