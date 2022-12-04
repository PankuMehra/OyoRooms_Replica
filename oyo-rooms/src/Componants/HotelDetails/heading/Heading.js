import React from "react";

export default function Heading(props) {
  const { state } = props;
  return (
    <>
      <div className="heading" id="section0">
        <div>
          <h1>{state[0].hotelName}</h1>
          <p>{state[0].address}</p>
        </div>
        <div>
          <button>{state[0].rating} &#9733;</button>
          <p>{state[0].ratingCount}</p>
        </div>
      </div>

      <p className="pink">Allows Couples | In-House Kitchen</p>

      <h2>Description</h2>
      <p style={{ marginTop: "5px" }}>
        <i>
          Did you know that we’ve got 2.5 Crore bookings since March 2020? And
          this is all thanks to the sanitisation & safety measures followed at
          our properties, from disinfecting surfaces with high-quality cleaning
          products and maintaining social distance to using protective gear and
          more.
        </i>
      </p>
      <h4 style={{ color: "red", margin: "0" }}>Read more</h4>
    </>
  );
}
