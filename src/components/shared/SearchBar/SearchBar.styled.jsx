import { default as styled } from "styled-components";

export const Form = styled.form`
  display: flex;
  flex: 1;
`;

export const Input = styled.input`
  flex: 1;
`;

export const SubmitBtn = styled.button`
  background-color: #3f4a5e;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-left: none;
  border-radius: 0rem 0.5rem 0.5rem 0rem;
  padding: 0.5rem;
  cursor: pointer;
  transition: background-color 0.25s ease;

  &:hover {
    background-color: #505e79;
  }

  img {
    width: 1rem;
  }
`;
