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

export function JoinForm() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [state, setState] = React.useState({ image: "s" });

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

  const addImageFn = () => {
    document.getElementById("ImageChooseBox").innerHTML += ``;
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
            filter="opacity(15%)"
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
          <ModalBody pb={6}>
            <form>
              <FormLabel className="partnerInputs" fontWeight="600">
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
              <FormLabel className="partnerInputs" fontWeight="600">
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
              <FormLabel className="partnerInputs" fontWeight="600">
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
              <FormLabel className="partnerInputs" fontWeight="600">
                Add Hotel Images
              </FormLabel>
              <Box id="ImageChooseBox">
                <Input
                  type="file"
                  bgColor="white"
                  borderColor="gray"
                  p="4px"
                  onChange={fileUpload}
                />
              </Box>
              <Button bgColor="gray" color="white" onClick={addImageFn}>
                Add Image
              </Button>
              {/* <Input
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
                /> */}
              {/* <br />
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
              </Box> */}
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
                  value="Save"
                  // w="10%"
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
