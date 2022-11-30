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
  Image
} from "@chakra-ui/react";

export function JoinForm() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);

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
        <ModalContent>
          <Image bgColor="black" color="white" w="100%" h="100%" position="absolute" top="0px" filter="opacity(40%)" src="https://v.fastcdn.co/u/b33fcfa6/59014657-0-how-to-begin1-man.png" />
            {/* <img src="" alt="form" style={{opacity: "50%", position: "absolute" }} /> */}
            <ModalHeader>Create your account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>First name</FormLabel>
                <Input ref={initialRef} placeholder="First name" />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Last name</FormLabel>
                <Input placeholder="Last name" />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button
                bgColor="#ee2e24"
                className="saveCancel"
                border="1px solid #ee2e24"
                color="white"
                mr={3}
              >
                Save
              </Button>
              <Button
                bgColor="#ee2e24"
                className="saveCancel"
                border="1px solid #ee2e24"
                color="white"
                mr={3}
                onClick={onClose}
              >
                Cancel
              </Button>
            </ModalFooter>
          {/* </Box> */}
        </ModalContent>
      </Modal>
    </>
  );
}
