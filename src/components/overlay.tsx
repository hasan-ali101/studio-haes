import { motion } from "motion/react";

import { overlay } from "@/animations";

const Overlay = ({ onClick }: { onClick: () => void }) => {
  return (
    <motion.div
      variants={overlay}
      initial="initial"
      animate="animate"
      exit="exit"
      id="overlay"
      className="absolute bottom-0 left-0 right-0 top-0 z-20 cursor-pointer bg-black/60"
      onClick={onClick}
    />
  );
};

export default Overlay;
