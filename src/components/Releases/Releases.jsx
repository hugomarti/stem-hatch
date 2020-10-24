import React from "react";
import { Flex, Image, Link, Text, Box, Icon, Grid } from "@chakra-ui/core";
import { AiOutlinePlayCircle } from "react-icons/ai";

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
      <Text fontWeight="600" mb="1rem">
        {title}
      </Text>
      <Grid
        templateColumns={{
          md: "1fr 1fr 1fr 1fr",
          base: "1fr 1fr",
        }}
        gap="1rem"
      >
        {data.map((i) => (
          <Flex
            flexDir="column"
            // flex={{ xl: "0 1 15%", lg: "0 1 20%", md: "25%", base: "0 1 35%" }}

            key={i.id}
          >
            <Box position="relative">
              <Icon
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                position="absolute"
                as={AiOutlinePlayCircle}
                boxSize={10}
                color="white"
              />
              <Image cursor="pointer" src={i.image} />
            </Box>
            <Flex pt="0.3rem" height="2.3rem" justifyContent="space-between">
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
