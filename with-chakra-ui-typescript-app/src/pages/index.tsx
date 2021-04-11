import { Flex } from "@chakra-ui/react";
import React from "react";
import dynamic from "next/dynamic";

const NoSSRAliceCarousel = dynamic(
  () => import("../components/AliceCarousel") as any,
  {
    ssr: false,
  }
);

const Index = () => {
  return (
    <Flex mt="40px">
      <NoSSRAliceCarousel />
    </Flex>
  );
};

export default Index;
