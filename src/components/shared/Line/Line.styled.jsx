import { default as styled } from "styled-components";
import { motion } from "framer-motion";

export const MotionLine = styled(motion.div)`
  height: 0.3rem;
  background-color: ${props => props.theme.button.bg};
`;
