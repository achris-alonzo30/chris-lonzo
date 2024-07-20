import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Project } from "../components/Project";

import jsonData from "../lib/projects.json";

export const Projects = () => {
    const {projects} = jsonData;
    const [open, setOpen] = useState(projects[0].id);
    const video = projects.find(p => p.id === open)?.video;
    console.log(video)
    return (
        <section className="px-8 py-12 bg-zinc-900">
            <article className="w-full max-w-5xl mx-auto grid gap-8 grid-cols-1 lg:grid-cols-[1fr_500px]">
                <aside>
                    <h3 className="text-4xl font-bold mb-8 text-zinc-50">
                        Projects
                    </h3>
                    <div className="flex flex-col gap-4">
                        {projects.map(p => (
                            <Project {...p} key={p.id} open={open} setOpen={setOpen} index={p.id} />
                        ))}
                    </div>
                </aside>
                <AnimatePresence>
                    <motion.aside 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        key={video}
                        className="bg-slate-300 rounded-2xl aspect-[4/3] lg:aspect-auto"
                        style={{
                            backgroundVideo: `url(${video})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                        }}
                    />
                </AnimatePresence>
            </article>
        </section>
    )
}