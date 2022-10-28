import { default as styled } from "styled-components";

export const Button = styled.button`
  display: block;
  width: 100%;
  padding: 0.5rem 0rem;
  background-color: ${props => props.theme.button.bg};
  color: ${props => props.theme.text.normal};
  border: none;
  border-radius: 0.2rem;
  cursor: pointer;
  transition: all 0.25s ease;
  margin-bottom: 1rem;

  &:hover {
    background-color: ${props => props.theme.button.hover};
    color: ${props => props.theme.text.active};
  }
`;
