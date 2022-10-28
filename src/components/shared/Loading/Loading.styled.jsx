import { default as styled } from "styled-components";

export const Loader = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0rem;
`;

export const Elements = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 40px;

  div {
    position: absolute;
    top: 15px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: ${props => props.theme.text.normal};
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }

  div:nth-child(1) {
    left: 8px;
  }
  div:nth-child(2) {
    left: 8px;
  }
  div:nth-child(3) {
    left: 32px;
  }
  div:nth-child(4) {
    left: 56px;
  }
`;
