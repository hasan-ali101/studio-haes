import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/accordian";
import ProjectDetails from "@/components/project-details";
import { ProjectType } from "@/types";
import { Dispatch, SetStateAction } from "react";

type Props = {
  projects: ProjectType[];
  activeProject: ProjectType;
  setActiveProject: Dispatch<SetStateAction<ProjectType>>;
};

const MainMobile = ({ activeProject, projects, setActiveProject }: Props) => {
  return (
    <div className="my-8 flex w-full flex-col gap-4 overflow-y-scroll lg:hidden">
      <p className="font-semibold text-beige/60">ABOUT</p>
      <p className="mb-2 text-sm leading-6 tracking-wide text-white transition-all">
        Front-end engineer skilled in designing and developing intelligent web
        experiences. Front-end engineer experienced in designing and developing
        intelligent web experiences. Front-end engineer experienced In designing
        and developing intelligent web experiences. Front-end engineer.
      </p>
      <div className="flex flex-col gap-1">
        <p className="font-semibold text-beige/60">PROJECTS</p>
        <div className="border-t border-beige/50">
          <Accordion
            defaultValue="0"
            type="single"
            collapsible
            className="w-full px-1"
          >
            {projects.map((project, i) => {
              return (
                <AccordionItem key={i} value={i.toString()}>
                  <AccordionTrigger
                    onClick={() => {
                      setActiveProject(project);
                    }}
                  >
                    {project.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <ProjectDetails activeProject={activeProject} />
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default MainMobile;
