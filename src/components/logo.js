import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function Logo({ onClick }) {
  const { theme } = useTheme();

  return (
    <Link
      to={"/"}
      onClick={onClick}
      class="flex h-full justify-center items-center mr-5 w-fit"
    >
      <img
        src={
          theme === "light" ? "/homepage-icon.png" : "/homepage-icon-dark.png"
        }
        alt="homepage"
        class="h-6 mr-2"
      ></img>
      <div>Posvistak Vitaliy</div>
    </Link>
  );
}
