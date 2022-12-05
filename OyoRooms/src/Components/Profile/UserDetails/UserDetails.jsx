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
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { UserAction } from "../../../Action/UserAction";
import { URL } from "../../../URL";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { useState } from "react";

const UserDetails = () => {
  const [userShow, setUserShow] = React.useState(false);
  const [password, setPassword] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const [myPass, setMyPass] = useState({
    newPass: null,
    newPass2: "",
  });
  const userData =
    useSelector((storeData) => {
      return storeData.UserReducer.userData;
    }) || [];
  const userDispatch = useDispatch();

  const handleClick = () => {
    setShow(!show);
  };

  const changeUserDetails = () => {
    setUserShow(!userShow);
  };
  const changeUserPass = () => {
    setPassword(!password);
  };

  React.useEffect(() => {
    {
      userData ? getUserDetails() : "";
    }
  }, []);
  const getUserDetails = async () => {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    let res = await fetch(`${URL.users}/${currentUser}`);

    let data = await res.json();
    UserAction(data, userDispatch);
  };

  let nameRef = React.useRef(null);
  let emailRef = React.useRef(null);
  const updateUserDetails = async () => {
    let updatedUser = {
      name: nameRef.current.value,
      email: emailRef.current.value + "@gmail.com",
    };
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    let res = await fetch(`${URL.users}/${currentUser}`, {
      method: "PATCH",
      body: JSON.stringify(updatedUser),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await res.json();
    UserAction(data, userDispatch);
    setUserShow(!userShow);
  };

  let passRef = React.useRef(null);
  const updatePass = async () => {
    let updatedUser = {
      password: myPass.newPass2,
    };
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    let oldRes = await fetch(`${URL.users}/${currentUser}`);
    let oldData = await oldRes.json();
    if (oldData.password == passRef.current.value) {
      let res = await fetch(`${URL.users}/${currentUser}`, {
        method: "PATCH",
        body: JSON.stringify(updatedUser),
        headers: {
          "Content-Type": "application/json",
        },
      });
      let data = await res.json();
      // console.log('data:', data)
      UserAction(data, userDispatch);
      setPassword(!password);
      toast.success("Password Sucessfully updated", {
        position: "top-center",
        theme: "colored",
      });
    } else {
      toast.info("Old Password is Wrong", {
        position: "top-center",
        theme: "dark",
      });
    }
    // }
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setMyPass({ ...myPass, [name]: value });
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
        className="userDetailBox"
        // height="350px"
      >
        <Heading fontSize="26px" marginBottom="30px" color="#222222">
          Edit profile{" "}
          <button onClick={changeUserDetails}>
            <HiOutlinePencilAlt />
          </button>
        </Heading>
        <Box>
          <strong>
            <span className="profile_Money_Details">Name: &nbsp;</span>
          </strong>
          {userShow ? (
            <Input
              htmlSize={8}
              width="auto"
              placeholder="Enter Name"
              ref={nameRef}
            />
          ) : userData.name != null ? (
            userData.name
          ) : (
            ""
          )}
        </Box>
        <Box>
          <strong>
            <span className="profile_Money_Details">Phone Number: &nbsp;</span>
          </strong>
          {userData.number != null ? userData.number : ""}
        </Box>
        <Box>
          <strong>
            <span className="profile_Money_Details">Email Address: &nbsp;</span>
          </strong>
          {userShow ? (
            <InputGroup size="sm">
              <Input placeholder="Enter Email" ref={emailRef} />
              <InputRightAddon children="@gmail.com" />
            </InputGroup>
          ) : userData.email != null ? (
            userData.email
          ) : (
            ""
          )}
        </Box>
        {userShow ? (
          <Button
            bg="#1ab64f"
            color="white"
            // float="right"
            marginTop="30px"
            onClick={updateUserDetails}
          >
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
        className="userDetailBox"
      >
        <Heading fontSize="26px" marginBottom="30px" color="#222222">
          Change Password{" "}
          <button onClick={changeUserPass}>
            <HiOutlinePencilAlt />
          </button>
        </Heading>
        <Box>
          <strong>
            {password ? (
              <span className="profile_Money_Details">
                Set New Password: &nbsp;
              </span>
            ) : (
              <span className="profile_Money_Details">
                Current Password: &nbsp;
              </span>
            )}
          </strong>

          {password ? (
            <Box>
              <InputGroup size="md" marginBottom="15px">
                <Input
                  pr="4.5rem"
                  type="text"
                  placeholder="Enter Current Password"
                  ref={passRef}
                />
              </InputGroup>
              <InputGroup size="md" marginBottom="15px">
                <Input
                  pr="4.5rem"
                  type="text"
                  placeholder="Enter New Password"
                  // ref={newPassRef}
                  name="newPass"
                  onChange={handleChange}
                />
              </InputGroup>
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Confirm New Password"
                  // ref={newPassRef2}
                  name="newPass2"
                  onChange={handleChange}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Box>
          ) : (
            "*********"
          )}
        </Box>
        {password ? (
          <Button
            bg="#1ab64f"
            color="white"
            // float="right"
            marginTop="30px"
            onClick={updatePass}
            disabled={myPass.newPass === myPass.newPass2 ? false : true}
          >
            Update
          </Button>
        ) : (
          ""
        )}
      </Box>
      <ToastContainer />
    </div>
  );
};

export default UserDetails;
