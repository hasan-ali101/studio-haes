import { client } from "@/sanity/client";
import { useEffect, useState } from "react";
import Image from "next/image";
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

const archivo = Archivo({ subsets: ["latin"], weight: "400" });

const PROJECTS_QUERY = `*[
  _type == "project"
]|order(publishedAt desc)[0...12]{ title, summary, description,"videoUrl": video.asset->url}`;

export default function Home({ projects }: { projects: ProjectType[] }) {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const [mounted, setMounted] = useState(false);
  const [sideBarActive, setSidebarActive] = useState(false);

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

  useEffect(() => {
    setMounted(true);
    window.addEventListener("keydown", respondKeyDown);
    return () => {
      window.removeEventListener("keydown", respondKeyDown);
    };
  }, [respondKeyDown]);

  return (
    <div
      className={cn(
        archivo.className,
        "relative flex min-h-screen w-full flex-col overflow-clip bg-background text-white",
      )}
    >
      <Image
        src="/starry-night.jpg"
        className="absolute z-0 h-full w-full min-w-[1000px] opacity-[0.11]"
        width={1000}
        height={1000}
        alt="-"
      />
      <div
        className={cn(
          sideBarActive && "scale-110",
          "text-primary absolute right-8 top-1 z-50 flex items-center text-lg font-semibold transition-transform delay-300 duration-500 sm:right-10 md:right-16 md:top-2 md:gap-3 md:text-xl",
        )}
      >
        {/* <button
          className="border-primary hover:bg-primary/20 rounded-sm p-2 outline-none ring-transparent transition-colors md:px-3"
          onClick={() => {
          }}
        >
          CV
        </button> */}
        <button
          className={cn(
            sideBarActive && "bg-primary/20",
            "border-primary hover:bg-primary/20 rounded-sm p-2 outline-none ring-transparent transition-colors md:px-3",
          )}
          onClick={() => {
            setSidebarActive(true);
          }}
        >
          Contact me
        </button>
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

      <div className="z-10 flex h-screen flex-col px-6 sm:px-12">
        <Header />
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
