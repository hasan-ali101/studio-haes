import { SquareX } from "lucide-react";
import { motion } from "motion/react";
import { Dispatch, SetStateAction } from "react";

import { sideBar } from "@/animations";
import Overlay from "@/components/overlay";
import Curve from "@/components/curve";
import type { ContactForm as ContactFormType } from "@/components/contact-form";
import ContactForm from "@/components/contact-form";
import Image from "next/image";

const SideBar = ({
  setSidebarActive,
  section,
}: {
  setSidebarActive: Dispatch<SetStateAction<boolean>>;
  section?: "cv" | "contact";
}) => {
  const handleSubmitContactForm = async (data: ContactFormType) => {
    const res = await fetch("/api/hello", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      setSidebarActive(false);
    } else {
      console.error("Failed to submit form");
    }
  };

  return (
    <>
      <Overlay
        onClick={() => {
          setSidebarActive(false);
        }}
      />
      <motion.div
        variants={sideBar}
        initial="initial"
        animate="animate"
        exit="exit"
        className="absolute right-0 z-40 h-full w-full max-w-[600px] bg-background/90 md:w-1/2"
      >
        <div className="relative flex h-full w-full flex-col gap-8 pl-4 pt-3 md:pl-8">
          <Curve />
          <Image
            src="/starry-night.jpg"
            className="absolute -z-10 h-full w-full min-w-[1000px] opacity-[0.07]"
            width={1000}
            height={1000}
            alt="-"
          />
          <SquareX
            size={36}
            className="text-primary cursor-pointer"
            onClick={() => {
              setSidebarActive(false);
            }}
          />
          <div className="ml-2 flex h-full w-full flex-col overflow-y-auto pr-32 text-lg">
            {section === "contact" ? (
              <ContactForm onSubmit={handleSubmitContactForm} />
            ) : (
              <div className="flex flex-col gap-4">
                <p className="text-secondary/70">WORK HISTORY</p>
                <div className="flex w-full flex-col gap-6">
                  <p className="">NOVA Wealth</p>
                  <div className="flex justify-between gap-2 rounded-md border bg-white/10 p-2 text-sm">
                    <p className="font-semibold">Software Developer</p>
                    <p className="text-xs">December 2024 - Present</p>
                  </div>
                  <div className="flex justify-between gap-2 rounded-md border bg-white/10 p-2 text-sm">
                    <p className="font-semibold">Junior Software Developer</p>
                    <p className="text-xs">May 2024 - December 2024</p>
                  </div>
                  <div className="flex justify-between gap-2 rounded-md border bg-white/10 p-2 text-sm">
                    <p className="font-semibold">Operations Analyst</p>
                    <p className="text-xs">May 2022 - May 2024</p>
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-5">
                  <p className="text-secondary/70 col-span-12">EDUCATION</p>
                  <div className="col-span-6 rounded-md border bg-white/10 p-2 text-sm">
                    <p className="font-semibold">University of Bristol</p>
                    <p> LLM Human Rights Law</p>
                    <p>Merit (65%)</p>
                  </div>
                  <div className="col-span-6 rounded-md border bg-white/10 p-2 text-sm">
                    <p className="font-semibold">University of York</p>
                    <p>LLB Law</p>
                    <p>First-class Honours (70%)</p>
                  </div>
                  <div className="col-span-6 rounded-md border bg-white/10 p-2 text-sm">
                    <p className="font-semibold">A-Levels</p>
                    <p>Physics A* | Biology A | Maths B</p>
                  </div>
                  <div className="col-span-6 rounded-md border bg-white/10 p-2 text-sm">
                    <p className="font-semibold">GCSEs</p>
                    <p>4A*s | 4As | 2Bs</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SideBar;
