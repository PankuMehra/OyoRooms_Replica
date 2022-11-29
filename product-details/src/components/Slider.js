import React from "react";
import { useEffect, useState } from "react";
import "./Slider.css";

export default function Slider(props) {
  const { state } = props;

  return (
    <div>
      {state.length > 0 ? (
        <div className="kk_slider">
          <img src={state[0].mainImage} alt={state[0].mainImage}></img>
          <img src={state[0].image1} alt={state[0].mainImage}></img>
          <img src={state[0].image2} alt={state[0].mainImage}></img>
          <img src={state[0].image3} alt={state[0].mainImage}></img>
          <img src={state[0].image4} alt={state[0].mainImage}></img>
          <img src={state[0].image5} alt={state[0].mainImage}></img>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
