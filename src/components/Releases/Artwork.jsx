import React from "react";
import styled from "styled-components";
import { Flex, Image, Text, Box } from "@chakra-ui/core";
import { IoIosPlay } from "react-icons/io";

const ArtworkContainer = styled(Box)`
  &:hover {
    div {
      display: flex;
    }
  }
`;

const Artwork = ({ image }) => {
  return (
    <ArtworkContainer
      position="relative"
      _hover={{ transform: "translateY(-0.1rem)" }}
      // boxShadow=" 0.5px 0.5px 7px #171923"
    >
      <Image cursor="pointer" src={image} />
      <Box
        position="absolute"
        bottom="0"
        display="none"
        w="100%"
        h="20%"
        cursor="pointer"
      >
        <Flex
          justify="center"
          alignItems="center"
          w="20%"
          h="100%"
          bg="gray.700"
          opacity="0.8"
          _hover={{ opacity: "1" }}
        >
          <Box as={IoIosPlay} size="2rem" />
        </Flex>
        <Flex
          justify="center"
          alignItems="center"
          w="80%"
          h="100%"
          bg="yellow.400"
          opacity="0.8"
          _hover={{ opacity: "1" }}
        >
          <Text fontSize="sm" fontWeight="500" color="black">
            ADD TO CART
          </Text>
        </Flex>
      </Box>
    </ArtworkContainer>
  );
};

export default Artwork;
