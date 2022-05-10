import axios from "axios";

const SET_CART_NUMBER = "SET_CART_NUMBER";

const _updateCartNumber = (number) => ({ type: SET_CART_NUMBER, number });

export const updateCartNumber = (number) => {
  return async (dispatch) => {
    dispatch(_updateCartNumber(number));
  };
};

export default function (state = 0, action) {
  switch (action.type) {
    case SET_CART_NUMBER:
      return action.number;
    default:
      return state;
  }
}
