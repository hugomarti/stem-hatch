import React from "react";
import {
  Box,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Link,
} from "@chakra-ui/core";
import { IoIosArrowDown } from "react-icons/io";

const GenresMenu = () => {
  return (
    <Menu>
      <MenuButton rightIcon="chevron-down">
        <Link>Genres</Link>
        <Icon ml="0.3rem" as={IoIosArrowDown} />
      </MenuButton>
      <MenuList bg="gray.700">
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem as="a" href="#">
          Attend a Workshop
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default GenresMenu;
