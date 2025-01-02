import { React, useState, useEffect } from "react";
import Header from "../header";

export default function Layout({ children }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div class="dark:bg-[#202023] dark:text-[#ededed] bg-[#f0e7db] text-slate-950  pb-12 transition-colors">
      <Header />
      <div class="flex justify-center items-center">
        <div
          class={`text-xl mx-auto w-[768px] -z-0
        transform transition-all duration-700 ease-out
        ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
        }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
