import { default as styled } from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <h3>Game Island &copy; 2022</h3>
        <p>|</p>
        <a href='https://rawg.io/' target='_blank'>
          Game data provided by RAWG.io
        </a>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background-color: #1a1e25;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 0rem auto;
  min-height: 10vh;

  p {
    padding: 0rem 1rem;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;

    a {
      margin-top: 0.5rem;
    }

    p {
      display: none;
    }
  }
`;

export default Footer;
