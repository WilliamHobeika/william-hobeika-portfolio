"use client";

import { BsMoon, BsSun } from "react-icons/bs";

//hooks
import { useTheme } from "@/context/ThemeContext";

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className="theme-switch_button" onClick={toggleTheme}>
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
};

export default ThemeSwitch;
