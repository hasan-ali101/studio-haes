import { useState } from "react";

import { cn } from "@/utils";
import { ProjectType } from "@/data";
import Image from "next/image";
import { Link } from "lucide-react";

const ProjectDetails = ({ activeProject }: { activeProject: ProjectType }) => {
  const [descriptionFormat, setDescriptionFormat] = useState("video");

  return (
    <>
      <div className="flex justify-between">
        <p className="mb-3 hidden font-bold text-beige/60 md:flex">
          PROJECT INFO
        </p>
        <div className="flex w-full justify-between gap-6 md:w-fit md:justify-start">
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

      <div className="flex flex-col items-start gap-6 py-6 md:pl-4 lg:pl-10">
        <div className="flex w-full justify-center">
          <Image
            src={activeProject.image}
            className="h-54 w-full max-w-[600px] transition-all duration-500 hover:scale-[102%]"
            width="676"
            height="349"
            alt=""
          />
        </div>
        <p className="w-full tracking-wide text-white">
          {activeProject.summary}
        </p>
      </div>
    </>
  );
};

export default ProjectDetails;
