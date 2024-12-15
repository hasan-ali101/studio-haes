import { useState } from "react";
import { Link } from "lucide-react";

import { cn } from "@/utils";
import { ProjectType } from "@/types";
import VideoPlayer from "@/components/video-player";
import Overlay from "./overlay";

const ProjectDetails = ({ activeProject }: { activeProject: ProjectType }) => {
  const [descriptionFormat, setDescriptionFormat] = useState("video");
  const [isExpanded, setIsExpanded] = useState(false);

  console.log(isExpanded);

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
          {isExpanded && (
            <Overlay
              className="z-40 hidden md:flex"
              onClick={() => {
                setIsExpanded(false);
              }}
            />
          )}
          <div
            className={cn(
              isExpanded
                ? "md:fixed md:left-1/2 md:top-1/2 md:z-50 md:w-2/3 md:-translate-x-1/2 md:-translate-y-1/2 md:transform"
                : "md:w-full",
              "flex justify-center rounded-sm",
            )}
          >
            {descriptionFormat === "video" && activeProject.videoUrl ? (
              <VideoPlayer
                isExpanded={isExpanded}
                setIsExpanded={setIsExpanded}
                url={activeProject.videoUrl}
                id={activeProject.title}
              />
            ) : (
              <p>{activeProject.description}</p>
            )}
          </div>
        </div>
        <p className="w-full tracking-wide text-white">
          {activeProject.summary}
        </p>
      </div>
    </>
  );
};

export default ProjectDetails;
