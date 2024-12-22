import { client } from "@/sanity/client";
import { useEffect, useState } from "react";
import { Archivo } from "next/font/google";
import { AnimatePresence } from "motion/react";
import { type SanityDocument } from "next-sanity";

import Header from "@/components/header";
import Footer from "@/components/footer";
import SideBar from "@/components/sidebar";
import Overlay from "@/components/overlay";
import MainDesktop from "@/components/main-desktop";
import MainMobile from "@/components/main-mobile";
import { cn } from "@/utils";
import { ProjectType } from "@/types";
import BackgroundImage from "@/components/background-image";

const archivo = Archivo({ subsets: ["latin"], weight: "400" });

const PROJECTS_QUERY = `*[
  _type == "project"
]|order(publishedAt desc)[0...12]{ title, summary, description,"videoUrl": video.asset->url}`;

export default function Home({ projects }: { projects: ProjectType[] }) {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const [mounted, setMounted] = useState(false);
  const [sideBarActive, setSidebarActive] = useState(false);

  useEffect(() => {
    const respondKeyDown = (e: KeyboardEvent) => {
      const index = projects.indexOf(activeProject);

      if (e.key === "Escape") {
        setSidebarActive(false);
      } else if (e.key === "ArrowDown") {
        if (index < projects.length - 1) {
          setActiveProject(projects[index + 1]);
        }
      } else if (e.key === "ArrowUp") {
        if (index > 0) {
          setActiveProject(projects[index - 1]);
        }
      }
    };

    setMounted(true);
    window.addEventListener("keydown", respondKeyDown);
    return () => {
      window.removeEventListener("keydown", respondKeyDown);
    };
  }, [activeProject, projects]);

  return (
    <div
      className={cn(
        archivo.className,
        "relative flex min-h-screen w-full flex-col overflow-clip bg-background text-white",
      )}
    >
      <BackgroundImage />
      <div className="z-10 flex h-screen flex-col px-6 sm:px-12">
        <Header mounted={mounted} setSidebarActive={setSidebarActive} />
        <MainDesktop
          projects={projects}
          activeProject={activeProject}
          setActiveProject={setActiveProject}
        />
        <MainMobile
          setActiveProject={setActiveProject}
          projects={projects}
          activeProject={activeProject}
        />
        <Footer delayComplete={mounted} />
      </div>
      <AnimatePresence>
        {sideBarActive && (
          <>
            <SideBar setSidebarActive={setSidebarActive} />
            <Overlay
              onClick={() => {
                setSidebarActive(false);
              }}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export async function getStaticProps() {
  const projects = await client.fetch<SanityDocument[]>(PROJECTS_QUERY, {});

  return {
    props: {
      projects,
    },
  };
}
