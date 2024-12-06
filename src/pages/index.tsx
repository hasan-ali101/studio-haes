import { useEffect, useState } from "react";
import localFont from "next/font/local";
import Image from "next/image";
import { Link, SquareX } from "lucide-react";
import { Archivo } from "next/font/google";
import { motion } from "motion/react";

import Header from "@/components/header";
import { projects } from "@/data";
import { cn } from "@/utils";

const akira = localFont({
  src: "../pages/fonts/Akira.otf",
});

const archivo = Archivo({ subsets: ["latin"], weight: "400" });

export default function Home() {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const [description, setDescription] = useState("video");
  const [delayComplete, setDelayComplete] = useState(false);
  const [sideBarActive, setSidebarActive] = useState(false);

  useEffect(() => {
    setDelayComplete(true);
  }, []);

  return (
    <div
      className={cn(
        archivo.className,
        "relative flex min-h-screen w-full flex-col overflow-clip bg-background text-white",
      )}
    >
      <Image
        src="/starry-night.jpg"
        className="absolute z-0 h-full w-full min-w-[1000px] opacity-[0.1]"
        width={1000}
        height={1000}
        alt="-"
      />

      <div className="absolute right-8 top-1 z-50 flex items-center text-lg font-semibold text-blue sm:right-10 md:right-14 md:top-2 md:gap-3 md:text-xl">
        <button
          className="rounded-sm border-blue p-2 transition-colors hover:bg-blue/20 md:px-3"
          onClick={() => {
            setSidebarActive(true);
          }}
        >
          Contact
        </button>
        <button
          className="rounded-sm border-blue p-2 transition-colors hover:bg-blue/20 md:px-3"
          onClick={() => {
            setSidebarActive(true);
          }}
        >
          CV
        </button>
      </div>
      {sideBarActive && (
        <>
          <div
            id="overlay"
            className="absolute bottom-0 left-0 right-0 top-0 z-20 cursor-pointer bg-black/60"
            onClick={() => {
              setSidebarActive(false);
            }}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "10%" }}
            exit={{ x: "100%" }}
            className="absolute right-0 z-40 h-full w-2/3 bg-background/95 px-8 pt-3 md:w-1/2 md:pt-4"
          >
            <SquareX
              size={30}
              className="cursor-pointer text-blue"
              onClick={() => {
                setSidebarActive(false);
              }}
            />
          </motion.div>
        </>
      )}

      <div className="z-10 flex h-screen flex-col px-6 sm:px-12">
        <Header />
        <div
          id="mediumPlus"
          className="my-4 hidden h-fit w-full grid-cols-12 overflow-auto md:grid"
        >
          <div className="col-span-3 flex h-full flex-col gap-y-4 overflow-auto border-r border-beige px-4 pb-8 pt-5">
            <p className="font-bold text-beige/60">ABOUT</p>
            <p className="font-semibold text-beige/60">ENGINEERING & DESIGN</p>
            <p className="mb-2 text-sm leading-6 tracking-wide text-white transition-all">
              Front-end engineer skilled in designing and developing intelligent
              web experiences. Front-end engineer experienced in designing and
              developing intelligent web experiences. Front-end engineer
              experienced In designing and developing intelligent web
              experiences. Front-end engineer.
            </p>
            <p className="font-semibold text-beige/60">BACKGROUND</p>
            <p className="text-sm leading-6 tracking-wide text-white">
              Front-end engineer skilled in designing and developing intelligent
              web experiences. Front-end engineer skilled in designing and
              developing intelligent web experiences. Front-end engineer
            </p>
          </div>
          <div className="col-span-3 flex h-full flex-col overflow-auto border-r border-beige p-4">
            <p className="mb-5 px-2 font-bold text-beige/60">PROJECTS</p>
            {projects.map((project) => {
              return (
                <div
                  className={cn(
                    project.name === activeProject.name
                      ? "bg-blue/20 font-black"
                      : "font-semibold",
                    "flex cursor-pointer items-center border-t border-t-beige/40 px-4 py-4 transition-all hover:text-blue",
                  )}
                  onClick={() => {
                    setActiveProject(project);
                  }}
                >
                  <div
                    className={cn(
                      project.name === activeProject.name ? "flex" : "hidden",
                      "h-3 w-3 animate-pulse items-center justify-center rounded-full bg-blue/50",
                    )}
                  >
                    <div className="h-2 w-2 rounded-full border bg-blue duration-200" />
                  </div>
                  <p
                    className={cn(
                      project.name === activeProject.name && "ml-4 text-blue",
                      "cursor-pointer transition-all duration-200 hover:text-blue",
                    )}
                  >
                    {project.name}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="col-span-6 h-full overflow-auto p-4">
            <div className="flex justify-between">
              <p className="mb-3 font-bold text-beige/60">PROJECT INFO</p>
              <div className="flex gap-6">
                <div className="flex gap-2">
                  <p
                    onClick={() => {
                      setDescription("video");
                    }}
                    className={cn(
                      description === "video" && "text-blue underline",
                      "cursor-pointer",
                    )}
                  >
                    Video
                  </p>
                  <p>|</p>
                  <p
                    onClick={() => {
                      setDescription("text");
                    }}
                    className={cn(
                      description === "text" && "text-blue underline",
                      "cursor-pointer",
                    )}
                  >
                    Text
                  </p>
                </div>
                <div className="flex gap-x-1 font-semibold text-blue">
                  <p>Link</p>
                  <Link className="mt-1 h-4 w-4" />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-6 py-6 pl-4 lg:pl-10">
              <div className="flex w-full justify-center">
                <Image
                  src={activeProject.image}
                  className={cn(
                    delayComplete ? "scale-100" : "scale-[99%]",
                    "h-80 w-full max-w-[600px] transition-all duration-500 hover:scale-[102%]",
                  )}
                  width="676"
                  height="349"
                  alt=""
                />
              </div>
              <p className="w-full tracking-wide text-white">
                {activeProject.summary}
              </p>
            </div>
          </div>
        </div>
        <div
          id="footer"
          className={cn(
            akira.className,
            delayComplete ? "h-20" : "h-16",
            "mt-auto line-clamp-1 flex w-full items-center border-t border-beige text-lg text-blue/60 transition-all duration-700 md:text-2xl",
          )}
        >
          <p className="line-clamp-1 overflow-x-scroll">
            ANGELs CAN FLY BECAUSE THEY TAKE THESELVES LIGHTLY - JUST AS THE
            OCEAN WAVES, THE WORLD PEOPLES - ANGEL CAN FLY BECAUSE THEY TAKE
          </p>
        </div>
      </div>
    </div>
  );
}
