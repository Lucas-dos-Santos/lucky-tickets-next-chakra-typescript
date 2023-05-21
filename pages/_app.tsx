import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme, Box } from "@chakra-ui/react";
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'

export default function App({ Component, pageProps }: AppProps) {
  const theme = extendTheme({
    fonts: {
      body: 'roboto, sans-serif'
    }
  })

  return (
    <ThirdwebProvider desiredChainId={ChainId.BinanceSmartChainTestNet}>
      <ChakraProvider theme={theme}>
        <Box bg='black' w='100vw' h='100vh'>
          <Component {...pageProps} />
        </Box>
      </ChakraProvider>
    </ThirdwebProvider>
  );
}
