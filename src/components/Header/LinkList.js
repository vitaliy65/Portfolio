import { React, useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/Hooks.ts";
import Logo from "./Logo.js";
import LinkItem from "./LinkItem.js";
import links from "../../data/Links.js";

export default function LinkList() {
  const theme = useAppSelector((state) => state.themeState.theme);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [selected, setSelected] = useState(null);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  const handleLogoClick = () => {
    setSelected("/");
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Logo onClick={handleLogoClick} />
      {!isMobile && (
        <div className="flex justify-between items-center">
          <>
            {links.map(({ route, label, img }) => (
              <LinkItem
                key={route}
                route={route}
                selected={selected === route}
                onClick={() => setSelected(route)}
                target={img ? "_blank" : undefined}
              >
                {img ? (
                  <img
                    src={theme === "light" ? "/github.png" : "/github-dark.png"}
                    alt="github"
                    className="h-4 mr-1"
                  />
                ) : null}
                {label}
              </LinkItem>
            ))}
          </>
        </div>
      )}
    </>
  );
}
