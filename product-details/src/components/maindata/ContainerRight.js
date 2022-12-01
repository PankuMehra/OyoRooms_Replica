import React from "react";
import "./ContainerRight.css";

export default function ContainerRight(props) {
  const { state } = props;
  return (
    <>
      {state.length > 0 ? (
        <div>
          <div className="login">
            <div>
              <p>% &nbsp;</p>
              <p>Get Exclusive Offers</p>
            </div>
            <button>Login</button>
          </div>
          <div className="displayprice">
            <div>
              <p>₹{state[0].price}</p>
              <p>₹{state[0].strikedPrice}</p>
              <p>76%off</p>
            </div>
            <p>Inclusive of all taxes</p>
          </div>

          <div className="rooms">
            <p>Sun,4 Dec-Mon,5 Dec</p>
            <p>1 Room,2 Guest</p>
          </div>
          <div className="Tprice">
            <div>
              <p>Total Price </p>
              <p>₹{state[0].price}</p>
            </div>

            <p>(incl. of all taxes)</p>
          </div>
          <button className="booknow">Book Now</button>
        </div>
      ) : (
        <div>Loading..</div>
      )}
    </>
  );
}
