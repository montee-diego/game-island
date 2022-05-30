import { default as styled } from "styled-components";

const LoadButton = ({ action }) => {
  return <StyledButton onClick={action}>Load More</StyledButton>;
};

const StyledButton = styled.button`
  display: block;
  width: 100%;
  padding: 0.5rem 0rem;
  background-color: #3f4a5e;
  color: #c1c6cf;
  border: none;
  border-radius: 0.2rem;
  cursor: pointer;
  transition: all 0.25s ease;
  margin-bottom: 1rem;

  &:hover {
    background-color: #505e79;
    color: white;
  }
`;

export default LoadButton;
