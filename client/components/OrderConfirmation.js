import React from "react";
import { Link } from "react-router-dom";

const Confirm = () => {
  return (
    <div className="columns" style={{ marginTop: "120px" }}>
      <div className="column main">
        <input name="form_key" type="hidden" defaultValue="PefvQbePmuX6e2ZN" />
        <div id="authenticationPopup" data-bind="scope:'authenticationPopup'">
          <div className="success-extras">
            <i className="far fa-check-circle" />
            <p>Thanks for your order!</p>
            <p className="success-lrg">
              Sit back, relax or even better...go for a run! We'll take care of
              the rest.
            </p>
            <hr className="divider" />
          </div>
        </div>
        <div className="checkout-success">
          <p>
            Your order # is: <span>000166954</span>.
          </p>
          <p>
            We'll email you an order confirmation with details and tracking
            info.
          </p>
          <div className="actions-toolbar">
            <div className="primary">
              <Link to="/" className="action primary continue">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
        <div id="registration" data-bind="scope:'registration'">
          <br />
          <div
            data-role="checkout-messages"
            className="messages"
            data-bind="visible: isVisible(), click: removeAll"
          />
          <div>
            <p data-bind="i18n: 'You can track your order status by creating an account.'">
              You can track your order status by in your account.
            </p>

            <div className="actions-toolbar">
              <div className="primary">
                <Link to="/orders" className="action primary continue">
                  Go To Account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
