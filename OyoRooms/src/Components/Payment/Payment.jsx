import {
  Box,
  Heading,
  Text,
  Image,
  Button,
  Skeleton,
  Stack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
// import breakfast from "../Images/breakfastcards.png";
import { URL } from "../../URL";

const Payment = () => {
  const [data, setData] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  const {id} = useParams();
  useEffect(() => {
    setLoading(true);
    fetch(`${URL.hotel}/${id}`)
      .then((res) => res.json())
      .then((res2) => setData(res2))
      .catch((error) => setError(true))
      .finally(() => setLoading(false));
  }, []);
  console.log(data);

  if (loading) {
    return (
      <Stack>
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
      </Stack>
    );
  }

  if (error) {
    <Box mt="50px">
      <Heading color={"red"}>Something went wrong please refresh</Heading>
    </Box>;
  }

  return (
    <Box>
      <Box p={"14px"} boxShadow="base">
        <Image
          w="95px"
          ml="12px"
          src=""
        />
      </Box>

      <Box textAlign={"left"} w="76%" m="auto">
        <Box m="10px" mt="30px">
          <Heading color="green">Great! Your stay is confirmed.</Heading>
          <Text as="b">
            You will soon recieve an email confirmation debuvats@gmail.com
          </Text>{" "}
          <br />
          <Button
            mt="30px"
            mb="30px"
            w="180px"
            h="40px"
            border="2px solid black"
            bg="white"
            color="black"
          >
            Print
          </Button>
        </Box>

        <Box p="20px" boxShadow="lg">
          <Heading fontSize="25px"> Booking ID</Heading>
          <Text mt="5px" as="p" fontSize="20px">
            abcd1234
          </Text>

          <hr
            style={{
              backgroundColor: "gray",
              height: "2px",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          />

          <Box display="flex">
            <Box w="1000px">
              <Heading fontSize="lg">Hotel Grand Shiva</Heading>
              <Text>Gurugram</Text>

              <Heading mt="10px" fontSize="md">{`Hotel Direction`}</Heading>
              <Text>Huda city center</Text>

              <Heading mt="10px" fontSize="md">{`Primery Guest`}</Heading>
              <Text>{`1`}</Text>

              <Heading mt="5px" fontSize="md">{`Email address`}</Heading>
              <Text>{`debuvats@gmail.com`}</Text>

              <Heading mt="5px" fontSize="md">{`Phone Number`}</Heading>
              <Text>{`8979562342`}</Text>
            </Box>

            <Box>
              <Image
                w="300px"
                h="180px"
                src={data.Image}
              />
            </Box>
          </Box>

          <hr
            style={{
              backgroundColor: "gray",
              height: "2px",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          />

          <box>
            <Image src="./Images/breakfastcards.png" />
          </box>

          <hr
            style={{
              backgroundColor: "gray",
              height: "2px",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Payment;
