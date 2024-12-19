import { cn } from "@/utils";
import { Github, Linkedin } from "lucide-react";
import localFont from "next/font/local";
import { useEffect, useState } from "react";

const akira = localFont({
  src: "../pages/fonts/Akira.otf",
});

const Header = () => {
  const [delayComplete, setDelayComplete] = useState(false);

  useEffect(() => {
    setDelayComplete(true);
  }, []);
  return (
    <>
      <div
        id="header"
        className="text-primary relative flex items-center justify-between px-2 py-2 md:px-6"
      >
        <div className="flex items-center gap-2">
          <a
            target="_blank"
            href="http://www.linkedin.com/in/hasan-ali-software-developer"
          >
            <Linkedin className="border-primary hover:bg-primary/20 h-8 w-8 rounded-lg p-1 transition-colors md:h-9 md:w-9" />
          </a>
          <a
            target="_blank"
            href="https://github.com/hasan-ali101?tab=overview&from=2024-12-01&to=2024-12-02"
          >
            <Github className="border-primary hover:bg-primary/20 h-8 w-8 rounded-lg p-1 transition-colors md:h-9 md:w-9" />
          </a>
        </div>
      </div>
      <div
        id="haes"
        className={cn(
          delayComplete ? "py-2 md:py-4" : "py-1 md:py-2",
          akira.className,
          `items border-y-secondary flex w-full items-center justify-between overflow-y-clip border-y text-center transition-all duration-700`,
        )}
      >
        <div className="mx-3 flex flex-1 items-center gap-1">
          <div className="border-secondary ml-2 flex-1 border-t-[0.5px] md:ml-8 lg:ml-12" />
        </div>
        <h1 className="text-primary text-center text-4xl md:mx-2 md:text-5xl lg:text-6xl">
          STUDIO HAES
        </h1>
        <div className="mx-3 flex flex-1 items-center gap-1">
          <div className="border-secondary mr-2 flex-1 border-t-[0.5px] md:ml-8 lg:mr-12" />
        </div>
      </div>
    </>
  );
};

export default Header;
