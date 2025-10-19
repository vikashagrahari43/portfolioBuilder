import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function Container({ children }: Props) {
  return (
    <div className="max-w-7xl mx-auto dark:bg-neutral-950 bg-neutral-100 min-h-screen p-1 relative overflow-hidden">
     {children}
    </div>
  );
}
