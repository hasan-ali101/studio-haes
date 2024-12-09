import localFont from "next/font/local";

import { cn } from "@/utils";

const akira = localFont({
  src: "../pages/fonts/Akira.otf",
});

const Footer = ({ delayComplete }: { delayComplete: boolean }) => {
  return (
    <div
      id="footer"
      className={cn(
        akira.className,
        delayComplete ? "h-20" : "h-16",
        "mt-auto line-clamp-1 flex w-full items-center border-t border-beige text-lg text-blue/60 transition-all duration-700 md:text-2xl",
      )}
    >
      <p className="line-clamp-1 overflow-x-auto">
        ANGELs CAN FLY BECAUSE THEY TAKE THESELVES LIGHTLY - JUST AS THE OCEAN
        WAVES, THE WORLD PEOPLES - ANGEL CAN FLY BECAUSE THEY TAKE
      </p>
    </div>
  );
};

export default Footer;
