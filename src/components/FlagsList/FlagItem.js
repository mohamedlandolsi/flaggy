import React from "react";
import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";

export default function FlagItem(props) {
  return (
    <Flex w="full" alignItems="center" justifyContent="center">
      <Box maxW="xs" mx="auto" rounded="lg" bg="gray.700" w={[200, 300, 400]}>
        <Box>
          <Image
            src={props.image}
            alt={props.name + "'s Flag"}
            w="full"
            rounded="lg"
          />
        </Box>
        <Box px={4} py={2} color="teal.50">
          <Center>
            <Text fontWeight="bold" fontSize="3xl" textTransform="uppercase">
              {props.name}
            </Text>
          </Center>
        </Box>
      </Box>
    </Flex>
  );
}
