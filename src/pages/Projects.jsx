import { useState } from "react";
import projects from "../lib/projects.json";
import { Projects } from './Projects';

export const Projects = () => {
    const [open, setOpen] = useState(projects[0].id);
    const video = projects.find(p => p.id === open)?.video;

    return (
        <section className="px-8 py-12 bg-zinc-900">
            <article className="w-full max-w-5xl mx-auto grid gap-8 grid-cols-1 lg:grid-cols-[1fr_350px]">
                <aside>
                    <h3 className="text-4xl font-bold mb-8 text-zinc-50">
                        Projects
                    </h3>
                    <div className="flex flex-col gap-4">
                        
                    </div>
                </aside>
            </article>
        </section>
    )
}