import { Flex } from "@chakra-ui/layout";
import React from "react";
import Carousel from "../components/carousel";
import { CarouselKeen } from "../components/CarouselKeen";
import CustomBuildSwiper from "../components/Test";

const Home = () => {
  return (
    <Flex mt="30px">
      <CustomBuildSwiper />
    </Flex>
  );
};

export default Home;
