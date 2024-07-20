import { Link } from "react-router-dom"
import { FiGithub, FiGlobe, FiCalendar } from "react-icons/fi"
import { Corners } from "./Corners"
export const Card = ({
    src,
    date,
    href,
    title,
    description
}) => {
    return (
        <Link 
            to={href}
            target="_blank"
            className="group relative flex h-56 flex-col justify-end overflow-hidden p-6 transtion-colors hover:bg-neutral-950 md:h-80 md:p-9"
        >
            <aside className="absolute left-3 top-5 z-10 flex items-center gap-1.5 text-xs uppercase text-zinc-400 transition-colors duration-500 group-hover:text-zinc-50">
                <FiCalendar className="text-base" />
                <span>{date}</span>
            </aside>
            <h2 className="relative z-10 font-medium text-2xl leading-tight transition-transform duration-500 group-hover:-translate-y-3">
                <span className="font-bold text-3xl">{title}{" "}</span>
                {description}
            </h2>
            <aside className="absolute flex right-3 top-4 z-10 text-2xl text-zinc-400 transition-colors group-hover:text-zinc-50">
                <Link to="/" className="pr-4">
                    <FiGithub className="text-base hover:text-emerald-300 transition-all" />
                </Link>
                <Link to="/">
                    <FiGlobe className="text-base hover:text-emerald-300 transition-all" />
                </Link>
            </aside>
            <img
                className="absolute bg-cover bg-center bottom-0 left-0 right-0 top-0 opacity-0 blur-sm grayscale transition-all group-hover:opacity-10 group-active:scale-105 group-active:opacity-30 group-active:blur-0 group-active:grayscale-0"
                src={src}
                alt="Background Image"
            />
            <Corners />
        </Link>
    )
}