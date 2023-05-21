import React from "react"
import {
  Menu,
  HStack,
  Button,
  MenuList,
  MenuItem,
  MenuButton,
  useMediaQuery,
} from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";

function AdminsControl() {
  const [isLargeThan1650] = useMediaQuery("(min-width: 1650px)")

  return (
    <HStack>
      {isLargeThan1650 ? (
        <>
          <Button>Sacar x BNB</Button>
          <Button>Sortear ganhador</Button>
          <Button>Reiniciar Sorteio</Button>
        </>
      ) : (
        <Menu>
          <MenuButton
            as={Button}
            size={["sm", "sm", "sm", "md", "md", "lg"]}
            rightIcon={<FaChevronDown />}
          >
            Ações
          </MenuButton>
          <MenuList>
            <MenuItem>Sacar x BNB</MenuItem>
            <MenuItem>Sortear ganhador</MenuItem>
            <MenuItem>Reiniciar Sorteio</MenuItem>
          </MenuList>
        </Menu>
      )}
    </HStack>
  );
}

export default AdminsControl;