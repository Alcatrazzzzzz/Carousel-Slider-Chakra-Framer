import { Flex } from "@chakra-ui/layout";
import React from "react";
import dynamic from "next/dynamic";

const Home = () => {
  //used to prevent warning with styles dismatch in Client and Server side
  const NoSSRAliceCarousel = dynamic(
    () => import("../components/AliceCarousel") as any,
    {
      ssr: false,
    }
  );

  return (
    <Flex mt="30px">
      <NoSSRAliceCarousel />
    </Flex>
  );
};

export default Home;
