import React from "react";
import "./UserDetails.css";
import {
  Box,
  Button,
  Heading,
  Input,
  InputGroup,
  InputRightAddon,
  InputRightElement,
} from "@chakra-ui/react";

const UserDetails = () => {
  const [userDetails, setUserDetails] = React.useState(false);
  const [password, setPassword] = React.useState(false);
  const [show, setShow] = React.useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  const changeUserDetails = () => {
    setUserDetails(!userDetails);
  };
  const changeUserPass = () => {
    setPassword(!password);
  };
  return (
    <div id="UserDetails">
      <Box
        bg="white"
        w="49%"
        color="#333333"
        p="50px 80px"
        borderRadius="2px"
        boxShadow="2px 4px 8px 0 rgb(0 0 0 / 10%)"
        border="solid 1px #d6d6d6"
        height="350px"
      >
        <Heading fontSize="26px" marginBottom="30px" color="#222222">
          Edit profile{" "}
          <button onClick={changeUserDetails}>
            <i className="fa-regular fa-pen-to-square"></i>
          </button>
        </Heading>
        <p>
          <strong>
            <span className="profile_Money_Details">Name: &nbsp;</span>
          </strong>
          {userDetails ? <Input htmlSize={7} width="auto" placeholder="Enter Name" /> : "Panku"}
        </p>
        <p>
          <strong>
            <span className="profile_Money_Details">Phone Number: &nbsp;</span>
          </strong>
          9991235652
        </p>
        <p>
          <strong>
            <span className="profile_Money_Details">Email Address: &nbsp;</span>
          </strong>
          {userDetails ? (
            <InputGroup size="sm">
              <Input placeholder="Enter Email" />
              <InputRightAddon children="@gmail.com" />
            </InputGroup>
          ) : (
            "pankajmehra9991833@gmail.com"
          )}
        </p>
        {userDetails ? (
          <Button bg="#1ab64f" color="white" float="right" marginTop="30px">
            Update
          </Button>
        ) : (
          ""
        )}
      </Box>
      <Box
        bg="white"
        w="49%"
        color="#333333"
        p="50px 80px"
        borderRadius="2px"
        boxShadow="2px 4px 8px 0 rgb(0 0 0 / 10%)"
        border="solid 1px #d6d6d6"
      >
        <Heading fontSize="26px" marginBottom="30px" color="#222222">
          Change Password{" "}
          <button onClick={changeUserPass}>
            <i className="fa-regular fa-pen-to-square"></i>
          </button>
        </Heading>
        <p>
          <strong>
            <span className="profile_Money_Details">Current Password: &nbsp;</span>
          </strong>
          {password ? (
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          ) : (
            "************"
          )}
        </p>
        {password ? (
          <Button bg="#1ab64f" color="white" float="right" marginTop="30px">
            Update
          </Button>
        ) : (
          ""
        )}
      </Box>
    </div>
  );
};

export default UserDetails;
