import { default as styled } from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 1.5rem;
  margin: 1rem 0rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
