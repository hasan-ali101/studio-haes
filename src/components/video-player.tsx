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

  const toggleVideoPlayback = () => {
    if (vidRef.current?.paused) {
      vidRef.current?.play();
    } else {
      vidRef.current?.pause();
    }
  };

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
      key={id}
      className={cn(
        !isExpanded && "max-h-80",
        "cursor-pointer rounded-sm transition-all",
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
export default VideoPlayer;
