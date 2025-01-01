import React from "react";
import { Link } from "react-router-dom";

export default function logo() {
  return (
    <Link to={"/"} class="flex h-full justify-center items-center mr-5 w-fit">
      <img src="/homepage-icon-dark.png" alt="homepage" class="h-6 mr-2"></img>
      <div>Posvistak Vitaliy</div>
    </Link>
  );
}
