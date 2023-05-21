import React from "react"
import { Button, useMediaQuery } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

type LoginButtonProps = {
  onOpen: () => void
};

function LoginButton({ onOpen }: LoginButtonProps) {
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
}

export default LoginButton;