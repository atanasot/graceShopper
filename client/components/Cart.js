import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
          <button onClick={() => localStorage.clear()}>clear all</button>
          <button>
            <Link to={"/checkout"}>check out</Link>
          </button>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "-90px",
            marginBottom: "140px",
          }}
        >
          <div className="wrapper11">
            <div className="product-img">
              <img
                src="/images/empty.jpg"
                style={{ height: "320px", width: "327px" }}
                alt=""
              />
            </div>
            <div className="product-info">
              <div className="product-text">
                <h1 className="h1111">This is an empty cart =(</h1>
                <h2></h2>
                <p></p>
              </div>
              <div
                className="btn-2"
                style={{ marginLeft: "-35px", marginTop: "-100px" }}
              >
                <Link to={"/"}>
                  <span style={{ fontSize: "0.7rem" }}>CONTINUE SHOPPING</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
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
