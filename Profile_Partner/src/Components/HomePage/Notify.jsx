import React from "react";
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const Notify = ()=>{
    const [mail, setMail] = React.useState("e.g. abc@gmail.com");
    const handleMailChange = (event) => {
        setMail(event.target.value);
      };
    return (
        <>
       
        <div
            style={{
              border: "1px solid rgb(224,224,224)",
              borderRadius: "10px",
              padding: "50px",
              marginTop: "20px",
              marginBottom: "20px",
              marginLeft:"40px",
              marginRight:"40px"
            
            }}
          >
            <div style={{ display: "flex", alignItem: "center",justifyContent:"space-around" }}>
                <div  style={{ display: "flex"}}>
              <div>
                <img src="./images/fireLogo.png" alt="img" height="60px" />
              </div>
              <div>
                <div>
                  <span style={{ fontSize: "20px", fontWeight: "700" }}>
                    Get access to exclusive deals
                  </span>
                </div>
                <div>
                  <span style={{ color: "rgb(127,127,127)" }}>
                    Only the best deals reach your inbox
                  </span>
                </div>
              </div>
            </div>
        <div  style={{ display: "flex" }}>
              <div>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "50ch" }
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    label="Your email"
                    value={mail}
                    onChange={handleMailChange}
                  />
                </Box>
              </div>
              <div style={{ padding: "10px" }}>
                <Button
                  variant="outlined"
                  style={{
                    background: "red",
                    color: "white",
                    border: "1px solid red",
                    padding: "13px",
                    width: "150px"
                  }}
                >
                  Notify me
                </Button>
              </div>
            </div>
            </div>
          </div>
        
        </>

    );
}
export {Notify}