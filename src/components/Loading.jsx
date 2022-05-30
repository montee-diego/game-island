import { default as styled } from "styled-components";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div>
      <Loader>
        <Elements>
          <motion.div
            variants={loaderAnim1}
            initial='from'
            animate='to'></motion.div>
          <motion.div
            variants={loaderAnim2}
            initial='from'
            animate='to'></motion.div>
          <motion.div
            variants={loaderAnim2}
            initial='from'
            animate='to'></motion.div>
          <motion.div
            variants={loaderAnim3}
            initial='from'
            animate='to'></motion.div>
        </Elements>
      </Loader>
    </div>
  );
};

const loaderAnim1 = {
  from: {
    scale: 0,
  },
  to: {
    scale: 1,
    transition: {
      repeat: Infinity,
      duration: 0.6,
    },
  },
};

const loaderAnim2 = {
  from: {
    x: 0,
  },
  to: {
    x: 24,
    transition: {
      repeat: Infinity,
      duration: 0.6,
    },
  },
};

const loaderAnim3 = {
  from: {
    scale: 1,
  },
  to: {
    scale: 0,
    transition: {
      repeat: Infinity,
      duration: 0.6,
    },
  },
};

const Loader = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0rem;
`;

const Elements = styled.div`
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
    background: #c1c6cf;
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

export default Loading;
