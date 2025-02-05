import React, { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
export const PageSection: React.FC<Props> = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      {children}
    </div>
  );
};
