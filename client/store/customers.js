import axios from "axios";

const LOAD_CUSTOMERS = "LOAD_CUSTOMERS";
const ADMIN_ADD_CUSTOMER = "ADMIN_ADD_CUSTOMER";

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

export const adminAddCustomer = (_customer) => {
  return async (dispatch) => {
    const customer = (
      await axios.post("/api/customers", _customer, {
        headers: {
          authorization: window.localStorage.getItem("token"),
        },
      })
    ).data;
    dispatch({ type: ADMIN_ADD_CUSTOMER, customer });
  };
};

export default function (state = [], action) {
  switch (action.type) {
    case LOAD_CUSTOMERS:
      return action.customers;
    case ADMIN_ADD_CUSTOMER:
      return [...state, action.customer];
    default:
      return state;
  }
}
