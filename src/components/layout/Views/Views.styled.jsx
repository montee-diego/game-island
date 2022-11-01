import { default as styled } from "styled-components";

export const Container = styled.main`
  flex: 1;
  margin: 5rem auto 0rem auto;
  width: 90%;

  @media screen and (max-width: 768px) {
    margin: 8rem auto 0rem auto;
    width: ${props => (props.isDetails ? "100%" : "90%")};
  }
`;
