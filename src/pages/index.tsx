import localFont from "next/font/local";
import { Github, Linkedin, Plus } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const akira = localFont({
  src: "./fonts/Akira.otf",
});

export default function Home() {
  return (
    <div className="relative h-full w-full overflow-clip">
      <Image
        src="/starry-night.jpg"
        className="absolute z-0 h-full w-full min-w-[1000px] opacity-[0.08]"
        width={1000}
        height={1000}
        alt="-"
      />
      <div
        className={`sticky z-10 flex h-screen w-screen flex-col px-6 text-xl text-blue sm:px-12`}
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
              <Linkedin className="h-8 w-8 rounded-sm border-blue p-1 hover:bg-white/10 md:h-8 md:w-8" />
            </a>
            <a
              target="_blank"
              href="https://github.com/hasan-ali101?tab=overview&from=2024-12-01&to=2024-12-02"
            >
              <Github className="h-8 w-8 border-blue p-1 hover:bg-white/10 md:h-8 md:w-8" />
            </a>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold sm:text-sm md:gap-3 md:text-base">
            <button className="rounded-xl border border-blue p-1 px-3 hover:bg-white/10">
              Contact
            </button>
            <button className="rounded-xl border border-blue p-1 px-3 hover:bg-white/10">
              CV
            </button>
          </div>
        </div>

        <div
          id="haes"
          className={`${akira.className} items flex w-full items-center justify-between border-y border-y-beige py-1 text-center text-3xl sm:py-4 sm:text-4xl sm:tracking-wider`}
        >
          <div className="mx-3 flex flex-1 items-center gap-1">
            <div className="ml-2 flex-1 border-t-[0.5px] border-beige md:ml-12" />
          </div>{" "}
          <h1 className="md:mx-2">STUDIO HAES</h1>
          <div className="mx-3 flex flex-1 items-center gap-1">
            <div className="mr-2 flex-1 border-t-[0.5px] border-beige md:mr-12" />
          </div>
        </div>

        <div id="body" className="w-full flex-1"></div>

        <div id="footer" className="h-20 w-full border-t border-beige"></div>
      </div>
    </div>
  );
}
