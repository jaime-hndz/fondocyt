import React, { ReactNode } from "react";

export const Article: React.FC<{ children: ReactNode; title: string }> = ({
  children,
  title,
}) => {
  return (
    <div>
      <div className="text-3xl font-bold text-gray-800">{title}</div>
      <hr className="my-4 border-gray-300" />
      <div className="text-gray-600 text-2xl ">{children}</div>
    </div>
  );
};
