import {
  Flex,
  CheckboxGroup,
  Select,
  Text,
  Checkbox,
  Box,
} from "@chakra-ui/core";
import React from "react";

const FilterTracks = ({ gridColumn, gridRow, bg }) => {
  return (
    <Flex
      bg={bg}
      gridColumn={gridColumn}
      gridRow={gridRow}
      flexDir="column"
      p="1rem"
    >
      <Box pos="fixed">
        <Text color="yellow.100">Sort By:</Text>
        <Select mt={{ lg: "0.2rem", md: "0.5rem", base: "0.5rem" }} size="sm">
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
          <option value="mostPlayed">Most Played</option>
          <option value="featured">Featured</option>
        </Select>
        <Text color="yellow.100" mt="2rem">
          Release date:
        </Text>
        <Select mt={{ lg: "0.2rem", md: "0.5rem", base: "0.5rem" }} size="sm">
          <option value="today">Today</option>
          <option value="thisWeek">This Week</option>
          <option value="thisMonth">This Month</option>
        </Select>
        <Text mt="2rem" color="yellow.100">
          Genres
        </Text>
        <CheckboxGroup colorScheme="yellow">
          <Flex flexDir="column" alignItems="flex-start">
            <Checkbox
              mt={{ lg: "0.2rem", md: "0.5rem", base: "0.5rem" }}
              size="sm"
              value="deepHouse"
            >
              Deep House
            </Checkbox>
            <Checkbox
              mt={{ lg: "0.2rem", md: "0.5rem", base: "0.5rem" }}
              size="sm"
              value="house"
            >
              House
            </Checkbox>
            <Checkbox
              mt={{ lg: "0.2rem", md: "0.5rem", base: "0.5rem" }}
              size="sm"
              value="techno"
            >
              Techno
            </Checkbox>
            <Checkbox
              mt={{ lg: "0.2rem", md: "0.5rem", base: "0.5rem" }}
              size="sm"
              value="minimal"
            >
              Minimal
            </Checkbox>
            <Checkbox
              mt={{ lg: "0.2rem", md: "0.5rem", base: "0.5rem" }}
              size="sm"
              value="lofiHouse"
            >
              Lofi House
            </Checkbox>
            <Checkbox
              mt={{ lg: "0.2rem", md: "0.5rem", base: "0.5rem" }}
              size="sm"
              value="electronica"
            >
              Electronica
            </Checkbox>
            <Checkbox
              mt={{ lg: "0.2rem", md: "0.5rem", base: "0.5rem" }}
              size="sm"
              value="hipHop"
            >
              Hip Hip
            </Checkbox>
            <Checkbox
              mt={{ lg: "0.2rem", md: "0.5rem", base: "0.5rem" }}
              size="sm"
              value="lofiHipHop"
            >
              Lofi Hip Hop
            </Checkbox>
          </Flex>
        </CheckboxGroup>
      </Box>
    </Flex>
  );
};

export default FilterTracks;
