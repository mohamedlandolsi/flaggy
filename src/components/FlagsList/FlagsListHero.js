import * as React from "react";
import {
  Container,
  Heading,
  Stack,
  HStack,
  Text,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const FlagsListHero = () => {
  return (
    <Container maxW="7xl" p={4}>
      <Stack direction="column" spacing={6} alignItems="center" mt={8} mb={16}>
        <Heading
          as="h1"
          fontSize="4xl"
          fontWeight="bold"
          textAlign="center"
          maxW="600px"
        >
          Countries Flags
        </Heading>
        <Text maxW="500px" fontSize="lg" textAlign="center" color="gray.500">
          Guess the country by its flag!
        </Text>
        <HStack spacing={5}>
          <Link to="/flags-quiz">
            <Button colorScheme="teal" variant="solid" rounded="md" size="lg">
              Play The Quiz
            </Button>
          </Link>
        </HStack>
      </Stack>
    </Container>
  );
};

export default FlagsListHero;
