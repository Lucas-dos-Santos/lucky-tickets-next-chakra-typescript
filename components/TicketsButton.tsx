import React from "react"
import { ethers } from 'ethers'
import { Button, useMediaQuery } from "@chakra-ui/react";
import { FaCoins, FaTicketAlt } from "react-icons/fa";

type TicketButtonProps = {
  onOpen: () => void;
  userTickets: number;
  winnings: number | undefined
};

function TicketsButton({ onOpen, userTickets, winnings = 0 }: TicketButtonProps) {
  const [isLargeThan780] = useMediaQuery("(min-width: 780px)");
  const buttonText = isLargeThan780 ? `Sacar ${ethers.utils.formatEther(winnings.toString())} BNB` : "Sacar";

  return (
    <Button
      bg='yellow.200'
      _hover={{ bg: 'yellow.300' }}
      _active={{ bg: 'yellow.400' }}
      size={["sm", "sm", "sm", "md", "md", "lg"]}
      onClick={winnings > 0 ? onOpen : () => {}}
      leftIcon={winnings > 0 ? <FaCoins /> : <FaTicketAlt />}
    >
      {winnings > 0 ? buttonText : userTickets}
    </Button>
  );
}

export default TicketsButton;