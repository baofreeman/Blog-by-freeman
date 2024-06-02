"use client";

import { ReactElement, createContext, useEffect, useState } from "react";

type ContextType = {
  theme: string | undefined;
  toggle: () => void;
};

type Props = {
  children: ReactElement | undefined;
};

const themeContextDefaultValue: ContextType = {
  theme: "",
  toggle: () => {},
};

export const ThemeContext = createContext<ContextType>(
  themeContextDefaultValue
);

const getFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    return value || "light";
  }
};

const ThemeContextProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState(() => {
    return getFromLocalStorage();
  });

  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme as string);
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
