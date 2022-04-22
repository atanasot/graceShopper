import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const loadedStorage = JSON.parse(window.localStorage.getItem("cart"));
  const subtotal = loadedStorage
    ? loadedStorage.reduce(
        (current, accume) => (current += accume.price * 1),
        0
      )
    : null;
  const shipping = 5.99;
  return (
    <div>
      {loadedStorage ? (
        <div>
          <ul>
            {loadedStorage.map((item) => (
              <li key={item.id}>
                {item.name} ${item.price}
                <button
                  onClick={() => window.localStorage.removeItem(`${item.name}`)}
                >
                  remove this item
                </button>
              </li>
            ))}
          </ul>
          <p>Subtotal = ${subtotal.toFixed(2)}</p>
          <p>Shipping = ${shipping}</p>
          <p>Total = ${(subtotal + shipping).toFixed(2)}</p>
        </div>
      ) : (
        <p>This is an Emtry cart</p>
      )}
      <button onClick={() => localStorage.clear()}>clear all</button>
      <button>
        <Link to={"/checkout"}>check out</Link>
      </button>
    </div>
  );
};

export default Cart;
