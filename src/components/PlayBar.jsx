import React from "react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Flex,
  Icon,
  Text,
  Image,
  Link,
} from "@chakra-ui/core";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { GiSpeaker } from "react-icons/gi";

const PlayBar = ({ gridColumn, gridRow, bg }) => {
  return (
    <Flex
      bg={bg}
      gridColumn={gridColumn}
      gridRow={gridRow}
      alignItems="center"
      position="sticky"
      bottom="0"
      zIndex="10"
    >
      <Flex
        flexDir={{ md: "row", base: "column" }}
        alignItems="center"
        justifyContent="center"
        margin="auto"
        p={{ base: "1rem" }}
      >
        <Flex alignItems="center">
          <Icon
            cursor="pointer"
            as={IoIosArrowBack}
            boxSize={5}
            color="white"
          />
          <Icon
            cursor="pointer"
            as={IoIosArrowBack}
            boxSize={5}
            color="white"
          />
          <Icon
            cursor="pointer"
            as={AiOutlinePlayCircle}
            boxSize={8}
            color="white"
            mx="1rem"
          />
          <Icon
            cursor="pointer"
            as={IoIosArrowForward}
            boxSize={5}
            color="white"
          />
          <Icon
            cursor="pointer"
            as={IoIosArrowForward}
            boxSize={5}
            color="white"
          />
        </Flex>
        <Flex w={{ md: "30vw", base: "90vw" }} my={{ base: "1rem" }}>
          <Text mx="1rem" color="gray.300" fontSize="xs">
            2:22
          </Text>
          <Slider colorScheme="yellow" defaultValue={30}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <Text mx="1rem" color="gray.300" fontSize="xs">
            4:52
          </Text>
        </Flex>
        <Flex alignItems="center" justifyContent="space-around">
          <Icon as={GiSpeaker} boxSize={6} color="white" />
          <Image
            mx="1rem"
            height="2.5rem"
            src="https://i.ibb.co/HXnk752/3006e44d-63c7-4640-bc08-1eaec0811642.jpg"
          />
          <Link color="gray.200">John Dimas</Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PlayBar;
