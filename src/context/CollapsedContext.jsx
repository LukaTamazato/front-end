import React, { createContext, useContext, useState } from "react";

const CollapsedContext = createContext();

export const CollapsedProvider = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => setCollapsed((prev) => !prev);

  return (
    <CollapsedContext.Provider value={{ collapsed, toggleCollapsed }}>
      {children}
    </CollapsedContext.Provider>
  );
};

export const useCollapsed = () => {
  const context = useContext(CollapsedContext);
  if (context === undefined) {
    throw new Error("useCollapsed must be used within a CollapsedProvider");
  }
  return context;
};
