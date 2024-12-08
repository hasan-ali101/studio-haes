import { SquareX } from "lucide-react";
import { motion } from "motion/react";
import { Dispatch, SetStateAction } from "react";

import { sideBar } from "@/animations";
import Overlay from "./overlay";
import Curve from "@/components/curve";

const SideBar = ({
  setSidebarActive,
}: {
  setSidebarActive: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <>
      <Overlay
        onClick={() => {
          setSidebarActive(false);
        }}
      />
      <motion.div
        variants={sideBar}
        initial="initial"
        animate="animate"
        exit="exit"
        className="absolute right-0 z-40 h-full w-2/3 bg-background/95 md:w-1/2"
      >
        <div className="relative flex h-full w-full px-8 pt-3">
          <Curve />

          <SquareX
            size={36}
            className="cursor-pointer text-blue"
            onClick={() => {
              setSidebarActive(false);
            }}
          />
        </div>
      </motion.div>
    </>
  );
};

export default SideBar;
