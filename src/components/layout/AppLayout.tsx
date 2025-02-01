import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

import { Header } from "./Header";
import { Footer } from "./Footer";

export const AppLayout: React.FC<Props> = ({ children }) => {

  return (
    <div className="page absolute size-full">
      <Header />


      <div className="bg-blue-100 min-h-screen ">{children}</div>
      <Footer />
    </div>
  );
};
