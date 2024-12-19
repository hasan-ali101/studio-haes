import { ProjectType } from "@/types";
import { cn } from "@/utils";
import ProjectDetails from "@/components/project-details";
import { Dispatch, SetStateAction } from "react";

type Props = {
  projects: ProjectType[];
  activeProject: ProjectType;
  setActiveProject: Dispatch<SetStateAction<ProjectType>>;
};

const MainDesktop = ({ projects, activeProject, setActiveProject }: Props) => {
  return (
    <div
      id="mediumPlus"
      className="my-4 hidden h-fit w-full flex-1 grid-cols-12 overflow-auto lg:grid"
    >
      <div className="border-secondary col-span-3 flex h-full flex-col gap-y-4 overflow-auto border-r px-4 pb-8 pt-5">
        <p className="text-secondary/60 font-bold">ABOUT</p>
        <p className="text-secondary/60 font-semibold">ENGINEERING & DESIGN</p>
        <p className="mb-2 text-sm leading-6 tracking-wide text-white transition-all">
          Front-end engineer skilled in designing and developing intelligent web
          experiences. Front-end engineer experienced in designing and
          developing intelligent web experiences. Front-end engineer experienced
          In designing and developing intelligent web experiences. Front-end
          engineer.
        </p>
        <p className="text-secondary/60 font-semibold">BACKGROUND</p>
        <p className="text-sm leading-6 tracking-wide text-white">
          Front-end engineer skilled in designing and developing intelligent web
          experiences. Front-end engineer skilled in designing and developing
          intelligent web experiences. Front-end engineer
        </p>
      </div>
      <div className="border-secondary col-span-3 flex h-full flex-col overflow-auto border-r p-4">
        <p className="text-secondary/60 mb-5 px-2 font-bold">PROJECTS</p>
        {projects.map((project, i) => {
          return (
            <div
              key={i}
              className={cn(
                project.title === activeProject.title
                  ? "bg-primary/20 font-black"
                  : "font-semibold",
                "border-t-secondary/40 hover:text-primary flex cursor-pointer items-center border-t px-4 py-4 transition-none duration-500",
              )}
              onClick={() => {
                setActiveProject(project);
              }}
            >
              <div
                className={cn(
                  project.title === activeProject.title ? "flex" : "hidden",
                  "bg-primary/50 h-3 w-3 animate-pulse items-center justify-center rounded-full",
                )}
              >
                <div className="bg-primary h-2 w-2 rounded-full border duration-500" />
              </div>
              <p
                className={cn(
                  project.title === activeProject.title && "text-primary ml-4",
                  "cursor-pointer transition-all duration-200",
                )}
              >
                {project.title}
              </p>
            </div>
          );
        })}
      </div>
      <div className="col-span-6 h-full overflow-auto p-4">
        <ProjectDetails activeProject={activeProject} />
      </div>
    </div>
  );
};
export default MainDesktop;
