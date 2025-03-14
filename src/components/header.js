import React from "react";
import BurgerMenu from "./burgerMenu";
import LinkList from "./LinkList";
import { ThemeToggle } from "./ThemeToggle";

export default function header() {
  return (
    <div
      className="flex z-10
    h-14 
    w-full 
    items-center 
    mb-7 
    dark:bg-[#1c1c1c] 
    bg-[#f6f0e8] 
    fixed 
    backdrop-filter 
    backdrop-blur-[24px] 
    bg-opacity-40  
    dark:bg-opacity-75 
    dark:backdrop-blur-[24px]"
    >
      <div class="flex w-[768px] mx-auto h-full py-2 px-4">
        <LinkList />
        <ThemeToggle />
        <BurgerMenu />
      </div>
    </div>
  );
}
