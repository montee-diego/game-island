import { default as styled } from "styled-components";

export const Container = styled.header`
  background-color: ${props => props.theme.header.bg};
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin: 0rem auto;
  height: 5rem;
  width: 90%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    gap: 0;
    height: 8rem;
  }
`;

export const Brand = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;

export const NavbarBtn = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.text.normal};
  cursor: pointer;
  font-size: 1rem;

  img {
    width: 1.2rem;
  }
`;
