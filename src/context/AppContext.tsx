import React, { useContext } from "react";

const appContext = React.createContext<object>({});

export const AppContextProvider: React.FC<{children: JSX.Element}> = ({
  children,
}) => {

 
  return (
    <appContext.Provider value={{ }}>
      {children}
    </appContext.Provider>
  );
};

export const useAppContext = () => useContext(appContext);