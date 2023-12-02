"use client";

import { useEffect, useState, createContext, useContext } from "react";

//types
import { Theme } from "@/lib/types";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      //keep track of the theme for each user in the local storage of the browser
      window.localStorage.setItem("theme", "dark");
      //add the class of dark to the dom
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  //reading the local storage data of the theme
  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;

    if (localTheme) {
      setTheme(localTheme);

      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      //if the user has his pc theme on dark, automatically change the website to dark
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;

export function useTheme(): ThemeContextType {
  const themeContext = useContext(ThemeContext);

  if (themeContext === null) {
    throw new Error("useThemeContext must be used within an ThemeContextProvider");
  }

  return themeContext;
}
