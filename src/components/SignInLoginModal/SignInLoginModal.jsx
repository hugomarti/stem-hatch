import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,
  Heading,
} from "@chakra-ui/core";
import { IoIosPerson } from "react-icons/io";
import LoginForm from "./LoginForm";
import SignUp from "./SignUp";

const SignInLoginModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box marginRight="1.5rem">
      <Box
        _hover={{ transform: "translateY(-0.5px)" }}
        onClick={onOpen}
        cursor="pointer"
        as={IoIosPerson}
        size="1.5rem"
        color="white"
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay>
          <ModalContent bg="gray.700">
            <ModalHeader>
              <Heading size="lg" color="yellow.100">
                Welcome te Stem Hatch
              </Heading>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <SignUp />
              <LoginForm />
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </Box>
  );
};

export default SignInLoginModal;
