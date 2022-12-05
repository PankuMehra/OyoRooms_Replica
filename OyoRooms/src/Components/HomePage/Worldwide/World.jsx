import React from "react";
import { useState } from "react";
import "./World.css";

export default function World() {
  const [uae, setuae] = useState(false);
  const [nepal, setnepal] = useState(false);
  const [china, setchina] = useState(false);
  const [india, setindia] = useState(false);
  const [malayasia, setmalayasia] = useState(false);
  const [indo, setindo] = useState(false);
  const handleUae = () => {
    setuae(true);
  };
  const handlenepal = () => {
    setnepal(true);
  };
  const handlechina = () => {
    setchina(true);
  };
  const handleindia = () => {
    setindia(true);
  };
  const handlemalayasia = () => {
    setmalayasia(true);
  };
  const handleindo = () => {
    setindo(true);
  };
  return (
    <div>
      <div className="world-wide">
        <div>
          {/* <div> */}
            <img
              src="/Images/map.png"
              alt="landing background map"
            />
            {uae ? <div className="uaeDiv">UAE</div> : null}
            <img
              src="/Images/uae.png"
              alt="uae"
              className="uae"
              onMouseEnter={handleUae}
              onMouseLeave={() => {
                setuae(false);
              }}
            />
            {nepal ? <div className="nepalDiv">Nepal</div> : null}
            <img
              src="/Images/nepal.png"
              alt="nepal"
              className="nepal"
              onMouseEnter={handlenepal}
              onMouseLeave={() => {
                setnepal(false);
              }}
            />
            {china ? <div className="chinaDiv">China</div> : null}
            <img
              src="/Images/china.png"
              alt="china"
              className="china"
              onMouseEnter={handlechina}
              onMouseLeave={() => {
                setchina(false);
              }}
            />
            {india ? <div className="indiaDiv">India</div> : null}
            <img
              src="/Images/india.png"
              alt="india"
              className="india"
              onMouseEnter={handleindia}
              onMouseLeave={() => {
                setindia(false);
              }}
            />
            {malayasia ? <div className="malayasiaDiv">Malayasia</div> : null}
            <img
              src="/Images/malayasia.png"
              alt="malayasia"
              className="malayasia"
              onMouseEnter={handlemalayasia}
              onMouseLeave={() => {
                setmalayasia(false);
              }}
            />
            {indo ? <div className="indoDiv">Indonesia</div> : null}
            <img
              src="/Images/indonesia.png"
              alt="indonesia"
              className="indonesia"
              onMouseEnter={handleindo}
              onMouseLeave={() => {
                setindo(false);
              }}
            />
          {/* </div> */}
        </div>
        <div className="world-wide-right-section">
          {/* <p>World’s leading chain of hotels and homes</p>
          <p>More Destinations. More Ease. More Affordable.</p>
          <div>
            <p>
              <span>35</span>
              <br />
              Countries
            </p>
            <p>
              <span>157000+</span> <br />
              Hotels & Homes
            </p>
          </div>
          <ul>
            <li>India</li>
            <li>Nepal</li>
            <li>China</li>
            <li>Indonesia</li>
             <li>Malaysia</li>
            <li>UAE</li>
          </ul> */}
          <img style={{height: "100%"}} src="/Images/homeWorld.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}
