import { Button, Box, TextField, Typography } from "@mui/material";
import "./logIn.css";

export const LogIn = () => {
  return (
    <div id="l-main-div">
      <div className="l-left-div"></div>
      <div className="l-right-div">
        <form>
          <Box
            display="flex"
            flexDirection={"column"}
            maxWidth={500}
            margin="auto"
            marginTop={5}
            boxShadow="0 0 10px black"
            // padding={3}
          >
            <Box backgroundColor="red" padding={2} >Sign up & Get ₹500 OYO Money</Box>
            <Typography
              variant="h3"
              align="center"
              backgroundColor="purple"
              gutterBottom
              color="white"
              padding={2}
            >
              ADD USER
            </Typography>
            <TextField
              size="small"
              className="text-filed"
              // sx={{ width : "80px" , height:"20" }}
              // onChange={(e) => onTextChange(e)}
              margin="normal"
              padding="0"
              label="Name..........."
              placeholder="Enter name"
              name="name"
            />
            <TextField
              size="small"
              margin="normal"
              label="Email........."
              placeholder="Enter email"
              name="email"
              sx={{ mb: "20px" }}
            />
            <Button
              // onClick={(e) => handleClick(e)}
              variant="contained"
              color="secondary"
              margin="normal"
            >
              Add
            </Button>
          </Box>
        </form>
      </div>
    </div>
  );
};
