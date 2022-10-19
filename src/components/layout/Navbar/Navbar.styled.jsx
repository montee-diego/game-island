import { NavLink } from "react-router-dom";
import { default as styled } from "styled-components";

export const Container = styled.nav`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
  margin: 0rem auto;
  width: 90%;
`;

export const Title = styled.span`
  display: block;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  font-weight: 700;
  padding: 0.5rem 0rem;
`;

export const List = styled.ul`
  padding: 0.5rem 0rem;
`;

export const Link = styled(NavLink)`
  line-height: 1.5rem;

  &.active {
    color: ${props => props.theme.text.active};
  }
`;
