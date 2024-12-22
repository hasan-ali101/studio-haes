import Image from "next/image";

const BackgroundImage = () => {
  return (
    <Image
      src="/starry-night.jpg"
      className="absolute z-0 h-full w-full min-w-[1000px] opacity-[0.11]"
      width={1000}
      height={1000}
      alt="-"
    />
  );
};

export default BackgroundImage;
