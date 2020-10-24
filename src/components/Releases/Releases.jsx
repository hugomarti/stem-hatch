import React from "react";
import { Flex, Link, Text, Grid, Heading } from "@chakra-ui/core";
import Artwork from "./Artwork";

const Releases = ({ gridRow, gridColumn, data, title, bg }) => {
  return (
    <Flex
      bg={bg}
      gridColumn={gridColumn}
      gridRow={gridRow}
      padding="1rem"
      flexDir="column"
      justifyContent="center"
    >
      <Heading size="md" mb="1rem">
        {title}
      </Heading>
      <Grid
        templateColumns={{
          md: "1fr 1fr 1fr 1fr",
          base: "1fr 1fr",
        }}
        gap="1rem"
      >
        {data.map((i) => (
          <Flex flexDir="column" key={i.id}>
            <Artwork image={i.image} />
            <Flex
              pt="0.3rem"
              height="2.3rem"
              alignItems="center"
              justifyContent="space-between"
            >
              <Link fontSize={{ md: "sm", base: "sm" }}>{i.artist}</Link>
              <Text fontSize="sm" color="yellow.100">
                ${i.price}
              </Text>
            </Flex>
          </Flex>
        ))}
      </Grid>
    </Flex>
  );
};

export default Releases;
