import { SearchIcon } from "@chakra-ui/icons";
import { IconButton, Input, HStack } from "@chakra-ui/react";
import React, { useRef } from "react";

export default function SearchBar(props) {
  const enteredSearchValueRef = useRef();

  const searchFlagHandler = (event) => {
    event.preventDefault();

    const searchValue = enteredSearchValueRef.current.value;
    const searchResult = props.flags.filter(
      (flag) =>
        searchValue.toUpperCase() === flag.name.toUpperCase() ||
        searchValue.toUpperCase() === flag.iso2.toUpperCase() ||
        searchValue.toUpperCase() === flag.iso3.toUpperCase() ||
        searchValue.toUpperCase() === ""
    );

    props.onSearchFlag(searchResult);
  };

  return (
    <form onSubmit={searchFlagHandler}>
      <HStack>
        <Input
          placeholder="Search For A Country..."
          ref={enteredSearchValueRef}
        />
        <IconButton
          aria-label="Search database"
          icon={<SearchIcon />}
          type="submit"
        />
      </HStack>
    </form>
  );
}
