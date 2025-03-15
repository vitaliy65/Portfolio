import React from "react";
import { Link } from "react-router-dom";

export default function LinkItem({
  children,
  route,
  target,
  selected,
  onClick,
}) {
  return (
    <Link
      to={route}
      target={target}
      onClick={onClick}
      className={`flex items-center h-full mr-5 w-fit dark:hover:bg-[#323232] hover:bg-[#fffcfa] rounded p-3 transition-colors ${
        selected ? "bg-teal-400 text-black" : ""
      }`}
    >
      {children}
    </Link>
  );
}
