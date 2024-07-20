import { motion } from "framer-motion";
import { AboutBlock } from "./components/AboutBlock";
import { HeaderBlock } from "./components/HeaderBlock";
import { SocialsBlock } from "./components/SocialsBlock";
import { LocationBlock } from "./components/LocationBlock";
import { EmailListBlock } from "./components/EmailListBlock";

export const Homepage = () => {
  return (
    <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock />
        <SocialsBlock />
        <AboutBlock />
        <LocationBlock />
        <EmailListBlock />
      </motion.div>
  );
};
