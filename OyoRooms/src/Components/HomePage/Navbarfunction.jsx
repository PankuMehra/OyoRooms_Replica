import React from "react";
import { useState } from "react";
import { RxChevronDown } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

export default function Navbarfunction(props) {
  let navigate = useNavigate();
  const [div, setdiv] = useState(false);
  const handleEvent = () => {
    setdiv(true);
  };
  const searchHotels = (name) => {
    localStorage.setItem("currentCity", name)
    navigate("/hotels")
  }
  return (
    <div>
      <div
        className="down"
        onClick={() => searchHotels(props.name)}
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
          id="dropdown"
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
