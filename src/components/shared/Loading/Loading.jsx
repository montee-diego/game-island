import { motion } from "framer-motion";

import { loaderAnim1, loaderAnim2, loaderAnim3 } from "@utils/Animations";
import * as Styled from "./Loading.styled";

export const Loading = () => {
  return (
    <div>
      <Styled.Loader>
        <Styled.Elements>
          <motion.div variants={loaderAnim1} initial='from' animate='to'></motion.div>
          <motion.div variants={loaderAnim2} initial='from' animate='to'></motion.div>
          <motion.div variants={loaderAnim2} initial='from' animate='to'></motion.div>
          <motion.div variants={loaderAnim3} initial='from' animate='to'></motion.div>
        </Styled.Elements>
      </Styled.Loader>
    </div>
  );
};
