import React from "react";
import { Swiper, Navigation, Pagination } from "swiper";
import ReactIdSwiperCustom from "react-id-swiper/lib/ReactIdSwiper.custom";
import Image from "next/image";
import "swiper/swiper-bundle.css";

import { Flex } from "@chakra-ui/react";

const data = ["1", "2", "3", "4", "5", "6", "7"];

const CustomBuildSwiper = () => {
  const params = {
    // Provide Swiper class as props
    Swiper,
    // Add modules
    modules: [Navigation, Pagination],
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
      // renderBullet: (index: number, className: string) => {
      //   return `<span class="${className}">${index + 1}</span>`;
      // },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    spaceBetween: 30,
    slidesPerView: "auto" as any,
    centeredSlides: true,
    touchEventsTarget: "wrapper",
  };
  return (
    <ReactIdSwiperCustom {...(params as any)}>
      {data.map((item, index) => {
        return (
          <Flex
            w="300px"
            h="400px"
            borderRadius="10px"
            overflow="hidden"
            bgColor="red.400"
            justifyContent="center"
            alignItems="center"
            backgroundImage={`url(/img/${index + 1}.jpg)`}
            backgroundSize="cover"
          ></Flex>
        );
      })}
    </ReactIdSwiperCustom>
  );
};
export default CustomBuildSwiper;
