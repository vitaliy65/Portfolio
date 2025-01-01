import React from "react";
import { Link } from "react-router-dom";

function LinkItem({ children, route }) {
  return (
    <Link
      to={route}
      class="flex h-full justify-center items-center mr-5 w-fit hover:bg-[#323232] rounded p-3 transition-colors"
    >
      {children}
    </Link>
  );
}

export default function linkElements() {
  return (
    <div class="flex w-fit">
      <LinkItem route="/works">Works</LinkItem>
      <LinkItem route="/something">Something</LinkItem>
      <LinkItem route="/source">
        <img src="/github-dark.png" alt="github" class="h-4 mr-1"></img> Source
      </LinkItem>
    </div>
  );
}
