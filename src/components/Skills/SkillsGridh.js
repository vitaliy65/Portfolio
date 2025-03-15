import React from "react";

// SkillsGrid component
export default function SkillsGrid({ children }) {
  return (
    <div className="grid grid-cols-4 grid-flow-row mt-8 gap-8">{children}</div>
  );
}
