import {
  Button,
  TextField,
  Typography,
  InputAdornment,
  getPaginationUtilityClass,
} from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import IconButton from "@mui/material/IconButton";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { LogInNav } from "../LOGIN_NAVBAR/logInNavbar";
import "./common.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { URL } from "../../URL";
// import GoogleButton from "react-google-button";
// import { LogedIn } from "../Google Login/googleLogin";
// import { gapi } from "gapi-script";
// import { LogedIn } from "../Google Login/googleLogin";

export const SignUp = () => {
  const [userData, setUserData] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [checkValidEmail, setCheckValidEmail] = useState("");
  const [inputFieldData, setInputFieldData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const regrex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  useEffect(() => {
    getUserData();
  }, []);
  // const clientid =
  //   "291586213988-15e4vphul9cg4tep7fbkmchs8ekk74om.apps.googleusercontent.com";
  // useEffect(() => {
  //   function start() {
  //     gapi.client.init({
  //       clientId: clientid,
  //       scope: "",
  //     });
  //   }
  //   gapi.load("client:auth2", start);
  // });
  console.log(userData);
  const getUserData = async () => {
    const result = await axios.get(`${URL.users}`);
    setUserData(result.data);
    console.log(result.data);
  };
  console.log(inputFieldData.name);
  //for showpassord icon

  const handleClickShowPassword = () => setShowPassword(true);
  const handleMouseDownPassword = () => setShowPassword(false);

  const handleChangeInputField = async (e) => {
    setInputFieldData({
      ...inputFieldData,
      [e.target.name]: e.target.value,
    });
    if (regrex.test(inputFieldData.email)) {
      setCheckValidEmail("");
    } else {
      setCheckValidEmail("Please Enter Valid Email");
    }
    console.log(inputFieldData);
  };
  const sendDataToBackend = async (e) => {
    e.preventDefault();
    setInputFieldData({
      email: "",
      name: "",
      password: "",
    });
    if (
      inputFieldData.name === "" ||
      inputFieldData.email === "" ||
      inputFieldData.password === ""
    ) {
      toast.info("Please fill all the field", {
        position: "top-center",
        theme: "dark",
      });
      return;
    }

    // check email unique or not
    for (let i = 0; i < userData.length; i++) {
      if (userData[i].email === inputFieldData.email) {
        toast.info("Email Id Already Exist", {
          position: "top-center",
          theme: "colored",
        });
        return;
      }
    }

    toast.success("Register Sucessfull", {
      position: "top-center",
      theme: "colored",
    });
    console.log(userData);
    // send data to backend for register new user
    const result = await axios.post(`${URL.users}`, inputFieldData);

    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };
  const { name, email, password } = inputFieldData;
  return (
    <div id="wrap-main-div">
      <LogInNav />
      {/* <LogedIn /> */}
      {/* <GoogleButton onClick={LogedIn} /> */}
      <div className="sl-main-div">
        <div className="sl-left-div">
          <h2
            style={{
              fontSize: "45px",
              marginTop: "50px",
              marginBottom: "10px",
            }}
          >
            There’s a smarter way to OYO around
          </h2>
          <span>
            Sign up with your phone number and get exclusive access to discounts
            and savings on OYO stays and with our many travel partners.
          </span>
        </div>
        <div id="sl-right-div">
          <div className="s-red-div">
            <p>Sign up & Get ₹500 OYO Money</p>
          </div>
          <form>
            <div id="sl-form-div">
              <h2 id="LoginSignup">
                Login / Signup
              </h2>
              <TextField
                onChange={(e) => handleChangeInputField(e)}
                size="small"
                margin="normal"
                padding="0"
                label="Name"
                placeholder="Enter Name......"
                name="name"
                value={name}
              />{" "}
              <TextField
                onChange={(e) => handleChangeInputField(e)}
                size="small"
                margin="normal"
                padding="0"
                label="Email"
                placeholder="Enter Email...."
                name="email"
                required
                type="email"
                value={email}
              />{" "}
              {/* <p style={{ color: "red", marginLeft: "5px" }}>
                {checkValidEmail}
              </p> */}
              <TextField
                onChange={(e) => handleChangeInputField(e)}
                size="small"
                margin="normal"
                label="Password"
                placeholder="Enter Password"
                name="password"
                value={password}
                required
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOffIcon />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />{" "}
              <Button
                disabled={password.length < 8 ? true : false}
                onClick={(e) => sendDataToBackend(e)}
                variant="contained"
                // color="warning"
                id="SignupButton"
                margin="normal"
                sx={{
                  backgroundColor: "#1ab64f",
                  width: "200px",
                  m: "auto",
                  p: "10px",
                  mt: "20px",
                  mb: "15px",
                }}
              >
                Register
              </Button>
              {/* <Google /> */}
              <p
                style={{
                  padding: "0px",
                  marginTop: "15px",
                  // border: "2px solid red",
                }}
              >
                Prefer to Sign in with password instead ?{" "}
                <Link
                  to="/login"
                  style={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    color: "red",
                  }}
                >
                  Click here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
