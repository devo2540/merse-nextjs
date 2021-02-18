import Head from "next/head";
import { Box, Heading } from "@chakra-ui/react";

export default function Courses() {
  return (
    <Box>
      <Head>
        <title>MERSE.com Courses</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Heading size="2xl">Courses Page</Heading>
    </Box>
  );
}
