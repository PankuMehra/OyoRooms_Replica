import React from "react";
import { useState } from "react";
import { RxChevronDown } from "react-icons/rx";

export default function Navbarfunction(props) {
  const [div, setdiv] = useState(false);
  const handleEvent = () => {
    setdiv(true);
  };
  return (
    <div>
      <div
        className="down"
        onMouseEnter={handleEvent}
        onMouseLeave={() => {
          setdiv(false);
        }}
      >
        <p>{props.name}</p>
        <div>
          <RxChevronDown />
        </div>
        {/* <img src="/Images/down.png" alt="down" /> */}
      </div>

      {div ? (
        <div
          className="dropdown"
          onMouseEnter={handleEvent}
          onMouseLeave={() => {
            setdiv(false);
          }}
        >
          {props.more.map((e, index) => (
            <p key={index}>{e}</p>
          ))}
        </div>
      ) : null}
    </div>
  );
}
