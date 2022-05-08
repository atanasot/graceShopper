import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const loadedStorage = JSON.parse(window.localStorage.getItem("cart"));
  console.log(loadedStorage);

  // const reduced = loadedStorage.reduce((acc, item, idx) => {
  //   // let duplicateBeerId = item[beerId]
  //   // let duplicateWineId = item[wineId]
  //   // if (!acc[duplicateBeerId] || !acc[duplicateWineId]) {
  //   //   return acc
  //   // }
  //   // else if (acc[duplicateBeerId]) {
  //   //   acc[quantity] ++
  //   // } else {

  //   // }
  //   let beerIdDuplicate = item[beerId] // 3
  //   let wineIdDuplicate = item[wineId] // 15
  //   if (item[beerIdDuplicate] || item[wineIdDuplicate]) {
  //     item[quantity] 
  //   }

  // }, []);

  const subtotal = loadedStorage
    ? loadedStorage.reduce(
        (current, accume) => (current += accume.price * accume.quantity),
        0
      )
    : null;
  const shipping = 5.99;
  return (
    <div style={{ marginTop: "200px" }}>
      {loadedStorage ? (
        <div>
          <ul>
            {loadedStorage.map((item) => (
              <li key={item.id}>
                {item.name} ${item.price} quantity: {item.quantity}
                <button onClick={() => console.log("hello")}>
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
        <p>This is an Empty cart</p>
      )}
      <button onClick={() => window.localStorage.clear()}>
        clear all
      </button>
      <button>
        <Link to={"/checkout"}>check out</Link>
      </button>
    </div>
  );
};

export default Cart;
