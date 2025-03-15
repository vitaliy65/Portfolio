import React from "react";
import { Link } from "react-router-dom";

export default function BurgerLinkItem({ children, route, target }) {
  return (
    <Link
      to={route}
      target={target}
      className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-[#464545]"
    >
      {children}
    </Link>
  );
}
