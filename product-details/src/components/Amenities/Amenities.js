import React from "react";
import "./Amenities.css";
export default function Amenities(props) {
  const { state } = props;
  return (
    <>
      <section id="section1">
        <h2>Amenities</h2>
        <div className="Amenities">
          <p>{state[0].facility1}</p>
          <p>{state[0].facility2}</p>
          <p>{state[0].facility3}</p>
          <h4 style={{ color: "red", margin: "0" }}>Read more</h4>
        </div>
      </section>
    </>
  );
}
