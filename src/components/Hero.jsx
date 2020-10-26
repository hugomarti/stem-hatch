import React from "react";
import { Button, Flex, Heading, Text, Image, Box } from "@chakra-ui/core";
import { useHistory } from "react-router-dom";
import Logo from "../assets/logo.svg";

const Hero = ({ gridColumn, gridRow, image, message, bgPos }) => {
  const history = useHistory();
  return (
    <Flex
      backgroundImage={`url(${image})`}
      bgSize="cover"
      bgPos={bgPos}
      gridColumn={gridColumn}
      gridRow={gridRow}
      justify="start"
      align="center"
      position="relative"
    >
      <Flex ml="2rem" flexDirection="column">
        {message && (
          <Box>
            <Heading>Royalty Free</Heading>
            <Text my="0.5rem">Sell & Buy Ownership</Text>
            <Button
              onClick={() => history.push("/how-it-works")}
              size="sm"
              colorScheme="yellow"
            >
              Start Now
            </Button>
          </Box>
        )}
        <Image
          display={{ lg: "none", md: "block" }}
          top="2rem"
          right="2rem"
          position="absolute"
          objectFit="cover"
          src={Logo}
          h="5rem"
        />
      </Flex>
    </Flex>
  );
};

export default Hero;
