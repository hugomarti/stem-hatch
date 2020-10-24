import React from "react";
import {
  FormLabel,
  Input,
  Heading,
  Divider,
  Button,
  Flex,
} from "@chakra-ui/core";

const LoginForm = () => {
  return (
    <Flex flexDir="column" justifyContent="center">
      <Heading size="md">Login</Heading>
      <Divider my="1rem" />
      <FormLabel>Email</FormLabel>
      <Input />
      <FormLabel>Password</FormLabel>
      <Input />
      <Button my="1rem" colorScheme="yellow">
        Login
      </Button>
    </Flex>
  );
};

export default LoginForm;
