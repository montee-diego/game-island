import { default as styled } from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  position: relative;
  overflow: hidden;

  a {
    display: block;
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
    line-height: 3rem;
    text-align: center;
  }
`;

export const Details = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 101%;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 0.5rem;
`;
