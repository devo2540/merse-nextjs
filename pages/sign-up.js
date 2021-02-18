import Head from "next/head";
import { Box, Heading } from "@chakra-ui/react";

export default function SignUpPage() {
  return (
    <Box>
      <Head>
        <title>MERSE.com Sign In</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Heading size="2xl">Sign In</Heading>
    </Box>
  );
}
