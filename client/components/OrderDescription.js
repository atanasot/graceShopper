import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";

// need to use componentDidUpdate for order to display previous order items -- fix orders slice in redux store
class OrderDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: [],
    };
  }
  async componentDidMount() {
    const order = (
      await axios.get(`/api/lineItems/order/${this.props.orderId}`, {
        headers: {
          authorization: window.localStorage.getItem("token"),
        },
      })
    ).data;
    this.setState({
      order,
    });
  }

  render() {
    return (
      <div>
        <p>
          <Link to="/orders">Go back</Link>
        </p>
        <ul>
          {this.state.order.map((item) => (
            <li key={item.id}>
              {item.name}
              <p>Price : {item.price}</p>
              <p>Quantity : {item.quantity}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state, otherProps) => {
  const orderId = otherProps.match.params.id * 1;
  return {
    orderId,
  };
};

export default connect(mapStateToProps)(OrderDescription);
