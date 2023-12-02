"use client";

import { useState, createContext, useContext } from "react";

//types
import type { SectionName } from "@/lib/types";

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

const ActiveSectionContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0); //we need to keep track of this to disable the observer temporarily when the user clicks manually on the link, not scroll

  return (
    <ActiveSectionContext.Provider
      value={{ activeSection, setActiveSection, timeOfLastClick, setTimeOfLastClick }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

export default ActiveSectionContextProvider;

//custom hook to consume the context
export function useActiveSectionContext() {
  const ASContext = useContext(ActiveSectionContext);

  if (ASContext === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }

  return ASContext;
}
