import React, { useState } from 'react'
import { ethers } from "ethers";
import Marquee from 'react-fast-marquee'
import {
  Flex,
  Text,
  Badge,
  Button,
  VStack,
  HStack,
  Heading,
  useToast,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper
} from "@chakra-ui/react";
import Countdown from './Countdown';

type MainContentProps = {
  lotteryOperator: string | undefined;
  address: string | undefined;
  currentWinningReward: string | undefined;
  ticketPrice: string | undefined;
  expiration: number | undefined;
  tickets: string[] | undefined;
  lastWinner: string | undefined;
  lastWinnerAmount: string | undefined;
  totalWallets: string[];
  buyTickets: Function;
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
  const [quantity, setQuantity] = useState(1);
  const [loadingBuy, setLoadingBuy] = useState(false);
  const toast = useToast()

  const onBuyTickets = async () => {
    if (!ticketPrice) return

    if (!address) {
      if (!toast.isActive('buy-without-address')) {
        toast({
          id: 'buy-without-address',
          status: 'info',
          position: 'bottom-right',
          description: 'Para comprar tickets você precisa entrar com sua carteira primeiro.'
        })
      }
      return
    }

    setLoadingBuy(true)
    toast({
      status: 'info',
      position: 'bottom-right',
      description: 'Comprando ticket(s).'
    })

    try {
      await buyTickets([{
        value: ethers.utils.parseEther(
          String(
            Number(ethers.utils.formatEther(String(ticketPrice))) * quantity
          )
        )
      }])

      toast({
        status: 'success',
        position: 'bottom-right',
        description: 'Tickets comprados com sucesso.'
      })
    } catch {
      toast({
        status: 'error',
        position: 'bottom-right',
        description: 'Um erro aconteceu ao tentar comprar ticket(s), por favor tente novamente.'
      })
    } finally {
      setLoadingBuy(false)
    }
  }

  return (
    <Flex
      align="center"
      pos="relative"
      overflow="auto"
      direction="column"
      h={[
        "calc(90vh - 100px)",
        "calc(90vh - 100px)",
        "calc(90vh - 100px)",
        "calc(90vh - 100px)",
        "calc(90vh - 100px)",
        "calc(100vh - 100px)",
        "calc(100vh - 100px)"
      ]}
      px={[4, 8, 26, 32, 40, 60, 60]}
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
        minH={['300px', "300px", "300px", "300px", "300px", "650px", "650px"]}
        mb={["0px", "180px", "300px", "420px", "0px"]}
        direction={["column", "column", "column", "column", "row", "row", "row"]}
      >
        <Flex
          justify="center"
          direction="column"
          mt={["14", "14", "14", "14", "0", "0", "0"]} 
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
                    .formatEther(String(currentWinningReward)))
                    .toFixed(3)}
              </Heading>
              <Heading
                color="yellow.400"
                fontSize={["5xl", "6xl", "7xl", "8xl"]}
              >
                BNB
              </Heading>
            </HStack>
            <Countdown expiration={Number(expiration)} />
          </VStack>

          <HStack mt='4'>
            <Badge colorScheme='yellow' fontSize={['10', 'xs', 'sm']}>Tickets vendidos: {tickets?.length}</Badge>
            <Badge colorScheme='yellow' fontSize={['10', 'xs', 'sm']}>Participantes: {totalWallets.length}</Badge>
          </HStack>
        </Flex>
        <Flex mt={["14", "14", "14", "14", "0", "0", "0"]} w={["full", "full", "full", "full", "full", "50%"]}>
          <VStack w='full' justify='center' align={['center', 'center', 'center', 'center', 'center', 'end']}>
            <VStack align='start' p='8' spacing='8' w={['full', 'full', 'full', 'full', 'full', '500px']} bg='#141414' borderRadius='md'>
              <Heading color="white" fontSize={["xl", "2xl", "3xl", "4xl"]}>Comprar Tickets</Heading>

              <VStack w='full' spacing='4' fontSize={['xs', 'sm', 'md', 'lg']}>
                <VStack w='full' spacing='4'>
                  <Flex w='full' color='white' justify='space-between'>
                    <Text>{ticketPrice && ethers.utils.formatEther(String(ticketPrice))}</Text>
                    <Text>BNB</Text>
                  </Flex>

                  <NumberInput size={['xs', 'sm', 'md', 'lg']} mt='2' w='full' defaultValue={1} min={1} value={quantity} onChange={value => setQuantity(Number(value))}>
                    <NumberInputField bg='white' />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </VStack>

                <HStack w='full' justify='space-between'>
                  <Button size={['xs', 'sm', 'sm']} variant='outline' colorScheme='yellow' w='full' onClick={() => setQuantity(5)}>x5</Button>
                  <Button size={['xs', 'sm', 'sm']} variant='outline' colorScheme='yellow' w='full' onClick={() => setQuantity(10)}>x10</Button>
                  <Button size={['xs', 'sm', 'sm']} variant='outline' colorScheme='yellow' w='full' onClick={() => setQuantity(50)}>x50</Button>
                  <Button size={['xs', 'sm', 'sm']} variant='outline' colorScheme='yellow' w='full' onClick={() => setQuantity(100)}>x100</Button>
                </HStack>

                <VStack w='full' spacing='1' color='white' fontSize={['xs', 'sm', 'md', 'lg']}>
                  <Flex w='full' justify='space-between' fontWeight='bold'>
                    <Text>Custo total dos tickets</Text>
                    <HStack spacing='1'>
                      <Text>{ticketPrice && (Number(ethers.utils.formatEther(String(ticketPrice))) * quantity).toFixed(2)}</Text>
                      <Text>BNB</Text>
                    </HStack>
                  </Flex>

                  <Flex w='full' justify='space-between'>
                    <Text>+ Taxas de rede</Text>
                    <Text>TBC</Text>
                  </Flex>

                  <Button
                    w='full'
                    colorScheme='yellow'
                    size={['xs', 'sm', 'md', 'lg']}
                    disabled={expiration && String(expiration) < String(Date.now()) || loadingBuy || address === lotteryOperator}
                    isLoading={loadingBuy}
                    onClick={onBuyTickets}
                  >
                    <HStack>
                      <Text>Comprar {quantity} ticket(s) por</Text>
                      <Text>{ticketPrice && (Number(ethers.utils.formatEther(String(ticketPrice))) * quantity).toFixed(2)}</Text>
                      <Text>BNB</Text>
                    </HStack>
                  </Button>
                </VStack>
              </VStack>
            </VStack>
          </VStack>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default MainContent;