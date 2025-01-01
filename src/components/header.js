import React from "react";
import Logo from "./logo";
import LinkElements from "./linkElements";

export default function header() {
  return (
    <div class="flex h-14 w-full items-center mb-7 bg-[#1c1c1c] text-white">
      <div class="flex w-[768px] mx-auto h-full p-2">
        <Logo />
        <LinkElements />
      </div>
    </div>
  );
}
