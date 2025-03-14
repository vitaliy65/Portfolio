import React from "react";
import Header from "../../components/header";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function Layout({ children }) {
  const location = useLocation();

  return (
    <div className="dark:bg-[#202023] dark:text-[#ededed] bg-[#f0e7db] text-slate-950  pb-12 transition-colors duration-300">
      <Header />

      <motion.div
        className="flex justify-center items-center min-h-screen"
        key={location.pathname}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-xl mx-auto w-[768px]">{children}</div>
      </motion.div>

      <footer className="flex justify-center items-center text-sm text-zinc-600">
        &copy; 2025 Posvistak Vitaliy. All Rights Reserved.
      </footer>
    </div>
  );
}
