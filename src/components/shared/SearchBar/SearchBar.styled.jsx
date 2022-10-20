import { default as styled } from "styled-components";

export const Form = styled.form`
  background-color: #232933;
  border: 1px solid rgba(164, 198, 255, 0.15);
  border-radius: 3px;
  display: flex;
  flex: 1;

  &:focus-within {
    border: 1px solid rgba(164, 198, 255, 0.25);
  }
`;

export const Input = styled.input`
  background-color: transparent;
  border: none;
  color: ${props => props.theme.text.normal};
  flex: 1;
  outline: none;
  padding: 0.5rem 0.7rem;
`;

export const SubmitBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5rem 0.7rem;

  img {
    width: 1rem;
  }
`;
