import { default as styled } from "styled-components";

export const Section = styled.div`
  display: flex;
  margin: 1rem 0rem;
  align-items: center;
`;

export const Button = styled.button`
  padding: 0.5rem;
  background-color: ${props => props.theme.button.bg};
  color: ${props => props.theme.text.normal};
  border: none;
  border-radius: 0.2rem;
  cursor: pointer;
  transition: all 0.25s ease;
  margin-left: 0.5rem;
  font-size: 1rem;

  &:hover {
    background-color: ${props => props.theme.button.hover};
    color: ${props => props.theme.text.active};
  }
`;
