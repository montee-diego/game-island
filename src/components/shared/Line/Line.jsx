import { lineAnim } from "@utils/Animations";
import * as Styled from "./Line.styled";

export const Line = () => {
  return <Styled.MotionLine variants={lineAnim} initial='hidden' animate='show' />;
};
