import { Block } from "./Block";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { FiGrid, FiAward } from "react-icons/fi";


export const SocialsBlock = () => {
  return (
    <>
      <Block
        whileHover={{
          rotate: "2.5deg",
          scale: 1.1,
        }}
        className="col-span-6 bg-blue-500 md:col-span-3"
      >
        <a
          href="#"
          rel="noopener noreferrer"
          target="_blank"
          className="grid h-full place-content-center text-3xl text-white"
        >
          <SiLinkedin />
        </a>
      </Block>
      <Block
        whileHover={{
          rotate: "-2.5deg",
          scale: 1.1,
        }}
        className="col-span-6 bg-neutral-800 md:col-span-3"
      >
        <a
          href="#"
          rel="noopener noreferrer"
          target="_blank"
          className="grid h-full place-content-center text-3xl text-white"
        >
          <SiGithub />
        </a>
      </Block>
      <Block
        whileHover={{
          rotate: "-2.5deg",
          scale: 1.1,
        }}
        className="col-span-6 bg-green-600 md:col-span-3"
      >
        <a
          href="/projects"
          className="grid h-full place-content-center text-3xl text-black"
        >
          <FiGrid />
        </a>
      </Block>
      <Block
        whileHover={{
          rotate: "2.5deg",
          scale: 1.1,
        }}
        className="col-span-6 bg-slate-500 md:col-span-3"
      >
        <a
          href="/awards"
          className="grid h-full place-content-center text-3xl text-white"
        >   
          <FiAward />
        </a>
      </Block>
    </>
  );
};
