import axios from "axios";

const LOAD_CUSTOMERS = "LOAD_CUSTOMERS";

export const fetchCustomers = () => {
  return async (dispatch) => {
    const customers = await axios.get("/api/customers", {
      headers: {
        authorization: window.localStorage.getItem("token"),
      },
    });
    dispatch({ type: LOAD_CUSTOMERS, customers: customers.data });
  };
};

export default function (state = [], action) {
  switch (action.type) {
    case LOAD_CUSTOMERS:
      return action.customers;
    default:
      return state;
  }
}
