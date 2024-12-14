import { motion } from "motion/react";

const Curve = () => {
  const initialPath = `M 128 0 L 128 ${window.innerHeight} Q-128 ${window.innerHeight / 2} 128 0`;
  const targetPath = `M 128 0 L 128 ${window.innerHeight} Q128 ${window.innerHeight / 2}  128 0`;

  const curve = {
    initial: { d: initialPath },
    animate: {
      d: targetPath,
      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <svg
      height="100%"
      width="100%"
      className="pointer-events-none absolute -left-32 top-0 h-full w-32"
    >
      <motion.path
        variants={curve}
        initial="initial"
        animate="animate"
        exit="exit"
        className="fill-background/80 stroke-background/80"
        d={initialPath}
      />
    </svg>
  );
};

export default Curve;
