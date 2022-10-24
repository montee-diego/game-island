import { default as styled } from "styled-components";

export const Container = styled.footer`
  background-color: #1a1e25;
`;

export const Content = styled.div`
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
