import {
  Box,
  Button,
  Grid,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import PaymentCard from "./PaymentCard";

const CustomerDetails = ({ data }) => {
  const [conBtn, setConBtn] = React.useState(false);
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phNum, setPhNum] = React.useState("");
  console.log(conBtn);
  console.log(fullName);
  console.log(email);
  console.log(phNum);
  console.log(data);

  return (
    <Box mb="50px" textAlign="left" w="650px">
      <Box
        borderRadius="5px"
        textAlign="center"
        mb="20px"
        color="#d59560"
        bg="#fef6e9"
        p="10px"
        border="1px solid yellow"
      >
        🎉 Yay! you just saved ₹1201 on this booking!
      </Box>

      <Box borderRadius="5px" border="1px solid gray">
        <Box textAlign="left" bg="#f9f9fb" p="20px">
          <Heading as="h2" size="md">
            1. Enter your details
          </Heading>
        </Box>

        <Box p="30px">
          We will use these details to share your booking information
        </Box>

        <Grid p="20px" templateColumns="repeat(2, 1fr)" gap={6}>
          <Box>
            <Text as="b">Full Name</Text>
            <Input
              onChange={(e) => setFullName(e.target.value)}
              mt="8px"
              placeholder="Enter First and Last Name"
            />
          </Box>

          <Box>
            <Text as="b">Email Address</Text>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              mt="8px"
              placeholder="name@abc.com"
            />
          </Box>

          <Box>
            <Text as="b">Mobile Number</Text>
            <InputGroup mt="8px">
              <InputLeftAddon children="+91" />
              <Input
                onChange={(e) => setPhNum(e.target.value)}
                type="tel"
                placeholder="phone number"
              />
            </InputGroup>
          </Box>
        </Grid>

        <Box p="20px">
          <Button
            onClick={() => setConBtn(!conBtn)}
            h="50px"
            w="220px"
            bg="#1ab64f"
            color="white"
            size="md"
          >
            Continue
          </Button>
        </Box>
      </Box>
      {conBtn ? (
        <PaymentCard />
      ) : (
        <Box
          color="gray"
          borderRadius="5px"
          mt="10px"
          textAlign="left"
          p="15px"
          border="1px solid gray"
        >
          2. Complete your booking
        </Box>
      )}
    </Box>
  );
};

export default CustomerDetails;
