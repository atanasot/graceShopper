import axios from "axios";

const LOAD_CUSTOMERS = "LOAD_CUSTOMERS";
const ADMIN_ADD_CUSTOMER = "ADMIN_ADD_CUSTOMER";
const ADMIN_UPDATE_ADDRESS = "ADMIN_UPDATE_ADDRESS";

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

export const adminAddAddress = (_address) => {
  return async (dispatch) => {
    const address = (
      await axios.post("/api/customers/address", _address, {
        headers: {
          authorization: window.localStorage.getItem("token"),
        },
      })
    ).data;
  };
};

export const updateAddress = (_address) => {
  return async (dispatch) => {
    const address = (
      await axios.put("/api/customers/address", _address, {
        headers: {
          authorization: window.localStorage.getItem("token"),
        },
      })
    ).data;
    dispatch({ type: ADMIN_UPDATE_ADDRESS, address });
  };
};

export default function (state = [], action) {
  switch (action.type) {
    case LOAD_CUSTOMERS:
      return action.customers;
    case ADMIN_ADD_CUSTOMER:
      return [...state, action.customer];
    case ADMIN_UPDATE_ADDRESS:
      return action.address;
    default:
      return state;
  }
}
