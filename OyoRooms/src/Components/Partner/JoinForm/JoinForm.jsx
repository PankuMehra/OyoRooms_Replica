import React from "react";
import "./JoinForm.css";
import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  Box,
  Image,
} from "@chakra-ui/react";

const initData = {};

export function JoinForm() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [extraDetails, setExtraDetails] = React.useState(false);

  const initialRef = React.useRef(null);

  const fileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    console.log(file);
    reader.addEventListener("load", () => {
      // console.log(reader.result);
    });

    reader.readAsDataURL(file);
  };
  const [facility, setFacility] = React.useState({
    f1: false,
    f2: false,
    f3: false,
    f4: false,
    f5: false,
    f6: false,
    f7: false,
    f8: false,
    f9: false,
    f10: false,
    f11: false,
    f12: false,
    f13: false,
    f14: false,
    f15: false,
  });
  const selectBox1 = (event) => {
    setFacility((facility.f1 = !facility.f1));
  };
  const selectBox2 = (event) => {
    setFacility((facility.f2 = !facility.f2));
  };
  const selectBox3 = (event) => {
    setFacility((facility.f3 = !facility.f3));
  };
  const selectBox4 = (event) => {
    setFacility((facility.f4 = !facility.f4));
  };
  const selectBox5 = (event) => {
    setFacility((facility.f5 = !facility.f5));
  };
  const selectBox6 = (event) => {
    setFacility((facility.f6 = !facility.f6));
  };
  const selectBox7 = (event) => {
    setFacility((facility.f7 = !facility.f7));
  };
  const selectBox8 = (event) => {
    setFacility((facility.f8 = !facility.f8));
  };
  const selectBox9 = (event) => {
    setFacility((facility.f9 = !facility.f9));
  };
  const selectBox10 = (event) => {
    setFacility((facility.f10 = !facility.f10));
  };
  const selectBox11 = (event) => {
    setFacility((facility.f11 = !facility.f11));
  };
  const selectBox12 = (event) => {
    setFacility((facility.f12 = !facility.f12));
  };
  const selectBox13 = (event) => {
    setFacility((facility.f13 = !facility.f13));
  };
  const selectBox14 = (event) => {
    setFacility((facility.f14 = !facility.f14));
  };
  const selectBox15 = (event) => {
    setFacility((facility.f15 = !facility.f15));
  };

  return (
    <>
      {/* <Button>Open Modal</Button> */}
      <Button
        color="white"
        backgroundColor="#ff0007"
        w="700px"
        h="45px"
        m="auto"
        borderRadius="20px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        fontSize="22px"
        fontWeight="600"
        onClick={onOpen}
      >
        Join OYO
      </Button>
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          maxW="900px"
          // maxH="350px"
          id="partnerModal"
          overflow="hidden"
          p="20px 60px"
        >
          <Image
            bgColor="black"
            color="white"
            w="100%"
            // h="100%"
            position="absolute"
            top="0px"
            left="0px"
            filter="opacity(25%)"
            src="https://v.fastcdn.co/u/b33fcfa6/59014657-0-how-to-begin1-man.png"
          />
          <ModalHeader
            m="auto"
            zIndex="100"
            fontSize="35px"
            color="black"
            fontWeight="800"
            letterSpacing="1px"
          >
            Get Associated with OYO
          </ModalHeader>
          <Box
            h="1px"
            bgColor="#ff0007"
            w="25%"
            m="auto"
            zIndex="100"
            marginTop="-10px"
            mb="10px"
          ></Box>
          <ModalCloseButton />
          {extraDetails ? (
            <ModalBody pb={6}>
              <Box
                display="grid"
                gridTemplateColumns="repeat(4, 1fr)"
                gridGap="20px"
                mt="20px"
              >
                <Button
                  p="8px 15px"
                  bgColor={facility.f1 ? "green" : "#dfdfdf"}
                  color={facility.f1 ? "white" : "black"}
                  fontWeight="600"
                  letterSpacing="1px"
                  onClick={selectBox1}
                >
                  Elevator
                </Button>
                <Button
                  p="8px 15px"
                  bgColor={facility.f2 ? "green" : "#dfdfdf"}
                  color={facility.f2 ? "white" : "black"}
                  fontWeight="600"
                  letterSpacing="1px"
                  onClick={selectBox2}
                >
                  TV
                </Button>
                <Button
                  p="8px 15px"
                  bgColor={facility.f3 ? "green" : "#dfdfdf"}
                  color={facility.f3 ? "white" : "black"}
                  fontWeight="600"
                  letterSpacing="1px"
                  onClick={selectBox3}
                >
                  Wifi
                </Button>
                <Button
                  p="8px 15px"
                  bgColor={facility.f4 ? "green" : "#dfdfdf"}
                  color={facility.f4 ? "white" : "black"}
                  fontWeight="600"
                  letterSpacing="1px"
                  onClick={selectBox4}
                >
                  Iron
                </Button>
                <Button
                  p="8px 15px"
                  bgColor={facility.f5 ? "green" : "#dfdfdf"}
                  color={facility.f5 ? "white" : "black"}
                  fontWeight="600"
                  letterSpacing="1px"
                  onClick={selectBox5}
                >
                  Power backup
                </Button>
                <Button
                  p="8px 15px"
                  bgColor={facility.f6 ? "green" : "#dfdfdf"}
                  color={facility.f6 ? "white" : "black"}
                  fontWeight="600"
                  letterSpacing="1px"
                  onClick={selectBox6}
                >
                  Wardrobe
                </Button>
                <Button
                  p="8px 15px"
                  bgColor={facility.f7 ? "green" : "#dfdfdf"}
                  color={facility.f7 ? "white" : "black"}
                  fontWeight="600"
                  letterSpacing="1px"
                  onClick={selectBox7}
                >
                  CCTV
                </Button>
                <Button
                  p="8px 15px"
                  bgColor={facility.f8 ? "green" : "#dfdfdf"}
                  color={facility.f8 ? "white" : "black"}
                  fontWeight="600"
                  letterSpacing="1px"
                  onClick={selectBox8}
                >
                  Reception
                </Button>
                <Button
                  p="8px 15px"
                  bgColor={facility.f9 ? "green" : "#dfdfdf"}
                  color={facility.f9 ? "white" : "black"}
                  fontWeight="600"
                  letterSpacing="1px"
                  onClick={selectBox9}
                >
                  Caretaker
                </Button>
                <Button
                  p="8px 15px"
                  bgColor={facility.f10 ? "green" : "#dfdfdf"}
                  color={facility.f10 ? "white" : "black"}
                  fontWeight="600"
                  letterSpacing="1px"
                  onClick={selectBox10}
                >
                  Parking Area
                </Button>
                <Button
                  p="8px 15px"
                  bgColor={facility.f11 ? "green" : "#dfdfdf"}
                  color={facility.f11 ? "white" : "black"}
                  fontWeight="600"
                  letterSpacing="1px"
                  onClick={selectBox11}
                >
                  Fire Extinguisher
                </Button>
                <Button
                  p="8px 15px"
                  bgColor={facility.f12 ? "green" : "#dfdfdf"}
                  color={facility.f12 ? "white" : "black"}
                  fontWeight="600"
                  letterSpacing="1px"
                  onClick={selectBox12}
                >
                  Kitchen
                </Button>
                <Button
                  p="8px 15px"
                  bgColor={facility.f13 ? "green" : "#dfdfdf"}
                  color={facility.f13 ? "white" : "black"}
                  fontWeight="600"
                  letterSpacing="1px"
                  onClick={selectBox13}
                >
                  First-aid kit
                </Button>
                <Button
                  p="8px 15px"
                  bgColor={facility.f14 ? "green" : "#dfdfdf"}
                  color={facility.f14 ? "white" : "black"}
                  fontWeight="600"
                  letterSpacing="1px"
                  onClick={selectBox14}
                >
                  Electric Kettle
                </Button>
                <Button
                  p="8px 15px"
                  bgColor={facility.f15 ? "green" : "#dfdfdf"}
                  color={facility.f15 ? "white" : "black"}
                  fontWeight="600"
                  letterSpacing="1px"
                  onClick={selectBox15}
                >
                  Doctor On Call
                </Button>
              </Box>
              <Box display="flex" mt="20px">
                <Input
                  type="button"
                  bgColor="#ff0007"
                  className="saveCancel"
                  color="white"
                  fontWeight="600"
                  fontSize="17px"
                  letterSpacing="0.8px"
                  mr={3}
                  // onClick={onClose}
                  onClick={() => setExtraDetails(false)}
                  value="Back"
                />
                <Input
                  type="submit"
                  bgColor="#ff0007"
                  className="saveCancel"
                  color="white"
                  fontWeight="600"
                  fontSize="17px"
                  letterSpacing="0.8px"
                  mr={3}
                  value="Save Details"
                  // w="10%"
                />
                {/* Save
              </Button> */}

                {/* Cancel
                </Button> */}
              </Box>
            </ModalBody>
          ) : (
            <ModalBody pb={6}>
              <form>
                <FormLabel
                  className="partnerInputs"
                  fontWeight="600"
                  mt="14px"
                  mb="2px"
                >
                  Hotel Name*
                </FormLabel>
                <Input
                  ref={initialRef}
                  placeholder="Enter Hote Name"
                  bgColor="white"
                  borderColor="gray"
                  required
                />
                {/* </FormControl> */}

                {/* <FormControl mt={4}> */}
                <FormLabel
                  className="partnerInputs"
                  fontWeight="600"
                  mt="14px"
                  mb="2px"
                >
                  City*
                </FormLabel>
                <Input
                  placeholder="Enter City Name"
                  bgColor="white"
                  borderColor="gray"
                  required
                />
                {/* </FormControl> */}
                {/* <FormControl mt={4}> */}
                <FormLabel
                  className="partnerInputs"
                  fontWeight="600"
                  mt="14px"
                  mb="2px"
                >
                  Full Address*
                </FormLabel>
                <Input
                  placeholder="Enter Hotel Address"
                  bgColor="white"
                  borderColor="gray"
                  required
                />
                {/* </FormControl> */}
                {/* <FormControl mt={4}> */}
                <FormLabel
                  className="partnerInputs"
                  fontWeight="600"
                  mt="14px"
                  mb="2px"
                >
                  Add Hotel Images
                </FormLabel>
                <Box id="ImageChooseBox" display="flex">
                  <Input
                    type="file"
                    bgColor="white"
                    borderColor="gray"
                    p="4px"
                    onChange={fileUpload}
                  />

                  {/* <Button bgColor="gray" color="white" onClick={addImageFn}>
                Add Image
              </Button> */}
                  <Input
                    type="file"
                    bgColor="white"
                    borderColor="gray"
                    p="4px"
                    // ref={this.myFiles}
                    onChange={fileUpload}
                  />
                  <Input
                    type="file"
                    bgColor="white"
                    borderColor="gray"
                    p="4px"
                    // ref={this.myFiles}
                    onChange={fileUpload}
                  />
                </Box>
                <br />
                <Box display="flex">
                  <Input
                    type="file"
                    bgColor="white"
                    borderColor="gray"
                    p="4px"
                    // ref={this.myFiles}
                    onChange={fileUpload}
                  />
                  <Input
                    type="file"
                    bgColor="white"
                    borderColor="gray"
                    p="4px"
                    // ref={this.myFiles}
                    onChange={fileUpload}
                  />
                  <Input
                    type="file"
                    bgColor="white"
                    borderColor="gray"
                    p="4px"
                    // ref={this.myFiles}
                    onChange={fileUpload}
                  />
                </Box>

                <Box display="flex" mt="20px">
                  <Input
                    type="submit"
                    bgColor="#ff0007"
                    className="saveCancel"
                    color="white"
                    fontWeight="600"
                    fontSize="17px"
                    letterSpacing="0.8px"
                    mr={3}
                    value="Add more Details"
                    // w="10%"
                    onClick={() => setExtraDetails(true)}
                  />
                  {/* Save
              </Button> */}
                  <Input
                    type="button"
                    bgColor="#ff0007"
                    className="saveCancel"
                    color="white"
                    fontWeight="600"
                    fontSize="17px"
                    letterSpacing="0.8px"
                    mr={3}
                    onClick={onClose}
                    value="Cancel"
                  />
                  {/* Cancel
                </Button> */}
                </Box>
              </form>
            </ModalBody>
          )}
          {/* <ModalFooter>
            <Button
              bgColor="#ff0007"
              className="saveCancel"
              color="white"
              fontWeight="600"
              fontSize="17px"
              letterSpacing="0.8px"
              mr={3}
            >
              Save
            </Button>
            <Button
              bgColor="#ff0007"
              className="saveCancel"
              color="white"
              fontWeight="600"
              fontSize="17px"
              letterSpacing="0.8px"
              mr={3}
              onClick={onClose}
            >
              Cancel
            </Button>
          </ModalFooter> */}
          {/* </Box> */}
        </ModalContent>
      </Modal>
    </>
  );
}
