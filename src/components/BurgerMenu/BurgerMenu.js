import { React, useState, useEffect } from "react";
import BurgerLinkItem from "./BurgerLinkItem.js";
import links from "../../data/Links.js";
import { useAppSelector } from "../../hooks/Hooks.ts";

export default function BurgerMenu() {
  const theme = useAppSelector((state) => state.themeState.theme);
  const [openMenu, setOpenMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobile && (
        <div class="ml-4">
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="flex 
          justify-center 
          items-center 
          h-full 
          w-10 
          rounded 
          dark:bg-[#323232] 
          bg-[#f6f0e8] 
          dark:hover:bg-[#464545] 
          hover:bg-[#fffdf5] border-2 
          dark:border-[#7c7c7c] 
          border-[#ffe0b1]"
          >
            <img
              src={
                theme === "light" ? "/burgerMenu.png" : "/burgerMenu-dark.png"
              }
              alt="github"
              class="h-[1.2rem] w-[1.2rem]"
            ></img>
          </button>
          {openMenu && (
            <div className="absolute right-0 mr-2 w-48 mt-4 rounded-md shadow-lg bg-white dark:bg-[#323232] border dark:border-[#7c7c7c] border-[#ffe0b1]">
              {links.map((link) => (
                <BurgerLinkItem
                  key={link.route}
                  route={link.route}
                  target={link.target}
                >
                  {link.label}
                </BurgerLinkItem>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
