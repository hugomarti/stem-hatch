import React from "react";
import { Divider, Flex, Link, Heading } from "@chakra-ui/core";
import { topTenArtists } from "./topTenArtists";

const TopTenSection = ({ title, gridColumn, gridRow, bg }) => {
  return (
    <Flex
      padding="1rem"
      flexDir="column"
      bg={bg}
      gridColumn={gridColumn}
      gridRow={gridRow}
    >
      <Heading size="md" mb="1rem">
        {title}
      </Heading>
      <Flex
        height="100%"
        marginTop="1rem"
        justifyContent="start"
        flexDir="column"
      >
        {topTenArtists.map((artist) => (
          <Flex mt="1rem" flexDir="column" key={artist.id}>
            <Flex alignItems="center">
              <Heading color="yellow.100" size="md" fontWeight="500">
                {artist.position}
              </Heading>
              <Link marginLeft="1rem" fontSize="sm">
                {artist.title}
              </Link>
            </Flex>
            <Divider orientation="horizontal" borderColor="gray.400" />
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default TopTenSection;
