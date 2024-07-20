import { Block } from "./Block";
import { FiArrowRight } from "react-icons/fi";
export const HeaderBlock = () => {
  return (
    <Block className="col-span-12 row-span-2 md:col-span-6">
      <img
        src="/headshot.jpg"
        alt="Christopher Alonoz Profile Picture"
        className="mb-4 size-14 rounded-full"
      />
      <h1 className="mb-12 text-4xl font-medium leading-tight">
        Hi, I'm Chris Alonzo.{" "}
        <span className="text-zinc-400">
        Sales Representative Turned Code Maestro
        </span>
      </h1>
      <a
        href="/about-me"
        className="group flex items-center gap-1 text-white hover:underline"
      >
        About me <FiArrowRight className="group-hover:translate-x-2 transition-all duration-200" />
      </a>
    </Block>
  );
};
