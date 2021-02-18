import Head from "next/head";
import { Box, Heading } from "@chakra-ui/react";

export default function LoginPage() {
  return (
    <Box>
      <Head>
        <title>MERSE.com Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Heading size="2xl">Login</Heading>
    </Box>
  );
}
