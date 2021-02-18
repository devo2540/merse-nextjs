import Head from "next/head";
import { Box, Heading } from "@chakra-ui/react";

export default function NewGradPage() {
  return (
    <Box>
      <Head>
        <title>MERSE.com New Grad Course</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Heading size="2xl">New Grad Course</Heading>
    </Box>
  );
}
