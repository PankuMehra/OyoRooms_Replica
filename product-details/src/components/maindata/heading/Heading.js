import React from "react";

export default function Heading(props) {
  const { state } = props;
  return (
    <div className="heading">
      <div>
        <h1>{state[0].hotelName}</h1>
        <p>{state[0].address}</p>
      </div>
      <div>
        <button>{state[0].rating} &#9733;</button>
        <p>{state[0].ratingCount}</p>
      </div>
    </div>
  );
}
