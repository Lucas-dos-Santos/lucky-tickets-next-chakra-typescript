import React from 'react'
import { Center, Progress, VStack } from "@chakra-ui/react";
import Logo from './Logo'

function Loading() {
  return (
    <Center w='full' h='full'>
      <VStack spacing={4}>
        <Logo />
        <Progress size='xs' w='full' isIndeterminate colorScheme='yellow'/>
      </VStack>  
    </Center>
  )
}

export default Loading