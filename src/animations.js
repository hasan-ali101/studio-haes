export const sideBar = {
  initial: { x: "calc(100% + 100px)" },
  animate: {
    x: "15%",
    transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    x: "calc(100% + 100px)",
    transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] },
  },
};

export const overlay = {
  initial: { opacity: "0%" },
  animate: {
    opacity: "100%",
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    opacity: "0%",
    transition: { duration: 1.2 },
    ease: [0.76, 0, 0.24, 1],
  },
};