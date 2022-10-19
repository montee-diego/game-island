export const lineAnim = {
  hidden: {
    width: "0%",
  },
  show: {
    width: "100%",
    transition: {
      duration: 1,
    },
  },
};

export const cardHoverAnim = {
  hidden: {
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)",
    scale: 1,
  },
  show: {
    boxShadow: "0px 2px 15px rgba(0, 0, 0, 0.5)",
    scale: 1.05,
    transition: {
      duration: 0.25,
    },
  },
};

export const gridAnim = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};
