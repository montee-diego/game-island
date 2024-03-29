import { useTitle } from "@utils/useTitle";

import Image from "@img/icon.svg";
import * as Styled from "./PageNotFound.styled";

export const PageNotFound = () => {
  useTitle("Page not found");

  return (
    <Styled.Section>
      <Styled.Container>
        <Styled.Icon src={Image} alt='Game Island' />
        <h1>This island looks deserted!</h1>
        <Styled.StyledLink to='/'>Go Back</Styled.StyledLink>
      </Styled.Container>
    </Styled.Section>
  );
};
