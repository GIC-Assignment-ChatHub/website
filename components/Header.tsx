import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  return (
    <header
      className="sticky top-0 cursor-pointer flex items-start justify-between mx-auto z-20 xl:items-center max-h-24 pr-20 pl-20 bg-slate-500"
      style={{width: "100%" }}
    >
      <motion.div
        initial={{ opacity: 0, x: -500, scale: 0.5 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center p-5"
      >
        <Link href="#Home">
            <img
            src="images/icon/chathub.png"
            alt="Logo"
            className="rounded-xl"
            style={{ width: 75, height: 75 }}
            />
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 500, scale: 0.5 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center p-5 text-gray-800 justify-between cursor-pointer"
      >
        <Link href="#Home">
          <button className="btn btn-ghost">Home</button>
        </Link>
        <Link href="#Features">
          <button className="btn btn-ghost">Features</button>
        </Link>
        <Link href="#Team">
          <button className="btn btn-ghost">Team</button>
        </Link>
        <Link href="https://github.com/GIC-Assignment-ChatHub" target="_blank">
          <button className="btn btn-ghost">GitHub Organization</button>
        </Link>
      </motion.div>
    </header>
  );
}
