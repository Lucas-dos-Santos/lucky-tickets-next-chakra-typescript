import React from 'react'
import { Flex, useDisclosure } from "@chakra-ui/react"
import {
  Logo,
  LoginModal,
  LoginButton,
  AdminsControl,
  TicketsButton
} from "../components";

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex
      h={24}
      w="full"
      bg="blackAlpha.900"
      align="center"
      justify="space-between"
      px={[4, 8, 26, 32, 60, 60]}
      borderBottom="2px"
      borderColor="gray.900"
    >
      <Logo />
      <Flex>
        <AdminsControl />
        <TicketsButton />
        <LoginButton onOpen={onOpen} />
      </Flex>
      <LoginModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
}

export default Header