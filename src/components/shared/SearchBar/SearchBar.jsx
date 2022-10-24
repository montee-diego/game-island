import { useState } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";

import SearchIcon from "@img/icon-search.svg";
import * as Styled from "./SearchBar.styled";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleInput = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    e.target[0].blur();

    let params = createSearchParams({ query: input });

    navigate({ pathname: "/search", search: `?${params}` });
    setInput("");
  };

  return (
    <Styled.Form onSubmit={handleSubmit}>
      <Styled.Input type='text' size={10} value={input} onChange={handleInput} />
      <Styled.SubmitBtn type='submit' aria-label='Search'>
        <img src={SearchIcon} alt='search' />
      </Styled.SubmitBtn>
    </Styled.Form>
  );
};

export default SearchBar;
