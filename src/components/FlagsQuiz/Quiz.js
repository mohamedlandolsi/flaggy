import {
  Button,
  Center,
  SimpleGrid,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import FlagItem from "./FlagItem";
import Result from "./Result";

export default function Quiz({ numberOfRounds }) {
  const [flags, setFlags] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showNextQuestionButton, setShowNextQuestionButton] = useState(true);
  const [numberOfAnswers, setNumberOfAnswers] = useState(0);
  const [answerIsCorrect, setAnswerIsCorrect] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://countriesnow.space/api/v0.1/countries/flag/images")
      .then((response) => response.json())
      .then((data) => setFlags(data.data))
      .finally(() => setIsLoading(false));
  }, []);

  let randomFourFlags = flags.sort(() => Math.random() - 0.5).slice(0, 4);

  let randomOneFlagIndex = Math.floor(Math.random() * randomFourFlags.length);
  let randomOneFlag = randomFourFlags[randomOneFlagIndex];

  const pickCheckHandler = (flagName) => {
    if (flagName === randomOneFlag.name) {
      setScore((prevScore) => prevScore + 1);
      setNumberOfAnswers((prevNumberOfAnswers) => prevNumberOfAnswers + 1);
      setAnswerIsCorrect(true);
      setShowResult(true);
    } else {
      setScore((prevScore) => prevScore);
      setNumberOfAnswers((prevNumberOfAnswers) => prevNumberOfAnswers + 1);
      setAnswerIsCorrect(false);
      setShowResult(true);
    }
    if (numberOfAnswers === numberOfRounds - 1) {
      setShowNextQuestionButton(false);
      setGameOver(true);
    }
  };

  const nextQuestionHandler = () => {
    setShowResult(false);
  };

  return (
    <Center my={30}>
      {showResult && (
        <VStack my={20}>
          <Result
            score={score}
            numberOfAnswers={numberOfAnswers}
            answerIsCorrect={answerIsCorrect}
            gameOver={gameOver}
          />{" "}
          {showNextQuestionButton && (
            <Button onClick={nextQuestionHandler} colorScheme="teal">
              Next Question
            </Button>
          )}
        </VStack>
      )}
      {!showResult && (
        <VStack>
          {!isLoading && (
            <Text as="b" fontSize="5xl">
              {randomOneFlag.name}
            </Text>
          )}
          <SimpleGrid py={20} w="75%" spacing={5} minChildWidth="240px">
            {isLoading && (
              <Center>
                <Spinner size="xl" />
              </Center>
            )}
            {!isLoading &&
              randomFourFlags.map((flag) => {
                return (
                  <FlagItem
                    key={flag.name}
                    name={flag.name}
                    image={flag.flag}
                    iso3={flag.iso3}
                    onPickCheck={pickCheckHandler}
                  />
                );
              })}
          </SimpleGrid>
        </VStack>
      )}
    </Center>
  );
}
