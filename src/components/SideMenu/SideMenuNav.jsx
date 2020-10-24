import React from "react";
import { Box, Image } from "@chakra-ui/core";
import Logo from "../../assets/logo.svg";

import { menuListItems, genreListItems } from "./sideMenu";
import MenuListGroup from "./MenuListGroup";
import SearchSideMenu from "./SearchSideMenu";

const SideMenuNav = ({ gridColumn, gridRow }) => {
  return (
    <Box
      display={{ lg: "flex", md: "none", base: "none" }}
      flexDir="column"
      justifyContent="start"
      bg="gray.700"
      gridColumn={gridColumn}
      gridRow={gridRow}
      position="fixed"
      top="7vh"
      w="11rem"
      bottom="0"
    >
      <Box h="100%">
        <SearchSideMenu />
        <MenuListGroup fontSize="sm" data={menuListItems} title="Menu" />
        <MenuListGroup fontSize="sm" data={genreListItems} title="Genres" />
      </Box>
      <Image h="6rem" mb="1rem" src={Logo} />
    </Box>
  );
};

export default SideMenuNav;
