import React from "react"
import { Button, useMediaQuery } from "@chakra-ui/react";
import { FaCoins, FaTicketAlt } from "react-icons/fa";

type TicketButtonProps = {
  onOpen: () => void
}

function TicketsButton({ onOpen }: TicketButtonProps) {
  const [isLargeThan780] = useMediaQuery("(min-width: 780px)");
  const winnings = 0.5;
  const buttonText = isLargeThan780 ? `Sacar ${winnings} BNB` : "Sacar";

  return (
    <Button
      colorScheme="yellow"
      size={["sm", "sm", "sm", "md", "md", "lg"]}
      onClick={winnings ? onOpen : () => {}}
      leftIcon={winnings > 0 ? <FaCoins /> : <FaTicketAlt />}
    >
      {winnings > 0 ? buttonText : 10}
    </Button>
  );
}

export default TicketsButton;