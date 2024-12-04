import { useState } from "react";
import Header from "@/components/header";
import Image from "next/image";

import { projects } from "@/data";
import { cn } from "@/utils";
import { Link } from "lucide-react";

export default function Home() {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const [description, setDescription] = useState("video");

  return (
    <div className="relative flex min-h-screen w-full flex-col text-white">
      <Image
        src="/starry-night.jpg"
        className="absolute z-0 h-full w-full min-w-[1000px] opacity-[0.08]"
        width={1000}
        height={1000}
        alt="-"
      />

      <div className="z-10 flex h-screen flex-col px-6 sm:px-12">
        <Header />
        <div
          id="mediumPlus"
          className="my-8 hidden h-full w-full flex-1 grid-cols-12 overflow-auto md:grid"
        >
          <div className="col-span-3 flex h-full flex-col gap-y-4 overflow-auto border-r border-beige p-4">
            <p className="font-semibold text-beige">ABOUT</p>
            <p className="text-sm font-semibold text-beige">
              ENGINEERING & DESIGN
            </p>
            <p className="text-sm text-white">
              Front-end engineer skilled in designing and developing intelligent
              web experiences. Front-end engineer experienced in designing and
              developing intelligent web experiences. Front-end engineer
              experienced In designing and developing intelligent web
              experiences. Front-end engineer.
            </p>
            <p className="text-sm font-semibold text-beige">BACKGROUND</p>
            <p className="text-sm text-white">
              Front-end engineer skilled in designing and developing intelligent
              web experiences. Front-end engineer experienced in designing and
              developing intelligent web experiences.
            </p>
          </div>
          <div className="col-span-3 flex h-full flex-col overflow-auto border-r border-beige p-4">
            <p className="mb-6 px-2 font-semibold text-beige">PROJECTS</p>
            {projects.map((project) => {
              return (
                <div className="flex items-center border-t border-t-beige px-4 py-6">
                  <div
                    className={cn(
                      project.name === activeProject.name ? "flex" : "hidden",
                      "h-2 w-2 rounded-full border bg-blue duration-200",
                    )}
                  />
                  <p
                    className={cn(
                      project.name === activeProject.name
                        ? "ml-2 text-blue"
                        : "text-white",
                      "cursor-pointer font-semibold transition-all duration-200 hover:text-blue",
                    )}
                    onClick={() => {
                      setActiveProject(project);
                    }}
                  >
                    {project.name}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="col-span-6 p-4">
            <div className="flex justify-between">
              <p className="mb-3 font-semibold text-beige">PROJECT INFO</p>
              <div className="flex gap-6">
                <div className="flex gap-2">
                  <p
                    onClick={() => {
                      setDescription("video");
                    }}
                    className={cn(
                      description === "video" && "text-blue",
                      "cursor-pointer",
                    )}
                  >
                    Video |
                  </p>
                  <p
                    onClick={() => {
                      setDescription("text");
                    }}
                    className={cn(
                      description === "text" && "text-blue",
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
            <p className="text-sm text-white">{activeProject.summary}</p>
          </div>
        </div>
        <div
          id="footer"
          className="mt-auto h-24 w-full border-t border-beige"
        ></div>
      </div>
    </div>
  );
}
