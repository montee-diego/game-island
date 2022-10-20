import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    scrollbar-width: thin;
    scrollbar-color: #3f4a5e #1a1e25;

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background-color: #1a1e25;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #3f4a5e;
    }
  }

  body {
    background-color: #232933;
    color: #c1c6cf;
    font-family: 'Montserrat', sans-serif;
  }

  nav {
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 20;
  }

  section {
    width: 90%;
    margin: 0rem auto;
    flex-grow: 1;
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
    color: #959caa;
  }

  a {
    text-decoration: none;
    color: #c1c6cf;
    transition: color 0.25s ease;

    &:hover {
      color: white;
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
    /* font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    background-color: #3f4a5e;
    color: #c1c6cf;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 0.5rem 0rem 0rem 0.5rem;
    outline: none;
    padding: 0.6rem; */
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

export default GlobalStyle;
