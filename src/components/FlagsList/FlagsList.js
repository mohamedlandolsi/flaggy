import React, { useEffect, useState } from "react";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  Center,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import FlagItem from "./FlagItem";
import FlagsListHero from "./FlagsListHero";
import SearchBar from "./SearchBar";

const itemsPerLoad = 25;

export default function FlagsList() {
  const [flags, setFlags] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSearched, setIsSearched] = useState(false);
  const [failedSearch, setFailedSearch] = useState(false);
  const [displayedFlags, setDisplayedFlags] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://countriesnow.space/api/v0.1/countries/flag/images")
      .then((response) => response.json())
      .then((data) => setFlags(data.data))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    setDisplayedFlags(flags.slice(0, itemsPerLoad));
  }, [flags]);

  const handleLoadMore = () => {
    const nextFlags = flags.slice(
      displayedFlags.length,
      displayedFlags.length + itemsPerLoad
    );
    setDisplayedFlags([...displayedFlags, ...nextFlags]);
  };

  const searchFlagHandler = (searchResult) => {
    if (searchResult.length === 0) {
      setIsSearched(false);
      setFailedSearch(true);
    } else {
      setIsSearched(searchResult);
    }
  };

  return (
    <>
      <FlagsListHero />
      <Center>
        <SearchBar flags={flags} onSearchFlag={searchFlagHandler} />
      </Center>
      <Center>
        <SimpleGrid py={20} w="75%" spacing={5} minChildWidth="240px">
          {isLoading && (
            <Center>
              <Spinner size="xl" />
            </Center>
          )}
          {!isLoading &&
            !isSearched &&
            !failedSearch &&
            displayedFlags.map((flag) => {
              return (
                <FlagItem
                  key={flag.name}
                  name={flag.name}
                  image={flag.flag}
                  iso3={flag.iso3}
                />
              );
            })}
          {!isLoading &&
            isSearched &&
            isSearched.map((flag) => {
              return (
                <FlagItem
                  key={flag.name}
                  name={flag.name}
                  image={flag.flag}
                  iso3={flag.iso3}
                />
              );
            })}
          {!isLoading && !isSearched && failedSearch && (
            <Alert
              status="error"
              variant="subtle"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              height="200px"
            >
              <AlertIcon boxSize="40px" mr={0} />
              <AlertTitle mt={4} mb={1} fontSize="lg">
                There are no countries flags matching your search.
              </AlertTitle>
              <AlertDescription maxWidth="sm">
                Please search for a country's full name or ISO-2 or ISO-3
              </AlertDescription>
            </Alert>
          )}
        </SimpleGrid>
      </Center>
      {displayedFlags.length < flags.length && (
        <Center mb={100}>
          <Button onClick={handleLoadMore}>Load More</Button>
        </Center>
      )}
    </>
  );
}
