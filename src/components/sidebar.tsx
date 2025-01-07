import { SquareX } from "lucide-react";
import { motion } from "motion/react";
import { Dispatch, SetStateAction } from "react";
import Image from "next/image";

import { sideBar } from "@/animations";
import Overlay from "@/components/overlay";
import Curve from "@/components/curve";
import type { ContactForm as ContactFormType } from "@/components/contact-form";
import ContactForm from "@/components/contact-form";
import { useToast } from "@/hooks/use-toast";

const SideBar = ({
  setSidebarActive,
}: {
  setSidebarActive: Dispatch<SetStateAction<boolean>>;
}) => {
  const { toast } = useToast();

  const handleSubmitContactForm = async (data: ContactFormType) => {
    const res = await fetch("/api/contact-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      setSidebarActive(false);
      toast({
        title: "Message Sent Successfully",
        description: "Thanks for getting in touch, I'll get back to you soon!",
      });
    } else {
      setSidebarActive(false);
      toast({
        variant: "destructive",
        title: "Message Failed to send",
        description: "Please email me at hsnali1506@gmail.com instead!",
      });
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
        className="absolute right-0 z-40 h-full w-full max-w-[600px] bg-background/90"
      >
        <div className="relative flex h-full w-full flex-col gap-2 pl-4 pr-24 pt-3 sm:pr-32 md:pl-8">
          <Curve />
          <Image
            src="/starry-night.jpg"
            className="absolute -z-10 h-full w-full min-w-[1000px] opacity-[0.07]"
            width={1000}
            height={1000}
            alt="-"
          />
          <div className="flex w-full justify-end">
            <SquareX
              size={36}
              className="mr-4 cursor-pointer text-primary"
              onClick={() => {
                setSidebarActive(false);
              }}
            />
          </div>
          <div className="ml-2 flex h-full w-full flex-col overflow-y-auto text-lg">
            <ContactForm onSubmit={handleSubmitContactForm} />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SideBar;
