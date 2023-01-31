import {
  Box,
  Button,
  Container,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Quiz from "./Quiz";

export default function Main() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [numberOfRounds, setNumberOfRounds] = useState(5);

  const startQuizHandler = () => {
    setQuizStarted(true);
  };

  return (
    <>
      {!quizStarted && (
        <Container maxW="7xl" p={4}>
          <Stack
            direction="column"
            spacing={6}
            alignItems="center"
            mt={8}
            mb={16}
          >
            <Slider
              defaultValue={3}
              min={1}
              max={30}
              step={1}
              onChange={(val) => setNumberOfRounds(val)}
            >
              <SliderTrack bg="teal.100">
                <Box position="relative" right={10} />
                <SliderFilledTrack bg="teal.500" />
              </SliderTrack>
              <SliderThumb boxSize={6} />
            </Slider>

            <Button
              colorScheme="teal"
              variant="solid"
              rounded="md"
              size="lg"
              onClick={startQuizHandler}
            >
              PLAY {numberOfRounds} ROUNDS
            </Button>
          </Stack>
        </Container>
      )}

      {quizStarted && <Quiz numberOfRounds={numberOfRounds} />}
    </>
  );
}
