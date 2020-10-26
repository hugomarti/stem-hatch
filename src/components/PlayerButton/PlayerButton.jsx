import React from "react";
import { Button, Icon } from "@chakra-ui/core";
import { GiSoundWaves } from "react-icons/gi";

const PlayerButton = ({ onClick }) => {
  return (
    <Button
      size={{ md: "md", base: "sm" }}
      colorScheme="yellow"
      position="fixed"
      bottom="1rem"
      right="1rem"
      zIndex="20"
      onClick={onClick}
      opacity="0.8"
      _hover={{ transform: "translateY(-0.3rem)", opacity: 1 }}
      boxShadow="5px 5px 20px"
    >
      <Icon as={GiSoundWaves} boxSize={{ md: 20, base: 10 }} />
    </Button>
  );
};

export default PlayerButton;
