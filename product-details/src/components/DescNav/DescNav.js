import React from "react";
import "./DescNav.css";
// About this OYO
// Amenities
// Choose your room
// Ratings and Reviews
// Hotel Rules
// What's nearby

export default function DescNav() {
  return (
    <>
      <div className="collapse">
        <button>=</button>
        <p>Share</p>
      </div>
      <div className="kk_nav">
        <div>
          <p>
            <a href="#section0">About this OYO</a>
          </p>
          <p>
            <a href="#section1">Amenities</a>
          </p>
          <p>
            <a href="#section1">Choose your room</a>
          </p>
          <p>
            <a href="#section1">Ratings and Reviews</a>
          </p>
          <p>
            <a href="#section1">Hotel Rules</a>
          </p>
          <p>
            <a href="#section1">What's nearby</a>
          </p>
        </div>
        <div>
          <p>Share</p>
        </div>
      </div>
    </>
  );
}
