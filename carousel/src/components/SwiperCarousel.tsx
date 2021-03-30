import { Flex } from "@chakra-ui/layout";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

interface SwiperCarouselProps {}

export const SwiperCarousel: React.FC<SwiperCarouselProps> = ({}) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <Flex w="200px" h="300px" bgColor="red.300">
          1
        </Flex>
      </SwiperSlide>
      <SwiperSlide>
        <Flex w="200px" h="300px" bgColor="red.300">
          2
        </Flex>
      </SwiperSlide>
      <SwiperSlide>
        <Flex w="200px" h="300px" bgColor="red.300">
          3
        </Flex>
      </SwiperSlide>
      <SwiperSlide>
        <Flex w="200px" h="300px" bgColor="red.300">
          4
        </Flex>
      </SwiperSlide>
    </Swiper>
  );
};
