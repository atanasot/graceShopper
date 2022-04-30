import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
//import { fetchLineItemsByOrder } from "../store/lineItems";

class CartAfterlogin extends Component {
  constructor() {
    super();
    this.state = {
      shipping: 5.99,
    };
  }
  render() {
    const { lineItems } = this.props;
    const subtotal =
      lineItems
        .reduce(
          (accume, current) => accume + current.price * current.quantity,
          0
        )
        .toFixed(2) * 1;
    const { shipping } = this.state;
    console.log(lineItems);
    return lineItems.length ? (
      <div>
        <p>
          <Link to="/">Continue Shopping</Link>
        </p>
        <ul>
          {lineItems.map((lineItem) => (
            <li key={lineItem.id}>
              {lineItem.name}
              <p>Price : ${lineItem.price}</p>
              <p>Quantity : {lineItem.quantity}</p>
              <hr />
            </li>
          ))}
          <p>Subtotal:${subtotal}</p>
          <p>Shipping:${shipping}</p>
          <p>Total:${(subtotal + shipping).toFixed(2) * 1}</p>
          <button>
            <Link to="/checkout">Checkout</Link>
          </button>
        </ul>
      </div>
    ) : (
      <div>
        <p>
          <Link to="/">Continue Shopping</Link>
        </p>
        <p>This is an empty cart</p>
      </div>
    );
  }
}

// Kenny you are not really using this route since you are loading lineitems directly from the state
// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchLineItemsByOrder: (orderId) =>
//       dispatch(fetchLineItemsByOrder(orderId)),
//   };
// };

//export default connect((state) => state, mapDispatchToProps)(CartAfterlogin);
export default connect((state) => state)(CartAfterlogin);
