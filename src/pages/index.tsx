import { useState } from "react";
import Header from "@/components/header";
import Image from "next/image";

import { projects } from "@/data";

export default function Home() {
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <div className="relative flex min-h-screen w-full flex-col">
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
            <p className="mb-6 font-semibold text-beige">PROJECTS</p>
            {projects.map((project) => {
              return (
                <div className="flex items-center border-t border-t-beige px-4 py-6">
                  <p
                    className="cursor-pointer font-semibold text-white transition-all hover:text-blue"
                    onClick={() => {}}
                  >
                    {project.name}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="col-span-6"></div>
        </div>
        <div
          id="footer"
          className="mt-auto h-24 w-full border-t border-beige"
        ></div>
      </div>
    </div>
  );
}
