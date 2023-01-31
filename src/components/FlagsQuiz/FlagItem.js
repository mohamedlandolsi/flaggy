import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";

export default function FlagItem(props) {
  const flagPickedHandler = () => {
    props.onPickCheck(props.name);
  };

  return (
    <Flex w="full" alignItems="center" justifyContent="center">
      <Box
        as="button"
        maxW="xs"
        mx="auto"
        rounded="lg"
        bg="gray.700"
        w={[200, 300, 400]}
        onClick={flagPickedHandler}
      >
        <Image src={props.image} alt={props.image} rounded="lg" fit="contain" />
      </Box>
    </Flex>
  );
}
