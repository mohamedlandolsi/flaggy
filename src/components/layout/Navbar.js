import React from "react";
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import ColorModeToggle from "./ColorModeToggle";
import { Link } from "react-router-dom";

export default function Navbar() {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();

  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w="full"
        px={{
          base: 2,
          sm: 4,
        }}
        py={4}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <chakra.a
              href="/"
              title="Flaggy Home Page"
              display="flex"
              alignItems="center"
            >
              <VisuallyHidden>Flaggy</VisuallyHidden>
            </chakra.a>
            <Link to="/">
              <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
                Flaggy
              </chakra.h1>
            </Link>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{
                base: "none",
                md: "inline-flex",
              }}
            >
              <Link to="/">
                <Button variant="ghost">Home</Button>
              </Link>
              <Link to="/flags-quiz">
                <Button variant="ghost">Quiz</Button>
              </Link>
              <ColorModeToggle />
            </HStack>
            <Box
              display={{
                base: "inline-flex",
                md: "none",
              }}
            >
              <IconButton
                display={{
                  base: "flex",
                  md: "none",
                }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{
                  color: "inherit",
                }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />
                <Link to="/">
                  <Button w="full" variant="ghost">
                    Home
                  </Button>
                </Link>
                <Link to="/flags-quiz">
                  <Button w="full" variant="ghost">
                    Quiz
                  </Button>
                </Link>
                <ColorModeToggle />
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
}
