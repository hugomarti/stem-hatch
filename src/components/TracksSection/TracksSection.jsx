import React from "react";
import { Box, Flex, Grid, Link, Text } from "@chakra-ui/core";
import TrackCard from "./TrackCard";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const TracksSection = ({ gridColumn, gridRow, data, bg }) => {
  return (
    <Flex
      p="1rem"
      flexDir="column"
      bg={bg}
      gridColumn={gridColumn}
      gridRow={gridRow}
    >
      <Grid
        gridTemplateColumns={{
          xl: "1fr 1fr 1fr",
          lg: "1fr 1fr",
          md: "1fr 1fr",
          base: "1fr",
        }}
        flexDir="column"
        gap="1rem"
      >
        {data.map((track) => (
          <TrackCard track={track} />
        ))}
      </Grid>
      <Flex
        margin="auto"
        justifyContent="space-between"
        alignItems="center"
        mt="2rem"
      >
        <Box
          _hover={{ color: "yellow.100" }}
          cursor="pointer"
          as={IoIosArrowBack}
          mr="0.5rem"
        />
        <Box mr="0.5rem" px="0.5rem" bg="gray.600">
          <Link>1</Link>
        </Box>
        <Box mr="0.5rem" px="0.5rem" bg="gray.600">
          <Link>2</Link>
        </Box>
        <Box mr="0.5rem" px="0.5rem" bg="gray.600">
          <Link>3</Link>
        </Box>
        <Box mr="0.5rem" px="0.5rem" bg="gray.600">
          <Link>4</Link>
        </Box>
        <Text mr="0.5rem">...</Text>
        <Box mr="0.5rem" px="0.5rem" bg="gray.600">
          <Link>955</Link>
        </Box>
        <Box
          _hover={{ color: "yellow.100" }}
          cursor="pointer"
          as={IoIosArrowForward}
        />
      </Flex>
    </Flex>
  );
};

export default TracksSection;
