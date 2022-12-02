import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

export default function Navbar1() {
  return (
    <div>
      <div className="mainNav">
        <div className="abk-leftnav">
          <img src="/Images/oyologo.png" alt="oyored" />
        </div>

        <div className="abk-rightnav">
          <div>
            <img src="/Images/becomeMember.png" alt="becomeamember" />
          </div>
          <div>
            <Link to="/partner">
              <img src="/Images/listProperty.png" alt="listproperty" />
            </Link>
          </div>
          <div>
            <img src="/Images/language.png" alt="language" />
          </div>

          <div>
            {/* <Link to="" className="login-signup">  */}
            <Link to="/profile" className="login-signup">
              <img src="/Images/profile.png" alt="profile" />
              <p>Login / Signup</p>
            </Link>
            {/* <img src="/Images/profile.png" alt="profile" />
                <p>Login / Signup</p> */}
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}
