import React from "react";
// import { Link } from "react-router-dom";
import "./HomePage.css";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { URL } from "../../URL";
import { LoggedInAction } from "../../Action/LoggedInAction";
import { useState } from "react";

export default function Navbar1() {
  const [dropdown, setDropdown] = useState(false);
  let dispatch = useDispatch();
  let loggedInUser = useSelector((store) => {
    return store.UserReducer.LoggedIn;
  });
  console.log(loggedInUser);
  let currentUser = JSON.parse(localStorage.getItem("currentUser"));
  let isAuth = JSON.parse(localStorage.getItem("isAuth"));

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let res = await fetch(`${URL.users}/${currentUser}`);
    let data = await res.json();
    LoggedInAction(data, dispatch);
  };

  const changeAuth = () => {
    localStorage.removeItem("isAuth");
    localStorage.removeItem("currentUser");
    setDropdown(false);
  };

  return (
    <div style={{position: "sticky", top: "0px", zIndex: "100000", backgroundColor: "white"}}>
      <div className="mainNav">
        <Link to="/" className="abk-leftnav">
          <img src="/Images/oyologo.png" alt="oyored" />
        </Link>

        <div className="abk-rightnav">
          <div>
            <Link>
              <img src="/Images/becomeMember.png" alt="becomeamember" />
            </Link>
          </div>
          <div>
            <Link to="/partner">
              <img src="/Images/listProperty.png" alt="listproperty" />
            </Link>
          </div>
          <div>
            <Link>
              <img src="/Images/language.png" alt="language" />
            </Link>
          </div>

          <div
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
            style={{ position: "relative" }}
          >
            {isAuth ? (
              <Link to="/profile" className="login-signup" id="loginBox">
                <img src="/Images/profile.png" alt="profile" />
                <p>Welcome, {loggedInUser.name}</p>
              </Link>
            ) : (
              <Link to="/login" className="login-signup" id="loginBox">
                <img src="/Images/profile.png" alt="profile" />
                <p>Login / Signup</p>
              </Link>
            )}
            {dropdown && isAuth ? (
              <div onMouseEnter={() => setDropdown(true)} id="profileDropdown">
                <Link to="/profile">Profile</Link>
                <Link to="/profile">Wallet</Link>
                <Link to="/profile">Booking History</Link>
                <Link onClick={changeAuth}>Logout</Link>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
