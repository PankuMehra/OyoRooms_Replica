import { Box, Heading, Text, Card, Button, color } from "@chakra-ui/react";
import React from "react";
import "./PartnerTop.css";
// import bgTop from "../../../../public/Images/partnersTopBackground.jpg";
// import ptLogo from "../../../../public/Images/partnerLogo.png";
import { JoinForm } from '../JoinForm/JoinForm'

const PartnerTop = () => {
  return (
    <div id="partnerTop">
      <Box id="top" zIndex="0" position="absolute" w="100%">
        <img id="partner_Top_image" src="/Images/partnersTopBackground.jpg" alt="Partner Top Image" />
      </Box>
      <Box zIndex="10" position="relative" p="28px 100px">
        <Box>
          <img id="partner_Logo" src="/Images/partnerLogo.png" alt="Logo" />
        </Box>
        <Box color="white" w="380px" mt="150px">
          <Text fontSize="40px" lineHeight="50px">
            Growing your business made easy
          </Text>
          <Heading
            fontSize="50px"
            textTransform="uppercase"
            fontFamily="Roboto"
          >
            Just for you
          </Heading>
          <Box w="87%" h="1px" bgColor="#ff0007" ></Box>
          <Text
            fontSize="30px"
            lineHeight="37px"
            marginTop="15px"
            w="280px"
            letterSpacing="0.6px"
          >
            Become an OYO in just 30 minutes
          </Text>
        </Box>
      </Box>
      <Box
        zIndex="10"
        position="fixed"
        bottom="0px"
        w="100%"
        p="25px 0"
        bgColor="white"
      >
        <JoinForm />
        {/* <PartnerForm /> */}
        {/* <FormDialog /> */}
      </Box>
    </div>
  );
};

export default PartnerTop;
