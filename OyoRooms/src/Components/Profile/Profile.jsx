import React from "react";
import "./Profile.css";
import History from "./History/History";
import Wallet from "./Wallet/Wallet";
import UserDetails from "./UserDetails/UserDetails";
import { ChakraProvider } from "@chakra-ui/react";

const Profile = () => {
  return (
    <div id="profile_Box">
      <ChakraProvider>
        <Wallet />
        <History />
        <UserDetails />
      </ChakraProvider>
    </div>
  );
};

export default Profile;
