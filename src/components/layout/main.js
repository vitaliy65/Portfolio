import React from "react";
import Header from "../header";

export default function Layout({ children }) {
  return (
    <div class="bg-[#202023] text-[#ededed] pb-12">
      <Header />
      <div class="flex justify-center items-center min-h-screen">
        <div class="text-xl mx-auto w-[768px]">{children}</div>
      </div>
    </div>
  );
}
