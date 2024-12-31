import { Dispatch, SetStateAction } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui";
import ProjectDetails from "@/components/project-details";
import { ProjectType } from "@/types";
import About from "@/components/about";

type Props = {
  projects: ProjectType[];
  activeProject: ProjectType;
  setActiveProject: Dispatch<SetStateAction<ProjectType>>;
};

const MainMobile = ({ activeProject, projects, setActiveProject }: Props) => {
  return (
    <div className="my-8 flex w-full flex-col gap-4 overflow-y-scroll lg:hidden">
      <div className="flex flex-col gap-1">
        <p className="font-semibold text-secondary/60">PROJECTS</p>
        <div className="border-t border-secondary/50">
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
      <About />
    </div>
  );
};

export default MainMobile;
