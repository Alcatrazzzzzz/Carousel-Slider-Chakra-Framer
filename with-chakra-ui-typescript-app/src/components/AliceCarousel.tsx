import { Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import AliceCar from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface AliceCarouselProps {}

const MotionFlex = motion(Flex);

const data = ["1", "2", "3", "4", "5", "6", "7"];

const AliceCarousel: React.FC<AliceCarouselProps> = ({}) => {
  const [activeIndex, setActiveSlide] = useState(Math.floor(data.length / 2));
  const [carouselPadding, setCarouselPadding] = useState(); // used for calculcate padding
  const refCar = useRef();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCarouselPadding((window.innerWidth / 2 - 170) as any);
    }
  });

  const items = data.map((_, index) => {
    const ref = useRef();
    return (
      <Flex w="340px" h="400px" p="0 20px">
        <Flex w="100%" h="100%" position="relative">
          <Flex
            w="100%"
            h="100%"
            onClick={() => console.log(ref)}
            ref={ref as any}
            borderRadius="10px"
            overflow="hidden"
            justifyContent="center"
            alignItems="center"
            backgroundImage={`url(/img/${index + 1}.jpg)`}
            backgroundSize="cover"
            color="white"
            fontSize="24px"
          ></Flex>
          <AnimatePresence>
            {activeIndex === index ? (
              <MotionFlex
                pointerEvents="none"
                key={"1"}
                borderRadius="0px 0px 10px 10px"
                position="absolute"
                h="100%"
                w="100%"
                bottom="0"
                background="linear-gradient(0deg, rgba(0,0,0,1) 1%, rgba(0,0,0,0.4) 52%, rgba(0,0,0,0) 100%)"
                initial={
                  activeIndex !== index ? { opacity: 1 } : { opacity: 0 }
                }
                animate={{
                  opacity: [0, 1],
                }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
              >
                <MotionFlex
                  key="3"
                  color="white"
                  flexDir="column"
                  p="20px"
                  mt="auto"
                  initial={{ y: "20%" }}
                  animate={{ y: "0%", transition: { duration: 0.7 } }}
                  exit={{ y: "20%", transition: { duration: 0.5 } }}
                >
                  <Text fontSize="20px" mb="8px">
                    Some description about what yo're seeing now{" "}
                  </Text>
                  <HStack spacing="15px" fontSize="12px">
                    <Text>Action</Text>
                    <Text>Drama</Text>
                    <Text>Fantasy</Text>
                  </HStack>
                </MotionFlex>
              </MotionFlex>
            ) : (
              <MotionFlex
                key={"2"}
                borderRadius="10px"
                position="absolute"
                w="100%"
                h="100%"
                bgColor="rgb(5, 5, 5, 0.5)"
                initial={
                  activeIndex === index ? { opacity: 1 } : { opacity: 0 }
                }
                animate={{ opacity: [0, 1], transition: { duration: 0.5 } }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
              />
            )}
          </AnimatePresence>
        </Flex>
      </Flex>
    );
  });

  const renderDotsItem = ({ isActive }: any) => {
    return isActive ? (
      <Flex
        cursor="pointer"
        m="0 5px"
        borderRadius="50px"
        w="12px"
        h="12px"
        bgColor="#D3004A"
        transition="0.5s"
      />
    ) : (
      <Flex
        cursor="pointer"
        m="0 5px"
        borderRadius="50px"
        w="12px"
        h="12px"
        bgColor="#bababb"
        transition="0.5s"
      />
    );
  };

  const onSlideChange = () => {
    setActiveSlide((refCar.current as any).state.activeIndex);
  };

  return (
    <>
      <AliceCar
        ref={refCar as any}
        paddingLeft={carouselPadding}
        disableButtonsControls
        autoWidth
        infinite
        mouseTracking
        touchTracking
        items={items}
        renderDotsItem={renderDotsItem}
        activeIndex={activeIndex}
        onSlideChanged={onSlideChange}
      />
      <Flex pointerEvents="none" pt="180px" w="100%" position="absolute">
        <Icon
          pointerEvents="visible"
          onClick={() => refCar.current && (refCar.current as any).slidePrev()}
          color="#D3004A"
          cursor="pointer"
          w="60px"
          h="60px"
          as={IoIosArrowBack}
        />
        <Icon
          pointerEvents="visible"
          onClick={() => refCar.current && (refCar.current as any).slideNext()}
          color="#D3004A"
          ml="auto"
          cursor="pointer"
          w="60px"
          h="60px"
          as={IoIosArrowForward}
        />
      </Flex>
    </>
  );
};

export default AliceCarousel;
