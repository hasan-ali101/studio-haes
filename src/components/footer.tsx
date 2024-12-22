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
        "border-secondary text-primary/70 max-w-[100%] items-center overflow-hidden border-t text-xl transition-all duration-700",
      )}
    >
      <div className="animate-marquee inline-block overflow-hidden whitespace-nowrap lg:mt-6">
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
