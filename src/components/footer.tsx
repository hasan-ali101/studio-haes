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
        delayComplete ? "py-4" : "py-3",
        "max-w-[100%] items-center overflow-hidden border-t border-secondary text-xl text-primary/70 transition-all duration-700",
      )}
    >
      <div className="inline-block animate-marquee overflow-hidden whitespace-nowrap">
        <p className="inline-block">
          ANGELS CAN FLY BECAUSE THEY TAKE THEMSELVES LIGHTLY -&nbsp;
        </p>
        <p className="inline-block">
          JUST AS THE OCEAN WAVES THE UNIVERSE PEOPLES -&nbsp;
        </p>
        <p className="inline-block">
          ANGELS CAN FLY BECAUSE THEY TAKE THEMSELVES LIGHTLY -&nbsp;
        </p>
        <p className="inline-block">
          JUST AS THE OCEAN WAVES THE UNIVERSE PEOPLES -&nbsp;
        </p>
        <p className="inline-block">
          ANGELS CAN FLY BECAUSE THEY TAKE THEMSELVES LIGHTLY -&nbsp;
        </p>
        <p className="inline-block">
          JUST AS THE OCEAN WAVES THE UNIVERSE PEOPLES -&nbsp;
        </p>
        <p className="inline-block">
          ANGELS CAN FLY BECAUSE THEY TAKE THEMSELVES LIGHTLY -&nbsp;
        </p>
        <p className="inline-block">
          JUST AS THE OCEAN WAVES THE UNIVERSE PEOPLES -&nbsp;
        </p>
        <p className="inline-block">
          ANGELS CAN FLY BECAUSE THEY TAKE THEMSELVES LIGHTLY -&nbsp;
        </p>
        <p className="inline-block">
          JUST AS THE OCEAN WAVES THE UNIVERSE PEOPLES -&nbsp;
        </p>
      </div>
    </div>
  );
};

export default Footer;
