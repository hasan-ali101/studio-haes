import { motion } from "motion/react";

import { overlay } from "@/animations";
import { cn } from "@/utils";

const Overlay = ({
  onClick,
  className,
}: {
  onClick: () => void;
  className?: string;
}) => {
  return (
    <motion.div
      variants={overlay}
      initial="initial"
      animate="animate"
      exit="exit"
      id="overlay"
      className={cn(
        "absolute bottom-0 left-0 right-0 top-0 z-20 cursor-pointer bg-black/60",
        className,
      )}
      onClick={onClick}
    />
  );
};

export default Overlay;
