import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Portal,
  Button,
  PopoverFooter,
  Box,
} from "@chakra-ui/core";
import { IoMdSettings } from "react-icons/io";

const SettingsPopover = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Box
          cursor="pointer"
          as={IoMdSettings}
          mr="1.5rem"
          size="1.5rem"
          color="white"
        />
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverHeader>Header</PopoverHeader>
          <PopoverCloseButton />
          <PopoverBody>
            <Button colorScheme="blue">Button</Button>
          </PopoverBody>
          <PopoverFooter>This is the footer</PopoverFooter>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};

export default SettingsPopover;
