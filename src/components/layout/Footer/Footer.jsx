import * as Styled from "./Footer.styled";

const Footer = () => {
  return (
    <Styled.Container>
      <Styled.Content>
        <h3>Game Island &copy; 2022</h3>
        <p>|</p>
        <a href='https://rawg.io/' target='_blank'>
          Game data provided by RAWG.io
        </a>
      </Styled.Content>
    </Styled.Container>
  );
};

export default Footer;
