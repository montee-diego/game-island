import { default as styled } from "styled-components";

const ErrorMessage = ({ action }) => {
  return (
    <Section>
      <p>Game over! Failed to fetch data.</p>
      <StyledButton onClick={action}>Retry</StyledButton>
    </Section>
  );
};

const Section = styled.div`
  display: flex;
  margin: 1rem 0rem;
  align-items: center;
`;

const StyledButton = styled.button`
  padding: 0.5rem;
  background-color: #3f4a5e;
  color: #c1c6cf;
  border: none;
  border-radius: 0.2rem;
  cursor: pointer;
  transition: all 0.25s ease;
  margin-left: 0.5rem;
  font-size: 1rem;

  &:hover {
    background-color: #505e79;
    color: white;
  }
`;

export default ErrorMessage;
