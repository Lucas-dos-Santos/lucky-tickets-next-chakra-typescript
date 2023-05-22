import React from "react"
import {
  Text,
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
} from "@chakra-ui/react"
import { FaCoins } from "react-icons/fa";

type WinningModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

function WinningModal({ isOpen, onClose }: WinningModalProps) {
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
          <VStack align="start" spacing={6}>
            <Text fontSize={["xs", "sm", "md"]}>
              Nós estamos muito felizes em dizer que você foi o sortudo
              selecionado e vai receber x BNB!
            </Text>
            <Button
              w="full"
              colorScheme="yellow"
              leftIcon={<FaCoins />}
              size={["xs", "sm", "md", "lg"]}
            >
              Sacar X BNB
            </Button>
          </VStack>
        </ModalBody>
        <ModalFooter />
      </ModalContent>
    </Modal>
  );
}

export default WinningModal