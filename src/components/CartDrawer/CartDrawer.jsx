import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  Button,
  useDisclosure,
  Avatar,
} from "@chakra-ui/core";
import { FiShoppingBag } from "react-icons/fi";

const CartDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Box>
      <Box position="relative" cursor="pointer" onClick={onOpen} mr="0.5rem">
        <Box
          _hover={{ transform: "translateY(-0.5px)" }}
          as={FiShoppingBag}
          size="1.5rem"
          color="white"
        />
        <Avatar
          bg="yellow.400"
          color="black"
          position="absolute"
          h="1.3rem"
          w="1.3rem"
          name="2"
          top="-2"
          right="-3"
        />
      </Box>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent bg="gray.700">
            <DrawerCloseButton />
            <DrawerHeader>Cart Items</DrawerHeader>

            <DrawerBody></DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="yellow">Checkout</Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default CartDrawer;
