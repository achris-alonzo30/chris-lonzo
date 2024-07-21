import { Link } from "react-router-dom";
import { FiGithub, FiLinkedin, FiArrowRight } from "react-icons/fi";
import { SectionHeader } from "../components/About/SectionHeader";
import { TechStacks } from "../components/About/TechStacks";
import { Reveal } from "../components/About/Reveal";

export const AboutMe = () => {
  return (
    <main className=" mx-auto max-w-5xl px-4 md:px-8 space-y-32 pb-24">
      <section className="section-wrapper mx-auto">
        <SectionHeader title="AboutMe" dir="l" />
        <article className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
          <aside className="space-y-4">
            <Reveal>
              <p className="leading-relaxed text-zinc-300">
                Hi! 🤗 I&apos;m Lonz, I love to build things that solves
                problems. I&apos;m a full stack developer and entrepreneur
                who&apos;s passionate about creating solutions. Proficient in
                both front-end and back-end that brings creative ideas to code.
                I&apos;m a quick learner and love to learn new technologies. My
                stack of expertise includes:{" "}
                <span className="font-bold">
                  NextJS, Typescript, TailwindCSS, NodeJS, and any databases.
                </span>
              </p>
            </Reveal>

            <Reveal>
              <p className="leading-relaxed text-zinc-300">
                I recently finished my Software Engineer Diploma at BrainStation
                and I&apos;m planning to continue to polish my skills and learn
                more.
              </p>
            </Reveal>
            <Reveal>
              <p className="leading-relaxed text-zinc-300">
                Besides programming, I enjoy weightlifting, cooking, and baking.
                I find balance in life to be an important part of my life. I
                enjoy these activities as it gives me more freedom to be
                creative and productive.
              </p>
            </Reveal>

            <Reveal>
              <p className="leading-relaxed text-zinc-300">
                I&apos;m actively looking to be part of a dynamic team where I
                can contribute to the success of the company. If you are
                interested in my skills, please feel free to reach out to me.
                I&apos;m always open to new and exciting projects.{" "}
                <span className="font-bold">Let&apos;s connect!</span>
              </p>
            </Reveal>

            <Reveal>
              <div className="flex items-center justify-between gap-6">
                <div className="group flex items-center gap-4 text-sm text-emerald-300">
                  <span>Socials</span>
                  <FiArrowRight className="group-hover:translate-x-2 transition-all duration-300" />
                </div>
                <div className="flex tiems-center text-lg gap-4">
                  <Link
                    target="_blank"
                    rel="noreferrer nofollow"
                    to="https://linkedin.com/in/lonzochris"
                    className="text-zinc-300 hover:text-emerald-300 transition-colors"
                  >
                    <FiLinkedin />
                  </Link>
                  <Link
                    target="_blank"
                    rel="noreferrer nofollow"
                    to="https://github.com/achris-alonzo30"
                    className="text-zinc-300 hover:text-emerald-300 transition-colors"
                  >
                    <FiGithub />
                  </Link>
                </div>
              </div>
            </Reveal>
          </aside>
          <TechStacks />
        </article>
      </section>
    </main>
  );
};
