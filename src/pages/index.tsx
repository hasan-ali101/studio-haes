import { use, useEffect, useState } from "react";
import Image from "next/image";
import { Archivo } from "next/font/google";
import { AnimatePresence } from "motion/react";

import Header from "@/components/header";
import { projects } from "@/data";
import { cn } from "@/utils";
import Footer from "@/components/footer";
import SideBar from "@/components/sidebar";
import Overlay from "@/components/overlay";
import MainDesktop from "@/components/main-desktop";
import MainMobile from "@/components/main-mobile";

const archivo = Archivo({ subsets: ["latin"], weight: "400" });

export default function Home() {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const [delayComplete, setDelayComplete] = useState(false);
  const [sideBarActive, setSidebarActive] = useState(false);
  const [sideBarSection, setSidebarSection] = useState("");

  const respondKeyDown = (e: KeyboardEvent) => {
    console.log(e.key);
    if (e.key === "Escape") {
      setSidebarActive(false);
    }
  };

  useEffect(() => {
    setDelayComplete(true);
    window.addEventListener("keydown", respondKeyDown);
    return () => {
      window.removeEventListener("keydown", respondKeyDown);
    };
  }, []);

  useEffect(() => {
    if (!sideBarActive && sideBarSection !== "") {
      setSidebarSection("");
    }
  }, [sideBarActive]);

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
          sideBarActive && "scale-125",
          "absolute right-8 top-1 z-50 flex items-center text-lg font-semibold text-blue transition-transform delay-300 duration-500 sm:right-10 md:right-14 md:top-2 md:gap-3 md:text-xl",
        )}
      >
        <button
          className={cn(
            sideBarSection === "cv" && "bg-blue/20",
            "rounded-sm border-blue p-2 outline-none ring-transparent transition-colors hover:bg-blue/20 md:px-3",
          )}
          onClick={() => {
            setSidebarActive(true);
            setSidebarSection("cv");
          }}
        >
          CV
        </button>
        <button
          className={cn(
            sideBarSection === "contact" && "bg-blue/20",
            "rounded-sm border-blue p-2 outline-none ring-transparent transition-colors hover:bg-blue/20 md:px-3",
          )}
          onClick={() => {
            setSidebarActive(true);
            setSidebarSection("contact");
          }}
        >
          Contact
        </button>
      </div>
      <AnimatePresence mode="wait">
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
          activeProject={activeProject}
          setActiveProject={setActiveProject}
        />
        <MainMobile activeProject={activeProject} />
        <Footer delayComplete={delayComplete} />
      </div>
    </div>
  );
}
