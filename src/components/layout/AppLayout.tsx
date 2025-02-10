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
      <div style={{backgroundColor:  "#eeede8"}} className="min-h-[calc(100vh-6rem)]">{children}</div>
      <Footer />
    </div>
  );
};
