export const loaderAnim1 = {
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

export const loaderAnim2 = {
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

export const loaderAnim3 = {
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
