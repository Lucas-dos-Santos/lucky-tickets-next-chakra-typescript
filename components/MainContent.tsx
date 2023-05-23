import React, { useState } from 'react'
import { ethers } from "ethers";
import Marquee from 'react-fast-marquee'
import { Flex, VStack, HStack, Text, Heading } from "@chakra-ui/react";

type MainContentProps = {
  lotteryOperator: string | undefined;
  address: string | undefined;
  currentWinningReward: string | undefined;
  ticketPrice: string | undefined;
  expiration: string | undefined;
  tickets: string[] | undefined;
  lastWinner: string | undefined;
  lastWinnerAmount: string | undefined;
  totalWallets: string[];
  buyTickets: Function
};
function MainContent({
  lotteryOperator,
  address,
  currentWinningReward,
  ticketPrice,
  expiration,
  tickets,
  lastWinner,
  lastWinnerAmount,
  totalWallets,
  buyTickets
}: MainContentProps) {
  const [quantity, setQuantity] = useState();
  const [loadingBuy, setLoadingBuy] = useState();

  return (
    <Flex
      align="center"
      pos="relative"
      overflow="auto"
      direction="column"
      h="calc(100vh - 100px)"
      px={[4, 8, 26, 32, 60, 60]}
    >
      <Flex
        p={4}
        bg="#111"
        h="80px"
        zIndex={2}
        w="full"
        pos="fixed"
        bottom={0}
        borderTop="20px"
        borderTopColor="gray.900"
      >
        <Marquee gradient={false} speed={60}>
          <VStack spacing={1} align="start" color="white">
            <HStack spacing={1}>
              <Text fontSize={[10, "xs", "sm"]}>Ultimo Ganhador:</Text>
              <Text fontSize={[10, "xs", "sm"]}>{lastWinner}</Text>
            </HStack>
            <HStack spacing={1}>
              <Text fontSize={[10, "xs", "sm"]}>Quantidade:</Text>
              <Text fontSize={[10, "xs", "sm"]}>
                {lastWinnerAmount &&
                  ethers.utils.formatEther(lastWinnerAmount.toString())}
              </Text>
              <Text fontSize={[10, "xs", "sm"]}>BNB</Text>
            </HStack>
          </VStack>
        </Marquee>
      </Flex>
      <Flex
        w="full"
        h="full"
        minH="650px"
        mb={["120px", "180px", "300px", "420px", "120px"]}
        direction={["column", "column", "column", "column", "column", "row"]}
      >
        <Flex
          justify="center"
          direction="column"
          mt={["14", "14", "14", "14", "14", "0"]}
          w={["full", "full", "full", "full", "full", "50%"]}
          align={["center", "center", "center", "center", "center", "start"]}
        >
          <VStack
            w="full"
            bg="black"
            spacing={0}
            align={["center", "center", "center", "center", "center", "start"]}
          >
            <Heading color="white" fontSize={["3xl", "4xl", "5xl", "6xl"]}>
              Prêmio Final
            </Heading>
            <HStack spacing={[1, 2, 2, 4, 4, 4]} align="center">
              <Heading color="white" fontSize={["5xl", "6xl", "7xl", "8xl"]}>
                {currentWinningReward &&
                  Number(ethers.utils
                    .formatEther(currentWinningReward.toString()))
                    .toFixed(3)}
              </Heading>
              <Heading
                color="yellow.400"
                fontSize={["5xl", "6xl", "7xl", "8xl"]}
              >
                BNB
              </Heading>
            </HStack>
          </VStack>
        </Flex>
        <Flex></Flex>
      </Flex>
    </Flex>
  );
}

export default MainContent;