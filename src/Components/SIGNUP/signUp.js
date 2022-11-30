import { Button, TextField, Typography, InputAdornment } from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import IconButton from "@mui/material/IconButton";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { LogInNav } from "../LOGIN_NAVBAR/logInNavbar";
import "./common.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
  });
  console.log(register.name);
  const navigate = useNavigate();
  //for showpassord icon

  const handleClickShowPassword = () => setShowPassword(true);
  const handleMouseDownPassword = () => setShowPassword(false);

  const sendRegisterData = async (e) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
    console.log(register);
  };
  const sendDataToBackend = async (e) => {
    e.preventDefault();
    if (
      register.name === "" ||
      register.email === "" ||
      register.password === ""
    ) {
      toast.error("some thing error", {
        position: "top-center",
      });
      return;
    }
    toast.success("Register Sucessfull", {
      position: "top-center",
      theme: "colored",
    });
    const result = await axios.post(
      "https://oyo-data.onrender.com/users",
      register
    );

    setTimeout(() => {
      navigate("/login");
    }, 3000);
  };
  const { email } = register;
  return (
    <div id="wrap-main-div">
      <LogInNav />

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
              <Typography variant="h3" sx={{ mb: "20px", mt: "20px" }}>
                Login / Signup
              </Typography>
              <TextField
                onChange={(e) => sendRegisterData(e)}
                size="small"
                margin="normal"
                padding="0"
                label="Name"
                placeholder="Enter Name......"
                name="name"
              />{" "}
              <TextField
                onChange={(e) => sendRegisterData(e)}
                size="small"
                margin="normal"
                padding="0"
                label="Email"
                placeholder="Enter Email...."
                name="email"
                required
                value={email}
              />{" "}
              <TextField
                onChange={(e) => sendRegisterData(e)}
                size="small"
                margin="normal"
                label="Password"
                placeholder="Enter Password"
                name="password"
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
                disabled={email === "" ? true : false}
                onClick={(e) => sendDataToBackend(e)}
                variant="contained"
                color="secondary"
                margin="normal"
                sx={{
                  mt: "10px",
                  mb: "10px",
                  width: "200px",
                  m: "auto",
                  p: "10px",
                }}
              >
                Register
              </Button>
              <p>
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
