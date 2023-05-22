import React from "react"
import {
  Modal,
  VStack,
  Button,
  Heading,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalContent,
  ModalCloseButton
} from "@chakra-ui/react";
import { useMetamask, useCoinbaseWallet } from "@thirdweb-dev/react";

type LoginModalProps = {
  isOpen: boolean,
  onClose: () => void
}

function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const connectWithMetamask = useMetamask()
  const connectWithCoinbase = useCoinbaseWallet()
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={["xs", "sm", "md", "lg"]}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Heading fontSize={["md", "lg", "xl", "2xl"]}>Entrar</Heading>
        </ModalHeader>
        <ModalCloseButton fontSize={["xs", "xs", "sm", "md"]} />
        <ModalBody>
          <VStack w="full">
            <Button
              w="full"
              colorScheme="orange"
              onClick={connectWithMetamask}
              size={["xs", "sm", "md", "lg"]}
            >
              Metamask
            </Button>
            <Button
              w="full"
              colorScheme="blue"
              onClick={connectWithCoinbase}
              size={["xs", "sm", "md", "lg"]}
            >
              Coinbase
            </Button>
          </VStack>
        </ModalBody>
        <ModalFooter />
      </ModalContent>
    </Modal>
  );
}

export default LoginModal;