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
import {  } from "react-icons/fa";

type LoginModalProps = {
  isOpen: boolean,
  onClose: () => void
}

function LoginModal({ isOpen, onClose }: LoginModalProps) {
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
              size={["xs", "sm", "md", "lg"]}
              w="full"
              colorScheme="orange"
            >
              Metamask
            </Button>
            <Button size={["xs", "sm", "md", "lg"]} w="full" colorScheme="blue">
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