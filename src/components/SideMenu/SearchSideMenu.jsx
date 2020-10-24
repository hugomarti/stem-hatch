import React from "react";
import { InputGroup, InputLeftElement, Icon, Input } from "@chakra-ui/core";
import { IoIosSearch } from "react-icons/io";

const SearchSideMenu = () => {
  return (
    <InputGroup size="sm" mx="1rem" mt="1rem" w="9rem">
      <InputLeftElement children={<Icon as={IoIosSearch} color="gray.300" />} />
      <Input placeholder="Search" />
    </InputGroup>
  );
};

export default SearchSideMenu;
