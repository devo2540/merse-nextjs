import React from "react";
import Link from "next/link";
import {
  Input,
  InputGroup,
  InputRightElement,
  Flex,
  Image,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";

export const Header = () => (
  <Flex
    w="100%"
    height="28"
    borderBottomColor="gray.300"
    borderBottomWidth="1px"
    display="flex"
    flexDirection="row"
    alignItems="center"
    justifyContent="space-between"
    paddingX="14"
  >
    <Flex w="25%" alignItems="center" justifyContent="space-between">
      <Link href="/">
        <ChakraLink>
          <Image src="https://via.placeholder.com/150x50" alt="Site Logo" />
        </ChakraLink>
      </Link>

      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Products
        </MenuButton>
        <MenuList>
          <Link href="/products/pre-mersing">
            <MenuItem>Pre-Mersing</MenuItem>
          </Link>

          <Link href="/products/mersing-student">
            <MenuItem>Mersing Student</MenuItem>
          </Link>

          <Link href="/products/mclex-prep">
            <MenuItem>MCLEX Prep</MenuItem>
          </Link>

          <Link href="/products/new-grad">
            <MenuItem>New Grad</MenuItem>
          </Link>
        </MenuList>
      </Menu>

      <Link href="/courses">
        <ChakraLink>Courses</ChakraLink>
      </Link>
    </Flex>

    <Flex w="40%" alignItems="center" justifyContent="space-between">
      <InputGroup w="45%">
        <Input placeholder="Search" />
        <InputRightElement children={<SearchIcon />} />
      </InputGroup>

      <Link href="/reviews">
        <ChakraLink>Reviews</ChakraLink>
      </Link>

      <Link href="/login">
        <ChakraLink>Login</ChakraLink>
      </Link>

      <Link href="/sign-up">
        <ChakraLink>Sign Up</ChakraLink>
      </Link>
    </Flex>
  </Flex>
);
