import React from "react";

export const SkillCard = ({ iconpath, skillName }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src={`icons/${iconpath}`}
        alt="icon"
        className="w-8 h-8 sm:w-16 sm:h-16"
      />
      <p className="text-center text-sm sm:text-xl">{skillName}</p>
    </div>
  );
};
