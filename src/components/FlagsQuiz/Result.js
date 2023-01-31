import { Button, Center, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function Result({
  gameOver,
  score,
  numberOfAnswers,
  answerIsCorrect,
}) {
  return (
    <>
      {gameOver && (
        <Text as="b" fontSize="3xl">
          <Center>Quiz is done!</Center>
          You guessed {score} flags out of {numberOfAnswers}.
        </Text>
      )}
      <Text as="b" fontSize="5xl" pt={10}>
        Score: {score}/{numberOfAnswers}
      </Text>
      {!gameOver && (
        <Text fontSize="2xl">
          {answerIsCorrect ? "Correct Answer !" : "Incorrect Answer !"}
        </Text>
      )}
      {gameOver && (
        <Link to="/">
          <Button colorScheme="teal">Return to the Home Page</Button>
        </Link>
      )}
    </>
  );
}
