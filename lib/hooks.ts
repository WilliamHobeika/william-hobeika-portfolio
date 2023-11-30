import { useEffect } from "react";

//types
import type { SectionName } from "./types";

//react observer
import { useInView } from "react-intersection-observer";

//context
import { useActiveSectionContext } from "@/context/ActiveSectionContext";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  const { ref, inView } = useInView({
    threshold,
  }); //!inView is true if threshold% of this specific section is in the view

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}
