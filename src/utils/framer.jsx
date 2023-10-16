export const dropin = {
  hidden: {
    transform: "scale(0) rotate(720deg)",
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
  visible: {
    transform: " scale(1) rotate(0deg)",
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    transform: "scale(0) rotate(-720deg)",
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export const searchIn = {
  hidden: {
    transform: "scale(0.01)",
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
  visible: {
    transform: " scale(1)",
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    transform: "scale(0)",
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export const flip = {
  hidden: {
    transform: "translateY(100%)",
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
  visible: {
    transform: "translateY(0)",
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
  exit: {
    transform: "translateY(100%)",
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const slideUp = {
  hidden: {
    transform: "translateY(100%)",
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
  visible: {
    transform: "translateY(0)",
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
  exit: {
    transform: "translateY(100%)",
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const dropin1 = {
  hidden: {
    top: "40%",
    opacity: 0,
    transition: {
      delay: 0.5,
    },
  },
  visible: {
    top: "40%",
    opacity: 1,
    transition: {
      duration: 0.3,
      type: "spring",
      damping: 26,
      stiffness: 600,
    },
  },
  exit: {
    top: "0%",
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};
export const dropin2 = {
  hidden: {
    top: "100%",
    opacity: 0,
    visibility: "hidden",
  },
  visible: {
    top: "100%",
    opacity: 1,
    visibility: "visible",
  },
  exit: {
    top: "100%",
    opacity: 0,
  },
};
