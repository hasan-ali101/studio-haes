import { motion } from "motion/react";
import { video } from "@/animations";
import { Dispatch, SetStateAction, useRef } from "react";
import { cn } from "@/utils";

const VideoPlayer = ({
  url,
  id,
  isExpanded,
  setIsExpanded,
}: {
  url: string;
  id: string;
  isExpanded: boolean;
  setIsExpanded: Dispatch<SetStateAction<boolean>>;
}) => {
  const vidRef = useRef<HTMLVideoElement>(null);

  const expandVideo = () => {
    setIsExpanded(true);
  };

  return (
    <motion.video
      ref={vidRef}
      variants={video}
      initial="initial"
      animate="animate"
      exit="exit"
      playsInline
      key={id}
      className={cn(
        !isExpanded && "max-h-80 hover:scale-[102%]",
        "cursor-pointer rounded-sm border border-secondary/50 transition-all duration-300",
      )}
      autoPlay
      muted
      loop
      onClick={() => {
        expandVideo();
      }}
    >
      <source src={url} type="video/mp4" />
    </motion.video>
  );
};
export { VideoPlayer };
