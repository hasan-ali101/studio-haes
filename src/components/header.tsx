import { Github, Linkedin } from "lucide-react";
import localFont from "next/font/local";

const akira = localFont({
  src: "../pages/fonts/Akira.otf",
});

const Header = () => {
  return (
    <div>
      <div
        id="header"
        className="flex items-center justify-between px-2 py-2 text-blue md:px-6"
      >
        <div className="flex items-center gap-2">
          <a
            target="_blank"
            href="http://www.linkedin.com/in/hasan-ali-software-developer"
          >
            <Linkedin className="h-8 w-8 rounded-lg border-blue p-1 transition-colors hover:bg-blue/20 md:h-9 md:w-9" />
          </a>
          <a
            target="_blank"
            href="https://github.com/hasan-ali101?tab=overview&from=2024-12-01&to=2024-12-02"
          >
            <Github className="h-8 w-8 rounded-lg border-blue p-1 transition-colors hover:bg-blue/20 md:h-9 md:w-9" />
          </a>
        </div>
        <div className="flex items-center gap-2 text-xs font-semibold sm:text-sm md:gap-3 md:text-base">
          <button className="rounded-sm border border-blue p-1 px-3 transition-colors hover:bg-blue/20">
            Contact
          </button>
          <button className="rounded-sm border border-blue p-1 px-3 transition-colors hover:bg-blue/20">
            CV
          </button>
        </div>
      </div>
      <div
        id="haes"
        className={`${akira.className} items flex w-full items-center justify-between border-y border-y-beige py-3 text-center text-4xl sm:py-4 sm:text-6xl`}
      >
        <div className="mx-3 flex flex-1 items-center gap-1">
          <div className="ml-2 flex-1 border-t-[0.5px] border-beige md:ml-12" />
        </div>
        <h1 className="text-blue md:mx-2">STUDIO HAES</h1>
        <div className="mx-3 flex flex-1 items-center gap-1">
          <div className="mr-2 flex-1 border-t-[0.5px] border-beige md:mr-12" />
        </div>
      </div>
    </div>
  );
};

export default Header;
