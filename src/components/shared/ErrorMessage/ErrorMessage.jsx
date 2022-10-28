import * as Styled from "./ErrorMessage.styled";

export const ErrorMessage = ({ action }) => {
  return (
    <Styled.Section>
      <p>Game over! Failed to fetch data.</p>
      <Styled.Button onClick={action}>Retry</Styled.Button>
    </Styled.Section>
  );
};
