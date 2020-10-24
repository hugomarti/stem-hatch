import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  Icon,
  useDisclosure,
} from "@chakra-ui/core";
import { IoIosMenu } from "react-icons/io";

import { menuListItems, genreListItems } from "./sideMenu";
import MenuListGroup from "./MenuListGroup";
import SearchSideMenu from "./SearchSideMenu";

const NavDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Icon onClick={onOpen} boxSize={8} as={IoIosMenu} />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg="gray.700">
            <DrawerHeader>
              <DrawerCloseButton alignSelf="start" />
            </DrawerHeader>

            <DrawerBody>
              <SearchSideMenu />
              <MenuListGroup fontSize="lg" data={menuListItems} title="Menu" />
              <MenuListGroup
                fontSize="lg"
                data={genreListItems}
                title="Genre"
              />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default NavDrawer;
