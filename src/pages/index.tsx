import { useState } from "react";
import Header from "@/components/header";
import Image from "next/image";
import { Link } from "lucide-react";
import { Archivo as Montserrat } from "next/font/google";

import { projects } from "@/data";
import { cn } from "@/utils";

const montserrat = Montserrat({ subsets: ["latin"], weight: "400" });

export default function Home() {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const [description, setDescription] = useState("video");

  return (
    <div
      className={`${montserrat.className} relative flex min-h-screen w-full flex-col bg-background text-white`}
    >
      <Image
        src="/starry-night.jpg"
        className="absolute z-0 h-full w-full min-w-[1000px] opacity-[0.1]"
        width={1000}
        height={1000}
        alt="-"
      />

      <div className="z-10 flex h-screen flex-col px-6 sm:px-12">
        <Header />
        <div
          id="mediumPlus"
          className="my-4 hidden h-full w-full flex-1 grid-cols-12 overflow-auto md:grid"
        >
          <div className="col-span-3 flex h-full flex-col gap-y-4 overflow-auto border-r border-beige p-4">
            <p className="font-bold text-beige/60">ABOUT</p>
            <p className="font-semibold text-beige/60">ENGINEERING & DESIGN</p>
            <p className="mb-2 text-sm leading-6 tracking-wide text-white">
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
              developing intelligent
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
          <div className="col-span-6 h-full overflow-scroll p-4">
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

            <div className="flex flex-col items-start gap-6 py-2 pl-4 lg:pl-10">
              <Image
                src={activeProject.image}
                className="h-80 w-full"
                width="676"
                height="349"
                alt=""
              />
              <p className="w-full tracking-wide text-white">
                {activeProject.summary}
              </p>
            </div>
          </div>
        </div>
        <div
          id="footer"
          className="mt-auto h-28 w-full border-t border-beige"
        ></div>
      </div>
    </div>
  );
}
