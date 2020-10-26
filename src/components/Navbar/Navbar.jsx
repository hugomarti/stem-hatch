import React from "react";
import { Box, Flex, Image } from "@chakra-ui/core";
import { useHistory } from "react-router-dom";
import LogoTypo from "../../assets/logo-typo.svg";
import { IoMdSettings } from "react-icons/io";

import NavDrawer from "../SideMenu/NavDrawer";
import SignInLoginModal from "../SignInLoginModal/SignInLoginModal";
import CartDrawer from "../CartDrawer/CartDrawer";

const Navbar = ({ gridColumn, gridRow, bg }) => {
  const history = useHistory();
  return (
    <Flex
      alignItems="center"
      bg={bg}
      gridColumn={gridColumn}
      gridRow={gridRow}
      position="sticky"
      top="0"
      zIndex="1"
      boxShadow="lg"
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        width="95%"
        margin="auto"
        zIndex="3"
      >
        <Flex width="15vw">
          <Box mr="1rem" cursor="pointer" display={{ lg: "none", md: "flex" }}>
            <NavDrawer />
          </Box>
          <Image
            onClick={() => history.push("/")}
            cursor="pointer"
            w="7rem"
            src={LogoTypo}
          />
        </Flex>
        <Flex width="65vw" alignItems="center" justifyContent="flex-end">
          <Box
            _hover={{ transform: "translateY(-0.1rem)" }}
            cursor="pointer"
            as={IoMdSettings}
            mr="1.5rem"
            size="1.5rem"
            color="white"
          />
          <SignInLoginModal />
          <CartDrawer />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
