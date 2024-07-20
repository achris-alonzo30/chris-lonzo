import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
export const Projects = ({
  data,
  role,
  link,
  open,
  index,
  project,
  setOpen,
  industry,
  description,
}) => {
  const isOpen = index === open;
  return (
    <article
      onClick={() => setOpen(index)}
      className="p-0.5 rounded-lg relative overflow-hidden cursor-pointer"
    >
      <motion.aside
        initial={false}
        animate={{ height: isOpen ? "240px" : "72px" }}
        className="p-6 rounded-lg bg-zinc-800 flex flex-col justify-between relative z-20"
      >
        <div>
          <motion.p
            initial={false}
            animate={{
              color: isOpen
                ? "rgba(255, 255, 255, 1)"
                : "rgba(255, 255, 255, 0.5)",
            }}
            className="text-xl font-medium w-fit bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text"
          >
            {project}
          </motion.p>
          <motion.p
            initial={false}
            animate={{ color: isOpen ? 1 : 0 }}
            className="mt-4  bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent"
          >
            {description}
          </motion.p>
        </div>
        <motion.button
          initial={false}
          animate={{ color: isOpen ? 1 : 0 }}
          className="-ml-6 -mr-6 -mb-6 mt-4 py-2 rounded-b-md flex items-center justify-center gap-1 group transition-[gap] bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-zinc-50"
        >
          <span>Learn more</span>
          <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
        </motion.button>
      </motion.aside>
      <motion.aside 
        initial={false}
        animate={{ opacity: isOpen ? 1 : 0}}
        className="absolute inset-0 z-10 bg-gradient-to-r from-blue-600 to-indigo-700"
      />
      <div className="absolute inset-0 z-0 bg-slate-200"/>
    </article>
  );
};
