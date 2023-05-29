import React, { useState } from "react"
import {
  Text,
  Modal,
  VStack,
  Button,
  Heading,
  useToast,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalContent,
  ModalCloseButton
} from "@chakra-ui/react"
import { FaCoins } from "react-icons/fa";
import { ethers } from 'ethers';

type WinningModalProps = {
  isOpen: boolean;
  onClose: () => void;
  winnings: number | undefined
  withdrawWinnings: Function
};

function WinningModal({ isOpen, onClose, winnings, withdrawWinnings }: WinningModalProps) {
  const [loadingWithdraw, setLoadingWithdraw] = useState(false)
  const toast = useToast()

  const onWithdrawWinnings = async () => {
    setLoadingWithdraw(true)
    toast({
      status: "info",
      position: "bottom-right",
      description: "Retirando seu prêmio."
    })

    try {
      await withdrawWinnings([{}])

      toast({
        status: "success",
        position: "bottom-right",
        description: "O seu prêmio foi retirado com sucesso."
      })
    } catch {
      toast({
        status: "error",
        position: "bottom-right",
        description: "Um erro ocorreu ao tentar retirar seu prêmio, por favor tente novamente."
      })
    } finally {
      setLoadingWithdraw(false)
      onClose()
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={["xs", "sm", "md", "lg"]}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Heading fontSize={["md", "lg", "xl", "2xl"]}>
            Parabéns, você ganhou 🎉
          </Heading>
        </ModalHeader>
        <ModalCloseButton fontSize={["xs", "xs", "sm", "md"]} />
        <ModalBody>
          <VStack align="start" spacing={[4, 6]}>
            <Text fontSize={["xs", "sm", "md"]}>
              {`Nós estamos muito felizes em dizer que você foi o sortudo
              selecionado e vai receber ${winnings && ethers.utils.formatEther(winnings.toString())} BNB!`}
            </Text>
            <Button
              w="full"
              isLoading={loadingWithdraw}
              colorScheme="yellow"
              leftIcon={<FaCoins />}
              onClick={onWithdrawWinnings}
              size={["xs", "sm", "md", "lg"]}
            >
              {`Sacar ${winnings && ethers.utils.formatEther(winnings.toString())} BNB`}
            </Button>
          </VStack>
        </ModalBody>
        <ModalFooter />
      </ModalContent>
    </Modal>
  );
}

export default WinningModal