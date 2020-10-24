import React from "react";
import { Button, Flex, Heading, Text, Image } from "@chakra-ui/core";
import ImageWoman from "../assets/hero-woman.jpg";
import Logo from "../assets/logo.svg";

const Hero = ({ gridColumn, gridRow }) => {
  return (
    <Flex
      backgroundImage={`url(${ImageWoman})`}
      bgSize="cover"
      bgPos="50% 30%"
      gridColumn={gridColumn}
      gridRow={gridRow}
      justify="start"
      align="center"
      position="relative"
    >
      <Flex ml="2rem" flexDirection="column">
        <Heading>Royalty Free</Heading>
        <Text my="0.5rem">Sell & Buy Ownership</Text>
        <Button size="sm" colorScheme="yellow">
          Start Now
        </Button>

        <Image
          display={{ lg: "none", md: "block" }}
          top="2rem"
          right="2rem"
          position="absolute"
          size="70px"
          objectFit="cover"
          src={Logo}
          h="6rem"
        />
      </Flex>
    </Flex>
  );
};

export default Hero;
