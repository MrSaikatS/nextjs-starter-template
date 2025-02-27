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
        size={24}
        className="scale-100 dark:scale-0"
      />

      <MoonStar
        size={24}
        className="absolute scale-0 dark:scale-100"
      />
    </button>
  );
};

export default ThemeToggleButton;
