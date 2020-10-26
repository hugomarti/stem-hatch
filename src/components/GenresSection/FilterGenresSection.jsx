import React from "react";
import {
  Flex,
  CheckboxGroup,
  Select,
  Text,
  Checkbox,
  Box,
} from "@chakra-ui/core";

const FilterGenresSection = ({ gridColumn, gridRow, bg }) => {
  return (
    <Flex
      bg={bg}
      gridColumn={gridColumn}
      gridRow={gridRow}
      flexDir="column"
      p="1rem"
    >
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
    </Flex>
  );
};

export default FilterGenresSection;
