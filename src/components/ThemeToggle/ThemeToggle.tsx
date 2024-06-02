"use client";

import { Moon, Sun } from "lucide-react";
import styles from "./themeToggle.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);
  return (
    <div className={styles.container} onClick={toggle}>
      <Moon width={18} height={18} />
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { right: 0, backgroundColor: "white" }
            : { left: 0, backgroundColor: "black" }
        }
      ></div>
      <Sun width={18} height={18} />
    </div>
  );
};

export default ThemeToggle;
