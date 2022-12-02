import React from "react";
import "./History.css";
import { Box, Center, Heading } from "@chakra-ui/react";

const History = () => {
  return (
    <div id="profile_History">
      <Box
        w="100%"
        p="30px 60px"
        border-radius="2px"
        boxShadow="2px 4px 8px 0 rgb(0 0 0 / 10%)"
        border="solid 1px #d6d6d6"
        bgColor="white"
        marginTop="40px"
      >
        <Heading fontSize="28px" color="#222222">
          Booking History
        </Heading>
        <div style={{textAlign: "center", padding: "50px 0"}}>
          <p style={{ fontSize: "20px", color: "#ee2e24", fontWeight: "600" }}>
            You have no Booking History to Show.
          </p>
        </div>
      </Box>
    </div>
  );
};

export default History;
