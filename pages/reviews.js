import Head from "next/head";
import { Box, Heading } from "@chakra-ui/react";

export default function ReviewsPage() {
  return (
    <Box>
      <Head>
        <title>MERSE.com Reviews</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Heading size="2xl">Reviews</Heading>
    </Box>
  );
}
