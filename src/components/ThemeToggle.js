"use client";

import { useTheme } from "../context/ThemeContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      class="flex 
      justify-center 
      items-center 
      h-full w-10 
      rounded 
      ml-auto 
      dark:bg-[#FBD38D] 
      bg-[#554a80] 
      dark:hover:bg-[#d4a971] 
      hover:bg-[#423b68]"
    >
      {theme === "light" ? (
        <img
          src="/night-mode.png"
          alt="nightTheme"
          className="h-[1rem] w-[1rem]"
        />
      ) : (
        <img
          src="/light-mode.png"
          alt="lightTheme"
          className="h-[2rem] w-[2rem]"
        />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
