import { cn } from "@/utils";
import { Github, Linkedin, Mail } from "lucide-react";
import localFont from "next/font/local";
import { Dispatch, SetStateAction } from "react";

const akira = localFont({
  src: "../pages/fonts/Akira.otf",
});

const Header = ({
  mounted,
  setSidebarActive,
}: {
  mounted: boolean;
  setSidebarActive: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <>
      <div
        id="header"
        className="relative flex items-center justify-between px-2 py-2 text-primary md:px-6"
      >
        <div className="flex items-center gap-2">
          <a
            target="_blank"
            href="http://www.linkedin.com/in/hasan-ali-software-developer"
          >
            <Linkedin className="h-8 w-8 rounded-lg border-primary p-1 transition-colors hover:bg-primary/20 md:h-9 md:w-9" />
          </a>
          <a
            target="_blank"
            href="https://github.com/hasan-ali101?tab=overview&from=2024-12-01&to=2024-12-02"
          >
            <Github className="h-8 w-8 rounded-lg border-primary p-1 transition-colors hover:bg-primary/20 md:h-9 md:w-9" />
          </a>
        </div>

        <Mail
          className="h-8 w-8 cursor-pointer rounded-lg border-primary p-1 transition-colors hover:bg-primary/20 md:h-9 md:w-9"
          onClick={() => {
            setSidebarActive(true);
          }}
        />
      </div>
      <div
        id="haes"
        className={cn(
          mounted ? "py-2 md:py-4" : "py-1 md:py-2",
          akira.className,
          `items flex w-full items-center justify-between border-y border-y-secondary text-center transition-all duration-700`,
        )}
      >
        <div className="mx-3 flex flex-1 items-center md:gap-x-1">
          <div className="ml-2 flex-1 border-t-[0.5px] border-secondary md:ml-8 lg:ml-12" />
        </div>
        <h1 className="text-center text-4xl text-primary md:mx-2 md:text-5xl lg:text-6xl">
          STUDIO HAES
        </h1>
        <div className="mx-3 flex flex-1 items-center md:gap-x-1">
          <div className="mr-2 flex-1 border-t-[0.5px] border-secondary md:ml-8 lg:mr-12" />
        </div>
      </div>
    </>
  );
};

export default Header;
