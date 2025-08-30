import { Dispatch, SetStateAction } from "react";

import { ProjectType } from "@/types";
import { cn } from "@/utils";
import ProjectDetails from "@/components/project-details";
import About from "@/components/about";

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
      <About />
      <div className="col-span-3 flex h-full flex-col overflow-auto border-r border-secondary p-4">
        <p className="mb-5 px-2 font-bold text-secondary/60">PROJECTS</p>
        {projects.map((project, i) => {
          return (
            <div
              key={i}
              className={cn(
                project.title === activeProject.title && "bg-primary/20",
                "flex cursor-pointer items-center border-t border-t-secondary/40 px-4 py-4 font-semibold transition-none hover:text-primary",
              )}
              onClick={() => {
                setActiveProject(project);
              }}
            >
              <div
                className={cn(
                  project.title === activeProject.title ? "flex" : "hidden",
                  "h-3 w-3 animate-pulse items-center justify-center rounded-full bg-primary/50",
                )}
              >
                <div className="h-2 w-2 rounded-full border bg-primary" />
              </div>
              <p
                className={cn(
                  project.title === activeProject.title
                    ? "ml-4 text-primary"
                    : "ml-2",
                  "cursor-pointer transition-all duration-500 lg:text-lg",
                )}
              >
                {project.title}
              </p>
            </div>
          );
        })}
      </div>
      <div className="col-span-6 h-full overflow-auto px-4 py-4">
        <ProjectDetails activeProject={activeProject} />
      </div>
    </div>
  );
};
export default MainDesktop;
