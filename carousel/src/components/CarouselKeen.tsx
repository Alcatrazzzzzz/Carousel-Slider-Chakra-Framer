import { Flex, Stack } from "@chakra-ui/layout";
import { Box, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import Swiper from "react-id-swiper";
import "swiper/swiper-bundle.css";

interface CarouselKeenProps {}

const MotionFlex = motion(Flex);
const data = [1, 2, 3, 4, 5, 6];

export const CarouselKeen: React.FC<CarouselKeenProps> = ({}) => {
  const swiperRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const params = {
    loop: true,
    spaceBetween: 30,
    slidesPerView: "auto" as any,
    centeredSlides: true,
  };

  const goNext = () => {
    if (swiperRef.current && (swiperRef.current as any).swiper) {
      (swiperRef.current as any).swiper.slideNext();
    }
  };
  const goPrev = () => {
    if (swiperRef.current && (swiperRef.current as any).swiper) {
      (swiperRef.current as any).swiper.slidePrev();
    }
  };

  return (
    <Flex alignItems="center" mt={8} w="full" position="relative">
      <Swiper ref={swiperRef} {...params}>
        {data.map((item) => {
          return (
            <Flex
              w="400px"
              h="400px"
              bgColor="red.400"
              justifyContent="center"
              alignItems="center"
            >
              {item}
            </Flex>
          );
        })}
      </Swiper>
      <Flex
        left="50%"
        transform="translate(-50%, -50%)"
        justifyContent="space-between"
        mt="100px"
        zIndex={2}
        position="absolute"
        pointerEvents="none"
      >
        <Icon
          onClick={goPrev}
          color="white"
          cursor="pointer"
          w="100px"
          h="100px"
          as={RiArrowLeftSLine}
          mr="700px"
          pointerEvents="visible"
        />
        <Icon
          onClick={goNext}
          color="white"
          cursor="pointer"
          w="100px"
          h="100px"
          as={RiArrowRightSLine}
          pointerEvents="visible"
        />
      </Flex>
      <Stack
        mt="350px"
        left="50%"
        transform="translate(-50%, -50%)"
        direction="row"
        zIndex={2}
        position="absolute"
      >
        {data.map((item, index) => {
          return (
            <MotionFlex
              onClick={() => setCurrentSlide(index)}
              cursor="pointer"
              key={index}
              h={4}
              w={4}
              borderRadius={50}
              animate={
                currentSlide === index
                  ? { backgroundColor: "#196cd8" }
                  : { backgroundColor: "#ffffff" }
              }
            ></MotionFlex>
          );
        })}
      </Stack>
    </Flex>
  );
};
