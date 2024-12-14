import { projects, ProjectType } from "@/data";
import { cn } from "@/utils";
import ProjectDetails from "@/components/project-details";

type Props = {
  activeProject: ProjectType;
  setActiveProject: (project: ProjectType) => void;
};

const MainDesktop = ({ activeProject, setActiveProject }: Props) => {
  return (
    <div
      id="mediumPlus"
      className="my-4 hidden h-fit w-full flex-1 grid-cols-12 overflow-auto md:grid"
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
                "flex cursor-pointer items-center border-t border-t-beige/40 px-4 py-4 transition-none duration-500 hover:text-blue",
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
                <div className="h-2 w-2 rounded-full border bg-blue duration-500" />
              </div>
              <p
                className={cn(
                  project.name === activeProject.name && "ml-4 text-blue",
                  "cursor-pointer transition-all duration-200",
                )}
              >
                {project.name}
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
