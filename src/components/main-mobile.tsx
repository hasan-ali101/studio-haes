import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/accordian";
import ProjectDetails from "@/components/project-details";
import { projects, ProjectType } from "@/data";

type Props = {
  activeProject: ProjectType;
};

const MainMobile = ({ activeProject }: Props) => {
  return (
    <div className="my-8 flex w-full flex-col gap-4 overflow-y-scroll md:hidden">
      <p className="font-semibold text-beige/60">ABOUT</p>
      <p className="mb-2 text-sm leading-6 tracking-wide text-white transition-all">
        Front-end engineer skilled in designing and developing intelligent web
        experiences. Front-end engineer experienced in designing and developing
        intelligent web experiences. Front-end engineer experienced In designing
        and developing intelligent web experiences. Front-end engineer.
      </p>
      <div className="flex flex-col gap-1">
        <p className="font-semibold text-beige/60">PROJECTS</p>
        <div className="border-y border-beige">
          {projects.map((project, i) => {
            return (
              <Accordion type="single" collapsible className="w-full px-1">
                <AccordionItem value="item-1">
                  <AccordionTrigger>{project.name}</AccordionTrigger>
                  <AccordionContent>
                    <ProjectDetails activeProject={activeProject} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MainMobile;
