import React from "react";
import { Flex, Heading, Link, List, ListItem } from "@chakra-ui/core";

const MenuListGroup = ({ title, data, fontSize }) => {
  return (
    <Flex marginLeft="1rem" flexDir="column">
      <Heading
        marginTop="2rem"
        marginBottom="0.5rem"
        fontSize="md"
        color="yellow.100"
      >
        {title}
      </Heading>
      <List>
        {data.map((list) => (
          <ListItem fontSize={fontSize} mt="0.3rem" key={list.id}>
            <Link>{list.title}</Link>
          </ListItem>
        ))}
      </List>
    </Flex>
  );
};

export default MenuListGroup;
