import { useState } from "react";

import { Logo, SearchBar, Navbar } from "@components";

import Menu from "@img/menu.svg";
import * as Styled from "./Header.styled";

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <Styled.Container onMouseLeave={() => setIsNavOpen(false)}>
      <Styled.Content>
        <Styled.Brand>
          <Styled.NavbarBtn onMouseDown={() => setIsNavOpen(!isNavOpen)} ariaLabel='Menu'>
            <img src={Menu} alt='=' />
          </Styled.NavbarBtn>
          <Logo />
        </Styled.Brand>

        <SearchBar />
      </Styled.Content>

      {isNavOpen && <Navbar setIsNavOpen={setIsNavOpen} />}
    </Styled.Container>
  );
};
