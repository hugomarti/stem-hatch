import React from "react";
import { Box, Flex, Grid, Link, Text } from "@chakra-ui/core";
import { IoMdCart, IoIosPlay, IoIosMore } from "react-icons/io";

const TrackCard = ({ track }) => {
  return (
    <Grid minH="6rem" gridTemplateColumns="2fr 3fr 2fr 1fr" bg="gray.600">
      <Box
        backgroundImage={`url(${track.image})`}
        bgSize="cover"
        h="100%"
        w="100%"
      />
      <Flex justifyContent="center" h="100%" p="1rem" flexDir="column">
        <Link fontWeight="600" fontSize="sm">
          {track.artist.length > 15
            ? track.artist.substr(0, 15) + "..."
            : track.artist}
        </Link>
        <Link fontWeight="300" fontSize="xs">
          {track.trackName.length > 15
            ? track.trackName.substr(0, 15) + "..."
            : track.trackName}
        </Link>
      </Flex>
      <Flex justifyContent="center" p="1rem" flexDir="column">
        <Link fontWeight="600" fontSize="sm">
          {track.genre}
        </Link>
        <Text fontWeight="300" fontSize="xs">
          {track.releaseDate}
        </Text>
      </Flex>
      <Flex
        bg="gray.500"
        h="100%"
        w="100%"
        alignItems="center"
        justifyContent="space-around"
        flexDir="column"
      >
        <Box
          size="1.2rem"
          cursor="pointer"
          _hover={{ color: "yellow.100" }}
          as={IoIosPlay}
        />
        <Box
          size="1.2rem"
          cursor="pointer"
          _hover={{ color: "yellow.100" }}
          as={IoMdCart}
        />
        <Box
          size="1.2rem"
          cursor="pointer"
          _hover={{ color: "yellow.100" }}
          as={IoIosMore}
        />
      </Flex>
    </Grid>
  );
};

export default TrackCard;
