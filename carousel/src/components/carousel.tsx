import { Box, Flex } from "@chakra-ui/layout";
import { Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const MotionFlex = motion(Flex);
const data = ["1", "2", "3", "4", "5", "6", "7"];

const Carousel = () => {
  const [state, setState] = useState(0);
  const [current, setCurrent] = useState(Math.round(data.length / 2));
  console.log(current);

  return (
    <Flex
      overflow="hidden"
      alignItems="center"
      flexDir="column"
      mt={8}
      w="full"
      h="200px"
      position="relative"
    >
      <MotionFlex
        animate={{ x: state, transition: { duration: 0.3 } }}
        position="absolute"
        zIndex={1}
      >
        {data.map((item, index) => {
          return (
            <Flex
              mr={index !== data.length - 1 ? "30px" : "0px"}
              w="400px"
              h="200px"
              bgColor="red.300"
            >
              {item}
            </Flex>
          );
        })}
      </MotionFlex>
      <Flex mt="100px" position="absolute" zIndex={2}>
        <Icon
          onClick={() => {
            setState(state + 430);
            setCurrent(current - 1);
          }}
          cursor="pointer"
          w="60px"
          h="60px"
          as={IoIosArrowBack}
          mr="250px"
        />
        <Icon
          onClick={() => {
            setState(state - 430);
            setCurrent(current + 1);
          }}
          cursor="pointer"
          w="60px"
          h="60px"
          as={IoIosArrowForward}
        />
      </Flex>
    </Flex>
  );
};

export default Carousel;
