"use client";

import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex items-center"
    >
      <Sun
        size={28}
        className="scale-100 opacity-100 transition-all duration-300 dark:scale-0 dark:opacity-0"
      />

      <MoonStar
        size={28}
        className="absolute scale-0 opacity-0 transition-all duration-300 dark:scale-100 dark:opacity-100"
      />
    </button>
  );
};

export default ThemeToggleButton;
