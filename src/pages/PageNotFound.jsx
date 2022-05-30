import { Link } from "react-router-dom";
import { default as styled } from "styled-components";

import Image from "../img/icon.svg";

const PageNotFound = () => {
  return (
    <Section>
      <Container>
        <Icon src={Image} alt='Game Island' />
        <h1>This island looks deserted!</h1>
        <StyledLink to='/'>Go Back</StyledLink>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;
  flex: 1;
`;

const Icon = styled.img`
  width: 75%;
  max-width: 50vh;
  user-select: none;
  pointer-events: none;
`;

const StyledLink = styled(Link)`
  padding: 0.5rem 1rem;
  background-color: #3f4a5e;
  color: #c1c6cf;
  border: none;
  border-radius: 0.2rem;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background-color: #505e79;
  }
`;

export default PageNotFound;
