import React from "react";

// to fix
export default function Title({ children }) {
  return (
    <h3 className="underline underline-offset-8 decoration-solid my-3 font-bold">
      {children}
    </h3>
  );
}
