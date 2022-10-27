import { default as styled } from "styled-components";
import { motion } from "framer-motion";

import { lineAnim } from "@utils/Animations";

const Line = () => {
  return <StyledLine variants={lineAnim} initial='hidden' animate='show' />;
};

const StyledLine = styled(motion.div)`
  height: 0.3rem;
  background-color: #3f4a5e;
`;

export default Line;
