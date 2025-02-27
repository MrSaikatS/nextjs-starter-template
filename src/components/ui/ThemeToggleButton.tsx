"use client";

import { useTheme } from "next-themes";

const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      ThemeToggleButton
    </button>
  );
};

export default ThemeToggleButton;
