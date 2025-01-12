import { useEffect, useState } from "react";
import { Link as LinkIcon } from "lucide-react";

import { cn } from "@/utils";
import { ProjectType } from "@/types";
import { VideoPlayer } from "@/components/ui/video-player";
import Overlay from "./overlay";

const ProjectDetails = ({ activeProject }: { activeProject: ProjectType }) => {
  const [descriptionFormat, setDescriptionFormat] = useState("video");
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const respondKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsExpanded(false);
      }
    };

    window.addEventListener("keydown", respondKeyDown);
    return () => {
      window.removeEventListener("keydown", respondKeyDown);
    };
  }, []);

  useEffect(() => {
    setDescriptionFormat("video");
  }, [activeProject]);

  return (
    <>
      <div className="flex justify-between">
        <p className="mb-3 hidden font-bold text-secondary/60 lg:flex">
          PROJECT INFO
        </p>
        <div className="flex w-full justify-between gap-6 lg:w-fit lg:justify-start">
          <div className="flex gap-2">
            <p
              onClick={() => {
                setDescriptionFormat("video");
              }}
              className={cn(
                descriptionFormat === "video"
                  ? "text-primary underline"
                  : "cursor-pointer",
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
                descriptionFormat === "text"
                  ? "text-primary underline"
                  : "cursor-pointer",
              )}
            >
              Text
            </p>
          </div>
          {activeProject.link && (
            <a
              target="_blank"
              href={activeProject.link}
              className="flex gap-x-1 font-semibold text-primary"
            >
              Link
              <LinkIcon className="mt-1 h-4 w-4"></LinkIcon>
            </a>
          )}
        </div>
      </div>
      <div className="flex flex-col items-start gap-6 py-6 md:pl-4 lg:pl-10">
        <div className="flex w-full justify-center">
          {isExpanded && (
            <Overlay
              className="z-40 hidden lg:flex"
              onClick={() => {
                setIsExpanded(false);
              }}
            />
          )}
          <div
            className={cn(
              isExpanded
                ? "lg:fixed lg:left-1/2 lg:top-1/2 lg:z-50 lg:w-2/3 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:transform"
                : "transition-all duration-100 md:w-full",
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
        <p className="w-full text-center tracking-wide text-white md:text-left">
          {activeProject.summary}
        </p>
      </div>
    </>
  );
};

export default ProjectDetails;
