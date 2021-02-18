import { ChakraProvider } from "@chakra-ui/react";
import { Header } from "../components/layout/Header";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
