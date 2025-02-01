import React from "react";

export function Button({ variant, children }) {
  const baseStyles = "p-2 rounded-md flex items-center justify-center";
  const variantStyles = variant === "ghost" ? "bg-transparent hover:bg-gray-200" : "bg-blue-500 text-white";

  return <button className={`${baseStyles} ${variantStyles}`}>{children}</button>;
}
