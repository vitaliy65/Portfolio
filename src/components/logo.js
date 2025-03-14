import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks/hooks.ts";

export default function Logo({ onClick }) {
  const theme = useAppSelector((state) => state.themeState.theme);

  return (
    <Link
      to={"/"}
      onClick={onClick}
      className="flex h-full justify-center items-center mr-5 w-fit"
    >
      <img
        src={
          theme === "light" ? "/homepage-icon.png" : "/homepage-icon-dark.png"
        }
        alt="homepage"
        className="h-6 mr-2"
      ></img>
      <div>Posvistak Vitaliy</div>
    </Link>
  );
}
