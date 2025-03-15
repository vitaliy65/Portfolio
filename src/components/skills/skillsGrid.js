import React from "react";

export default function SkillsGrid({ children }) {
  return (
    <div className="grid grid-cols-4 grid-flow-row mt-8 gap-8">{children}</div>
  );
}
