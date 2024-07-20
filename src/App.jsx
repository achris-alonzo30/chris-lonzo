import "./App.css";
import React from "react";
import { motion } from "framer-motion";
import { Footer } from "./components/Footer";
import { AboutBlock } from "./components/AboutBlock";
import { HeaderBlock } from "./components/HeaderBlock";
import { SocialsBlock } from "./components/SocialsBlock";
import { LocationBlock } from "./components/LocationBlock";
import { EmailListBlock } from "./components/EmailListBlock";

import logo from "/logo.svg";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-900 px-4 py-12 text-zinc-50">
      <img src={logo} alt="Christopher Alonzo Initialials Logo" className="h-14 w-14 text-center mb-4" />
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
      <Footer />
    </div>
  );
}

export default App;
