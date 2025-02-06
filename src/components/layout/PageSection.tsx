import React, { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
export const PageSection: React.FC<Props> = ({ children }) => {
  return (
    <div className="h-[calc(100vh-7.5rem)] flex items-center justify-center">
      {children}
    </div>
  );
};
