import React, { useState } from "react";
import { Button, Divider, Flex, Heading } from "@chakra-ui/core";

const SignUp = () => {
  const [collapseForm, setCollapseForm] = useState(false);
  return (
    <Flex mb="2rem" flexDir="column" justifyContent="center">
      <Heading size="md">Sign Up</Heading>
      <Divider my="1rem" />
      <Button
        colorScheme="yellow"
        onClick={() => setCollapseForm(!collapseForm)}
      >
        Create an Account
      </Button>
    </Flex>
  );
};

export default SignUp;
