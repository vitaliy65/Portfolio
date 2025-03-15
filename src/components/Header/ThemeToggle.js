"use client";

import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/Hooks.ts";
import { toggleTheme } from "../../state/theme/themeSlice.ts";

export function ThemeToggle() {
  const theme = useAppSelector((state) => state.themeState.theme);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
  }, [theme]);

  return (
    <button
      onClick={() => {
        dispatch(toggleTheme());
      }}
      className="flex 
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
