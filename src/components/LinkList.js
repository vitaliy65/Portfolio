import { React, useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import Logo from "./logo";
import LinkItem from "./LinkItem";
import links from "../data/Links";

export default function LinkList() {
  const { theme } = useTheme();
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
