import localFont from "next/font/local";
import { Github, Linkedin, Plus } from "lucide-react";
import Link from "next/link";

const akira = localFont({
  src: "./fonts/Akira.otf",
});

export default function Home() {
  return (
    <div
      className={`z-10 flex h-screen w-screen flex-col px-6 text-xl text-blue sm:px-12`}
    >
      <div
        id="header"
        className="flex items-center justify-between px-2 pb-2 pt-4 md:px-6"
      >
        <div className="flex items-center gap-2">
          <a
            target="_blank"
            href="http://www.linkedin.com/in/hasan-ali-software-developer"
          >
            <Linkedin className="h-6 w-6 rounded-sm border border-blue p-1 hover:bg-white/10 md:h-8 md:w-8" />
          </a>
          <a href="https://github.com/hasan-ali101?tab=overview&from=2024-12-01&to=2024-12-02">
            <Github className="h-6 w-6 border border-blue p-1 md:h-8 md:w-8" />
          </a>
        </div>
        <div className="flex items-center gap-2 text-xs font-semibold sm:text-sm md:gap-3 md:text-base">
          <div className="border border-blue p-1">Contact</div>
          <div className="border border-blue p-1 px-2">CV</div>
        </div>
      </div>

      <div
        id="haes"
        className={`${akira.className} items flex w-full items-center justify-between border-y border-y-beige py-1 text-center text-2xl tracking-wider sm:py-4 sm:text-4xl`}
      >
        <div className="mx-3 flex flex-1 items-center gap-1">
          <Plus className="mx-2 h-5 w-5" />
          <div className="flex-1 border-t-[0.5px] border-beige" />
        </div>{" "}
        <h1 className="mx-2">STUDIO HAES</h1>
        <div className="mx-3 flex flex-1 items-center gap-1">
          <div className="flex-1 border-t-[0.5px] border-beige" />
          <Plus className="mx-2 h-5 w-5" />
        </div>
      </div>

      <div id="body" className="w-full flex-1"></div>

      <div id="footer" className="h-20 w-full border-t border-beige"></div>
    </div>
  );
}
