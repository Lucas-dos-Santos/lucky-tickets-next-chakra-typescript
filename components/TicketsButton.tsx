import React from "react"
import { Button, useMediaQuery } from "@chakra-ui/react";
import { FaCoins, FaTicketAlt } from "react-icons/fa";

function TicketsButton() {
  const [isLargeThan780] = useMediaQuery("(min-width: 780px)");
  const winnings = 0.5
  const buttonText = isLargeThan780 ? `Sacar ${winnings} BNB` : "Sacar"

  return (
    <Button
      size={["sm", "sm", "sm", "md", "md", "lg"]}
      leftIcon={winnings > 0 ? <FaCoins /> : <FaTicketAlt />}
      colorScheme="yellow"
    >
      {winnings > 0 ? buttonText : 10}
    </Button>
  );
}

export default TicketsButton;