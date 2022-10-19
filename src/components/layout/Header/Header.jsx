import { useState } from "react";

import { Logo, SearchBar, Navbar } from "@components";

import * as Styled from "./Header.styled";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <Styled.Container>
      <Styled.Content>
        <Logo />

        <Styled.NavbarBtn onMouseDown={() => setIsNavOpen(!isNavOpen)}>Menu</Styled.NavbarBtn>

        <SearchBar />
      </Styled.Content>

      {isNavOpen && <Navbar />}
    </Styled.Container>
  );
};

export default Header;
