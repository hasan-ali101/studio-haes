import { projects, ProjectType } from "@/data";
import { cn } from "@/utils";
import { Link } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type Props = {
  activeProject: ProjectType;
  setActiveProject: (project: ProjectType) => void;
  delayComplete: boolean;
};

const MainDesktop = ({
  activeProject,
  setActiveProject,
  delayComplete,
}: Props) => {
  const [descriptionFormat, setDescriptionFormat] = useState("video");

  return (
    <div
      id="mediumPlus"
      className="my-4 hidden h-fit w-full grid-cols-12 overflow-auto md:grid"
    >
      <div className="col-span-3 flex h-full flex-col gap-y-4 overflow-auto border-r border-beige px-4 pb-8 pt-5">
        <p className="font-bold text-beige/60">ABOUT</p>
        <p className="font-semibold text-beige/60">ENGINEERING & DESIGN</p>
        <p className="mb-2 text-sm leading-6 tracking-wide text-white transition-all">
          Front-end engineer skilled in designing and developing intelligent web
          experiences. Front-end engineer experienced in designing and
          developing intelligent web experiences. Front-end engineer experienced
          In designing and developing intelligent web experiences. Front-end
          engineer.
        </p>
        <p className="font-semibold text-beige/60">BACKGROUND</p>
        <p className="text-sm leading-6 tracking-wide text-white">
          Front-end engineer skilled in designing and developing intelligent web
          experiences. Front-end engineer skilled in designing and developing
          intelligent web experiences. Front-end engineer
        </p>
      </div>
      <div className="col-span-3 flex h-full flex-col overflow-auto border-r border-beige p-4">
        <p className="mb-5 px-2 font-bold text-beige/60">PROJECTS</p>
        {projects.map((project, i) => {
          return (
            <div
              key={i}
              className={cn(
                project.name === activeProject.name
                  ? "bg-blue/20 font-black"
                  : "font-semibold",
                "flex cursor-pointer items-center border-t border-t-beige/40 px-4 py-4 transition-all duration-500 hover:text-blue",
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
                  setDescriptionFormat("video");
                }}
                className={cn(
                  descriptionFormat === "video" && "text-blue underline",
                  "cursor-pointer",
                )}
              >
                Video
              </p>
              <p>|</p>
              <p
                onClick={() => {
                  setDescriptionFormat("text");
                }}
                className={cn(
                  descriptionFormat === "text" && "text-blue underline",
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
  );
};
export default MainDesktop;
