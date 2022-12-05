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
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { HotelAction } from "../../../Action/HotelAction";
import {useNavigate} from 'react-router-dom'
import {URL} from "../../../URL"

const initData = {
  hotelName: "",
  city: "",
  address: "",
  mainImage: "",
  image1: "",
  image2: "",
  image3: "",
  image4: "",
  image5: "",
  facility1: "",
  facility2: "",
  facility3: "",
  facilityX: "",
};

export function JoinForm() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [extraDetails, setExtraDetails] = React.useState(false);
  const [f1, setF1] = React.useState(false);
  const [f2, setF2] = React.useState(false);
  const [f3, setF3] = React.useState(false);
  const [f4, setF4] = React.useState(false);
  const [f5, setF5] = React.useState(false);
  const [f6, setF6] = React.useState(false);
  const [f7, setF7] = React.useState(false);
  const [f8, setF8] = React.useState(false);
  const [f9, setF9] = React.useState(false);
  const [f10, setF10] = React.useState(false);
  const [f11, setF11] = React.useState(false);
  const [f12, setF12] = React.useState(false);
  const [f13, setF13] = React.useState(false);
  const [f14, setF14] = React.useState(false);
  const [f15, setF15] = React.useState(false);

  let navigate = useNavigate();
  const [data, setData] = React.useState(initData);

  const initialRef = React.useRef(null);

  const fileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    console.log(file);
    reader.addEventListener("load", () => {
      let { name } = event.target;
      setData({ ...data, [name]: reader.result });
      // console.log(reader.result);
    });

    reader.readAsDataURL(file);
  };
  // const handleChange = (e) => {
  //   let { name, value, type, checked } = e.target;
  //   value = type == "checkbox" ? checked : value;
  //   setData({ ...data, [name]: value });
  // };
  const addDetails = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  let fCount = React.useRef(null);
  const handleSelectButton = (ft, name, value) => {
    if (!ft) {
      fCount.current++;
      if (fCount.current < 4) {
        setData({ ...data, [name + fCount.current]: value });
      } else {
        setData({ ...data, ["facilityX"]: `+  ${fCount.current - 3} more` });
      }
    }
  };
  const clearFacility = () => {
    setData({
      ...data,
      facility1: "",
      facility2: "",
      facility3: "",
      facilityX: "",
    });
    setF1(false);
    setF2(false);
    setF3(false);
    setF4(false);
    setF5(false);
    setF6(false);
    setF7(false);
    setF8(false);
    setF9(false);
    setF10(false);
    setF11(false);
    setF12(false);
    setF13(false);
    setF14(false);
    setF15(false);
    fCount.current = 0;
  };
  console.log(data);

  const selectBox1 = (e) => {
    setF1(true);
    let { name, innerText } = e.target;
    handleSelectButton(f1, name, innerText);
  };
  const selectBox2 = (e) => {
    setF2(true);
    let { name, innerText } = e.target;
    handleSelectButton(f2, name, innerText);
  };
  const selectBox3 = (e) => {
    setF3(true);
    let { name, innerText } = e.target;
    handleSelectButton(f3, name, innerText);
  };
  const selectBox4 = (e) => {
    setF4(true);
    let { name, innerText } = e.target;
    handleSelectButton(f4, name, innerText);
  };
  const selectBox5 = (e) => {
    setF5(true);
    let { name, innerText } = e.target;
    handleSelectButton(f5, name, innerText);
  };
  const selectBox6 = (e) => {
    setF6(true);
    let { name, innerText } = e.target;
    handleSelectButton(f6, name, innerText);
  };
  const selectBox7 = (e) => {
    setF7(true);
    let { name, innerText } = e.target;
    handleSelectButton(f7, name, innerText);
  };
  const selectBox8 = (e) => {
    setF8(true);
    let { name, innerText } = e.target;
    handleSelectButton(f8, name, innerText);
  };
  const selectBox9 = (e) => {
    setF9(true);
    let { name, innerText } = e.target;
    handleSelectButton(f9, name, innerText);
  };
  const selectBox10 = (e) => {
    setF10(true);
    let { name, innerText } = e.target;
    handleSelectButton(f10, name, innerText);
  };
  const selectBox11 = (e) => {
    setF11(true);
    let { name, innerText } = e.target;
    handleSelectButton(f11, name, innerText);
  };
  const selectBox12 = (e) => {
    setF12(true);
    let { name, innerText } = e.target;
    handleSelectButton(f12, name, innerText);
  };
  const selectBox13 = (e) => {
    setF13(true);
    let { name, innerText } = e.target;
    handleSelectButton(f13, name, innerText);
  };
  const selectBox14 = (e) => {
    setF14(true);
    let { name, innerText } = e.target;
    handleSelectButton(f14, name, innerText);
  };
  const selectBox15 = (e) => {
    setF15(true);
    let { name, innerText } = e.target;
    handleSelectButton(f15, name, innerText);
  };

  const dispatch = useDispatch();
  const hotelData = useSelector((store) => {
    return store.UserReducer.hotelData;
  });
  const saveHotelDetails = async () => {
    let res = await fetch(`${URL.hotel}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let updatedData = await res.json();
    HotelAction(updatedData, dispatch);
    console.log(hotelData);
    navigate("../partner");
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
                  bgColor={f1 ? "green" : "#dfdfdf"}
                  color={f1 ? "white" : "black"}
                  fontWeight="600"
                  letterSpacing="1px"
                  onClick={selectBox1}
                  className="selectButton"
                  name="facility"
                >
                  Elevator
                </Button>
                <Button
                  p="8px 15px"
                  bgColor={f2 ? "green" : "#dfdfdf"}
                  color={f2 ? "white" : "black"}
                  fontWeight="600"
                  letterSpacing="1px"
                  onClick={selectBox2}
                  className="selectButton"
                  name="facility"
                >
                  TV
                </Button>
                <Button
                  p="8px 15px"
                  bgColor={f3 ? "green" : "#dfdfdf"}
                  color={f3 ? "white" : "black"}
                  fontWeight="600"
                  letterSpacing="1px"
                  onClick={selectBox3}
                  className="selectButton"
                  name="facility"
                >
                  Wifi
                </Button>
                <Button
                  p="8px 15px"
                  bgColor={f4 ? "green" : "#dfdfdf"}
                  color={f4 ? "white" : "black"}
                  fontWeight="600"
                  letterSpacing="1px"
                  onClick={selectBox4}
                  className="selectButton"
                  name="facility"
                >
                  Iron
                </Button>
                <Button
                  p="8px 15px"
                  bgColor={f5 ? "green" : "#dfdfdf"}
                  color={f5 ? "white" : "black"}
                  fontWeight="600"
                  letterSpacing="1px"
                  onClick={selectBox5}
                  className="selectButton"
                  name="facility"
                >
                  Power backup
                </Button>
                <Button
                  p="8px 15px"
                  bgColor={f6 ? "green" : "#dfdfdf"}
                  color={f6 ? "white" : "black"}
                  fontWeight="600"
                  letterSpacing="1px"
                  onClick={selectBox6}
                  className="selectButton"
                  name="facility"
                >
                  Wardrobe
                </Button>
                <Button
                  p="8px 15px"
                  bgColor={f7 ? "green" : "#dfdfdf"}
                  color={f7 ? "white" : "black"}
                  fontWeight="600"
                  letterSpacing="1px"
                  onClick={selectBox7}
                  className="selectButton"
                  name="facility"
                >
                  CCTV
                </Button>
                <Button
                  p="8px 15px"
                  bgColor={f8 ? "green" : "#dfdfdf"}
                  color={f8 ? "white" : "black"}
                  fontWeight="600"
                  letterSpacing="1px"
                  onClick={selectBox8}
                  className="selectButton"
                  name="facility"
                >
                  Reception
                </Button>
                <Button
                  p="8px 15px"
                  bgColor={f9 ? "green" : "#dfdfdf"}
                  color={f9 ? "white" : "black"}
                  fontWeight="600"
                  letterSpacing="1px"
                  onClick={selectBox9}
                  className="selectButton"
                  name="facility"
                >
                  Caretaker
                </Button>
                <Button
                  p="8px 15px"
                  bgColor={f10 ? "green" : "#dfdfdf"}
                  color={f10 ? "white" : "black"}
                  fontWeight="600"
                  letterSpacing="1px"
                  onClick={selectBox10}
                  className="selectButton"
                  name="facility"
                >
                  Parking Area
                </Button>
                <Button
                  p="8px 15px"
                  bgColor={f11 ? "green" : "#dfdfdf"}
                  color={f11 ? "white" : "black"}
                  fontWeight="600"
                  letterSpacing="1px"
                  onClick={selectBox11}
                  className="selectButton"
                  name="facility"
                >
                  Fire Extinguisher
                </Button>
                <Button
                  p="8px 15px"
                  bgColor={f12 ? "green" : "#dfdfdf"}
                  color={f12 ? "white" : "black"}
                  fontWeight="600"
                  letterSpacing="1px"
                  onClick={selectBox12}
                  className="selectButton"
                  name="facility"
                >
                  Kitchen
                </Button>
                <Button
                  p="8px 15px"
                  bgColor={f13 ? "green" : "#dfdfdf"}
                  color={f13 ? "white" : "black"}
                  fontWeight="600"
                  letterSpacing="1px"
                  onClick={selectBox13}
                  className="selectButton"
                  name="facility"
                >
                  First-aid kit
                </Button>
                <Button
                  p="8px 15px"
                  bgColor={f14 ? "green" : "#dfdfdf"}
                  color={f14 ? "white" : "black"}
                  fontWeight="600"
                  letterSpacing="1px"
                  onClick={selectBox14}
                  className="selectButton"
                  name="facility"
                >
                  Electric Kettle
                </Button>
                <Button
                  p="8px 15px"
                  bgColor={f15 ? "green" : "#dfdfdf"}
                  color={f15 ? "white" : "black"}
                  fontWeight="600"
                  letterSpacing="1px"
                  onClick={selectBox15}
                  className="selectButton"
                  name="facility"
                >
                  Doctor On Call
                </Button>
                <Button
                  p="8px 8px"
                  borderRadius="4px"
                  bgColor="#481616"
                  color="white"
                  fontWeight="600"
                  letterSpacing="1px"
                  onClick={clearFacility}
                  name="facility"
                >
                  Reset
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
                  onClick={saveHotelDetails}
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
                  placeholder="Enter Hotel Name"
                  bgColor="white"
                  borderColor="gray"
                  onChange={addDetails}
                  name="hotelName"
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
                  onChange={addDetails}
                  name="city"
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
                  onChange={addDetails}
                  name="address"
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
                    name="mainImage"
                    onChange={fileUpload}
                  />
                  {/* <Input
                    type="file"
                    bgColor="white"
                    borderColor="gray"
                    p="4px"
                    // ref={this.myFiles}
                    name="image1"
                    onChange={fileUpload}
                  />
                  <Input
                    type="file"
                    bgColor="white"
                    borderColor="gray"
                    p="4px"
                    // ref={this.myFiles}
                    name="image2"
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
                    name="image3"
                    onChange={fileUpload}
                  />
                  <Input
                    type="file"
                    bgColor="white"
                    borderColor="gray"
                    p="4px"
                    // ref={this.myFiles}
                    name="image4"
                    onChange={fileUpload}
                  />
                  <Input
                    type="file"
                    bgColor="white"
                    borderColor="gray"
                    p="4px"
                    // ref={this.myFiles}
                    name="image5"
                    onChange={fileUpload}
                  /> */}
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
        </ModalContent>
      </Modal>
    </>
  );
}
