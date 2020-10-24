import React from "react";
import { Flex, Heading, Link, List, ListItem } from "@chakra-ui/core";
import { useHistory } from "react-router-dom";

const MenuListGroup = ({ title, data, fontSize }) => {
  const history = useHistory();
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
            <Link onClick={() => history.push(list.route)}>{list.title}</Link>
          </ListItem>
        ))}
      </List>
    </Flex>
  );
};

export default MenuListGroup;
