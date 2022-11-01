import { NavLink } from "react-router-dom";
import { default as styled } from "styled-components";

export const Link = styled(NavLink)`
  font-family: "Bungee Shade", cursive;
  font-size: 2.1rem;
  line-height: 2.1rem;
  transform: translateY(-3px);
  white-space: nowrap;

  @media screen and (max-width: 512px) {
    font-size: 1.7rem;
    line-height: 1.7rem;
  }
`;
