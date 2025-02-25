import { ReactNode } from "react";

export const ArticleContainer: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">{children}</div>;
};
