import { useState } from "react";

import SearchIcon from "@img/icon-search.svg";
import * as Styled from "./SearchBar.styled";

const SearchBar = () => {
  const [input, setInput] = useState("");

  const handleInput = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <Styled.Form onSubmit={handleSubmit}>
      <Styled.Input type='text' size={10} value={input} onChange={handleInput} />
      <Styled.SubmitBtn type='submit'>
        <img src={SearchIcon} alt='search' />
      </Styled.SubmitBtn>
    </Styled.Form>
  );
};

export default SearchBar;
