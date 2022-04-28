import axios from "axios";

const LOAD_CUSTOMERS = "LOAD_CUSTOMERS";

const _fetchCustomers = (customers) => ({ type: LOAD_CUSTOMERS, customers });

export const fetchCustomers = () => {
  return async (dispatch) => {
    const customers = (await axios.get("/api/customers")).data;
    dispatch(_fetchCustomers(customers));
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
