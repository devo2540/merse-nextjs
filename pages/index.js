import Head from "next/head";
import { flamelinkSdk } from "../firebaseConfig";
import { Box, Heading } from "@chakra-ui/react";

export default function Home({ homepage }) {
  console.log("Homepage content: ", homepage);

  return (
    <Box>
      <Head>
        <title>MERSE.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Heading size="2xl">{homepage.hero.heroHeading}</Heading>

      <Heading size="xl">{homepage.hero.heroBody}</Heading>
    </Box>
  );
}

export async function getStaticProps() {
  const homepage = await flamelinkSdk.content.get({
    schemaKey: "homepage",
  });

  return {
    props: {
      homepage,
    },
  };
}
