import { Button, Box, TextField, Typography } from "@mui/material";
import { LogInNav } from "../LOGIN_NAVBAR/logInNavbar";
import "./signUp.css";
export const SignUp = () => {
  return (
    <div id ="main-div">
      <LogInNav />

      <div className="s-main-div">
        <div className="s-left-div">
          <h1 style = {{fontSize:"58px"}} >There’s a smarter way to OYO around</h1>
          <span>
            Sign up with your phone number and get exclusive access to discounts
            and savings on OYO stays and with our many travel partners.
          </span>
        </div>
        <div id="s-signup-div">
          <div
            style={{
              backgroundColor: "#da1b42",
              color: "white",
              padding: "10px 0 10px 20px",
            }}
          >
            <p>Sign up & Get ₹500 OYO Money</p>
          </div>
          <div id="flex">
            <Typography variant="h4" sx={{ mb: "20px", mt: "20px" }}>
              Login / Signup
            </Typography>
            <TextField
              size="small"
              margin="normal"
              padding="0"
              label="Name..........."
              placeholder="Enter name"
              name="name"
            />{" "}
            <TextField
              size="small"
              margin="normal"
              padding="0"
              label="Name..........."
              placeholder="Enter name"
              name="name"
            />{" "}
            <TextField
              size="small"
              margin="normal"
              padding="0"
              label="Name..........."
              placeholder="Enter name"
              name="name"
            />{" "}
            <Button
              // onClick={(e) => handleClick(e)}
              variant="contained"
              color="secondary"
              margin="normal"
              sx={{ mt: "10px", mb: "10px" }}
            >
              Add
            </Button>
            <p>Prefer to Sign in with password instead?Click here</p>
          </div>
        </div>
      </div>
    </div>
  );
};
