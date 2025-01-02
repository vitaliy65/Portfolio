import React from "react";

export default function Card({ children, img, title, to }) {
  return (
    <div className="mb-4 flex flex-col items-center w-full">
      <a href={to} target="_blank" rel="noreferrer" className="max-w-96">
        <div className="rounded-2xl w-full aspect-video relative overflow-hidden">
          <img
            src={img}
            alt={title}
            fill
            className="object-cover w-full h-full"
          />
        </div>
        <h4 className="mt-2 text-lg text-center font-semibold">{title}</h4>
        <p className="text-sm text-center">{children}</p>
      </a>
    </div>
  );
}
