import React, { useRef, useState } from "react";
import { Swiper, Navigation, Pagination, Autoplay } from "swiper";
import ReactIdSwiperCustom from "react-id-swiper/lib/ReactIdSwiper.custom";
import "swiper/swiper-bundle.css";
import { Flex } from "@chakra-ui/react";

const data = ["1", "2", "3", "4", "5", "6", "7"];

const CustomBuildSwiper = (setCurrentSlide: any) => {
  const [activeSlide, setActiveSlide] = useState();

  const swiperRef = useRef();

  const params = {
    // Provide Swiper class as props
    Swiper,
    // Add modules
    modules: [Navigation, Pagination, Autoplay],
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
    // autoplay: {
    //   delay: 2000,
    // },
    loop: true,
    spaceBetween: 30,
    slidesPerView: "auto" as any,
    centeredSlides: true,
    touchEventsTarget: "wrapper",

    on: {
      activeIndexChange: () => {
        setActiveSlide((swiperRef.current as any).swiper.realIndex);
        console.log((swiperRef.current as any).swiper.realIndex);
      },
    },
  };
  return (
    <>
      <ReactIdSwiperCustom ref={swiperRef} {...(params as any)}>
        {data.map((item, index) => {
          const ref = useRef();
          return (
            <Flex
              onClick={() => console.log(ref)}
              ref={ref as any}
              w="300px"
              h="400px"
              borderRadius="10px"
              overflow="hidden"
              bgColor="red.400"
              justifyContent="center"
              alignItems="center"
              backgroundImage={`url(/img/${index + 1}.jpg)`}
              backgroundSize="cover"
              color="white"
              fontSize="24px"
            ></Flex>
          );
        })}
      </ReactIdSwiperCustom>
    </>
  );
};
export default CustomBuildSwiper;
