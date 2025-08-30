import localFont from "next/font/local";

import { cn } from "@/utils";

const akira = localFont({
  src: "../fonts/Akira.otf",
});

const quotes = [
  "THE VOICE OF A SPARROW IN A CYCLONE",
  "AS THE OCEAN WAVES THE UNIVERSE PEOPLES",
  "THEY FLY BECAUSE THEY TAKE THEMSELVES LIGHTLY",
  "THE VOICE OF A SPARROW IN A CYCLONE",
  "AS THE OCEAN WAVES THE UNIVERSE PEOPLES",
  "THEY FLY BECAUSE THEY TAKE THEMSELVES LIGHTLY",
  "THE VOICE OF A SPARROW IN A CYCLONE",
  "AS THE OCEAN WAVES THE UNIVERSE PEOPLES",
  "THEY FLY BECAUSE THEY TAKE THEMSELVES LIGHTLY",
];

const Footer = ({ delayComplete }: { delayComplete: boolean }) => {
  return (
    <div
      id="footer"
      className={cn(
        akira.className,
        delayComplete ? "py-6" : "py-3",
        "max-w-[100%] items-center overflow-hidden border-t border-secondary text-lg text-primary/70 transition-all duration-700 md:text-2xl",
      )}
    >
      <div className="inline-block animate-marquee overflow-hidden whitespace-nowrap">
        {quotes.map((quote, index) => (
          <p key={index} className="inline-block">
            {quote} -&nbsp;
          </p>
        ))}
      </div>
    </div>
  );
};

export default Footer;
