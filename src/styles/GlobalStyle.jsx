import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    scrollbar-width: thin;
    scrollbar-color: ${props => props.theme.button.bg} ${props => props.theme.body.scroll_bg};

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background-color: ${props => props.theme.body.scroll_bg};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${props => props.theme.button.bg};
    }
  }

  body {
    background-color: ${props => props.theme.body.bg};
    color: ${props => props.theme.text.normal};
    font-family: 'Montserrat', sans-serif;
  }

  nav {
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 20;
  }

  h1 {
    font-size: 1.8rem;
    padding: 1rem 0rem;

    @media screen and (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

  h3 {
    font-size: 1rem;
  }

  h4 {
    font-size: 0.8rem;
    color: ${props => props.theme.text.secondary};
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.text.normal};
    transition: color 0.25s ease;

    &:hover {
      color: ${props => props.theme.text.active};
    }
  }

  p {
    line-height: 1.8rem;
  }

  img {
    display: block;
  }

  input {
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
  }

  button {
    font-family: 'Montserrat', sans-serif;
  }

  ul {
    list-style: none;
  }

  .App {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`;
