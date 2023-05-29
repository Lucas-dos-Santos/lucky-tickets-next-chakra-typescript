import React, { useState } from "react"
import { Button, useMediaQuery, IconButton } from "@chakra-ui/react";
import { useDisconnect } from "@thirdweb-dev/react";
import { FaArrowRight, FaWallet } from "react-icons/fa";

type LoginButtonProps = {
  address: string | undefined,
  onOpen: () => void
};

function LoginButton({ address, onOpen }: LoginButtonProps) {
  const disconnect = useDisconnect()
  const [hover, setHover] = useState(false)
  const [isLargeThan780] = useMediaQuery("(min-width: 780px)");

  if (isLargeThan780) {
    if (address) {
      return (
        <Button
          w="200px"
          onClick={disconnect}
          ml={[2, 2, 4, 4]}
          colorScheme="yellow"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          size={["sm", "sm", "sm", "md", "md", "lg"]}
          leftIcon={hover ? <FaArrowRight /> : <FaWallet />}
        >
          {hover
            ? "Clique para Sair"
            : `${address.substring(0, 5)}...${address.substring(
                address.length,
                address.length - 5
              )}`}
        </Button>
      );
    }
    return (
      <Button
        w="200px"
        onClick={onOpen}
        ml={[2, 2, 4, 4]}
        colorScheme="yellow"
        leftIcon={<FaArrowRight />}
        size={["sm", "sm", "sm", "md", "md", "lg"]}
      >
        Entrar
      </Button>
    );
  } else {
    if (address) {
      return (
        <IconButton
          ml={[2, 2, 4, 4]}
          aria-label="Logout"
          colorScheme="yellow"
          onClick={disconnect}
          icon={<FaWallet />}
          size={["sm", "sm", "sm", "md", "md", "lg"]}
        />
      )
    }

    return (
      <IconButton
        ml={[2, 2, 4, 4]}
        aria-label="Login"
        colorScheme="yellow"
        onClick={onOpen}
        icon={<FaArrowRight />}
        size={["sm", "sm", "sm", "md", "md", "lg"]}
      />
    );
  }
}

export default LoginButton;