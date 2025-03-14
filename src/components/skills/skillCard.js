import React from "react";

export const SkillCard = ({ iconpath, skillName }) => {
  return (
    <div
      className="flex flex-col justify-center items-center rounded-xl lg:p-4 p-2 transition-all
      dark:bg-[#1c1c1c] 
      bg-[#f6f0e8]"
    >
      <img
        src={`icons/${iconpath}`}
        alt="icon"
        className="w-8 h-8 sm:w-16 sm:h-16"
      />
      <p className="text-center text-sm sm:text-xl">{skillName}</p>
    </div>
  );
};
