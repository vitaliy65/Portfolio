import React from "react";
import Title from "../General/Title";

export default function Article({ children, heading }) {
  return (
    <div class="mb-8 flex flex-col">
      <Title>{heading}</Title>
      <div class="text-justify">{children}</div>
    </div>
  );
}
